import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Bell, Shield, CreditCard } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const ProfilePage: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: 'Profil Bilgileri', icon: User },
    { id: 'addresses', label: 'Adreslerim', icon: MapPin },
    { id: 'notifications', label: 'Bildirimler', icon: Bell },
    { id: 'security', label: 'Güvenlik', icon: Shield },
    { id: 'payment', label: 'Ödeme Yöntemleri', icon: CreditCard },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Hesabım</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6">
            {/* User Info */}
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <User className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">{user?.full_name}</h3>
              <p className="text-sm text-gray-600">{user?.email}</p>
            </div>

            {/* Navigation */}
            <nav className="space-y-1">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 text-left rounded-lg transition-colors ${
                      activeTab === tab.id
                        ? 'bg-blue-50 text-blue-600 font-medium'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <IconComponent className="h-5 w-5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg shadow-sm p-6">
            {activeTab === 'profile' && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">Profil Bilgileri</h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Ad Soyad
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          value={user?.full_name || ''}
                          className="w-full px-4 py-3 pl-11 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        E-posta Adresi
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          value={user?.email || ''}
                          className="w-full px-4 py-3 pl-11 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Telefon
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          value={user?.phone || ''}
                          className="w-full px-4 py-3 pl-11 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Hesap Türü
                      </label>
                      <input
                        type="text"
                        value={user?.user_type === 'customer' ? 'Müşteri' : user?.user_type === 'seller' ? 'Satıcı' : 'Admin'}
                        disabled
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600"
                      />
                    </div>
                  </div>

                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    Bilgileri Güncelle
                  </button>
                </form>
              </div>
            )}

            {activeTab === 'addresses' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Adreslerim</h2>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Yeni Adres Ekle
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">Ev Adresi</h3>
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                        Varsayılan
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Atatürk Mahallesi, Cumhuriyet Caddesi No:123/4<br />
                      Kadıköy, İstanbul<br />
                      +90 555 123 45 67
                    </p>
                    <div className="mt-3 flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-700 text-sm">
                        Düzenle
                      </button>
                      <button className="text-red-600 hover:text-red-700 text-sm">
                        Sil
                      </button>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">İş Adresi</h3>
                    <p className="text-gray-600 text-sm">
                      İş Merkezi, Levent Mahallesi, Büyükdere Caddesi No:45<br />
                      Şişli, İstanbul<br />
                      +90 555 123 45 67
                    </p>
                    <div className="mt-3 flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-700 text-sm">
                        Düzenle
                      </button>
                      <button className="text-red-600 hover:text-red-700 text-sm">
                        Sil
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">Bildirim Ayarları</h2>

                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900">E-posta Bildirimleri</h3>
                      <p className="text-sm text-gray-600">
                        Sipariş durumu ve kampanyalar hakkında e-posta alın
                      </p>
                    </div>
                    <label className="flex items-center">
                      <input type="checkbox" defaultChecked className="rounded" />
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900">SMS Bildirimleri</h3>
                      <p className="text-sm text-gray-600">
                        Kargo durumu hakkında SMS alın
                      </p>
                    </div>
                    <label className="flex items-center">
                      <input type="checkbox" defaultChecked className="rounded" />
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900">Push Bildirimleri</h3>
                      <p className="text-sm text-gray-600">
                        Özel teklifler ve güncellemeler için push bildirimi alın
                      </p>
                    </div>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded" />
                    </label>
                  </div>
                </div>

                <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Ayarları Kaydet
                </button>
              </div>
            )}

            {activeTab === 'security' && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">Güvenlik</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium text-gray-900 mb-4">Şifre Değiştir</h3>
                    <form className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Mevcut Şifre
                        </label>
                        <input
                          type="password"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Yeni Şifre
                        </label>
                        <input
                          type="password"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Yeni Şifre Tekrar
                        </label>
                        <input
                          type="password"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                        Şifreyi Güncelle
                      </button>
                    </form>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="font-medium text-gray-900 mb-4">İki Faktörlü Doğrulama</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Hesabınızın güvenliğini artırmak için iki faktörlü doğrulamayı etkinleştirin.
                    </p>
                    <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                      Etkinleştir
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'payment' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Ödeme Yöntemleri</h2>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Yeni Kart Ekle
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center">
                          <span className="text-white text-xs font-bold">VISA</span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">**** **** **** 1234</p>
                          <p className="text-sm text-gray-600">Son kullanma: 12/25</p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="text-blue-600 hover:text-blue-700 text-sm">
                          Düzenle
                        </button>
                        <button className="text-red-600 hover:text-red-700 text-sm">
                          Sil
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-8 bg-red-600 rounded flex items-center justify-center">
                          <span className="text-white text-xs font-bold">MC</span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">**** **** **** 5678</p>
                          <p className="text-sm text-gray-600">Son kullanma: 08/26</p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="text-blue-600 hover:text-blue-700 text-sm">
                          Düzenle
                        </button>
                        <button className="text-red-600 hover:text-red-700 text-sm">
                          Sil
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;