import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, Bell, Heart } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const { user, signOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className="bg-white shadow-sm border-b">
      {/* Top bar */}
      <div className="bg-orange-500 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <span>Demo Pazaryeri</span>
            <div className="flex items-center space-x-4">
              <Link
                to="/seller/dashboard"
                className="bg-black text-white px-3 py-1 rounded hover:bg-gray-800 transition-colors"
              >
                Satıcı Paneli
              </Link>
              <Link
                to="/"
                className="hover:underline"
              >
                Pazaryeri
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-orange-500 font-bold text-2xl">
              varonsoft
            </div>
          </Link>

          {/* Search bar */}
          <form onSubmit={handleSearch} className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Aradığınız ürünü yazın"
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white px-4 py-1.5 rounded-md hover:bg-orange-600 transition-colors"
              >
                Ara
              </button>
            </div>
          </form>

          {/* User actions */}
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <button className="relative p-2 hover:bg-gray-100 rounded-lg">
                  <Heart className="h-6 w-6 text-gray-600" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    3
                  </span>
                </button>
                <button className="relative p-2 hover:bg-gray-100 rounded-lg">
                  <Bell className="h-6 w-6 text-gray-600" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    2
                  </span>
                </button>
                <button className="relative p-2 hover:bg-gray-100 rounded-lg">
                  <ShoppingCart className="h-6 w-6 text-gray-600" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    5
                  </span>
                </button>
                <div className="relative">
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <User className="h-6 w-6 text-gray-600" />
                    <span className="hidden md:block text-gray-700">{user.full_name}</span>
                  </button>
                  {isMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border z-10">
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                      >
                        Hesabım
                      </Link>
                      <Link
                        to="/orders"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                      >
                        Siparişlerim
                      </Link>
                      {user.user_type === 'seller' && (
                        <Link
                          to="/seller/dashboard"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                        >
                          Satıcı Paneli
                        </Link>
                      )}
                      {user.user_type === 'admin' && (
                        <Link
                          to="/admin/dashboard"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                        >
                          Admin Paneli
                        </Link>
                      )}
                      <hr className="my-1" />
                      <button
                        onClick={signOut}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50"
                      >
                        Çıkış Yap
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-2">
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2"
                >
                  Giriş Yap
                </Link>
                <Link
                  to="/register"
                  className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Üye Ol
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;