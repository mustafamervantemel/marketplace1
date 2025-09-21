import React, { createContext, useContext, useEffect, useState } from 'react';
import { User as SupabaseUser } from '@supabase/supabase-js';
import { User } from '../types';
import { supabase } from '../lib/supabase';

interface AuthContextType {
  user: User | null;
  supabaseUser: SupabaseUser | null;
  loading: boolean;
  signUp: (email: string, password: string, userData: any) => Promise<any>;
  signIn: (email: string, password: string) => Promise<any>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [supabaseUser, setSupabaseUser] = useState<SupabaseUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // For demo purposes, skip authentication and just set loading to false
    const initDemo = async () => {
      try {
        // Try to get session, but handle errors gracefully
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.user) {
          setSupabaseUser(session.user);
          await fetchUserProfile(session.user.id);
        }
      } catch (error) {
        console.log('Demo mode: Supabase not configured, continuing without auth');
      }
      setLoading(false);
    };

    initDemo();

    // Try to listen for auth changes, but handle errors gracefully
    try {
      const { data: { subscription } } = supabase.auth.onAuthStateChange(
        async (event, session) => {
          if (session?.user) {
            setSupabaseUser(session.user);
            await fetchUserProfile(session.user.id);
          } else {
            setSupabaseUser(null);
            setUser(null);
          }
          setLoading(false);
        }
      );

      return () => subscription.unsubscribe();
    } catch (error) {
      console.log('Demo mode: Auth listener not available');
    }
  }, []);

  const fetchUserProfile = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', userId)
        .single();

      if (error) throw error;
      setUser(data);
    } catch (error) {
      console.log('Demo mode: User profile fetch not available, continuing without user data');
    }
  };

  const signUp = async (email: string, password: string, userData: any) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: userData
        }
      });

      if (data.user && !error) {
        // Create user profile
        const { error: profileError } = await supabase
          .from('users')
          .insert([
            {
              id: data.user.id,
              email: data.user.email,
              full_name: userData.full_name,
              user_type: userData.user_type || 'customer',
              phone: userData.phone,
              company_name: userData.company_name,
              tax_number: userData.tax_number,
              iban: userData.iban,
            }
          ]);

        if (profileError) {
          console.log('Demo mode: User profile creation not available');
        }
      }

      return { data, error };
    } catch (error) {
      console.log('Demo mode: Sign up not available');
      return { data: null, error: error };
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      return await supabase.auth.signInWithPassword({ email, password });
    } catch (error) {
      console.log('Demo mode: Sign in not available');
      return { data: null, error: error };
    }
  };

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
    } catch (error) {
      console.log('Demo mode: Sign out not available');
    }
    setUser(null);
    setSupabaseUser(null);
  };

  const value = {
    user,
    supabaseUser,
    loading,
    signUp,
    signIn,
    signOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};