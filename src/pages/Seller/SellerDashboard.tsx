import React from 'react';
import {
  TrendingUp,
  Package,
  ShoppingCart,
  DollarSign,
  Users,
  Star,
  BarChart3,
  Eye,
  Download,
  Bell,
  Settings,
  HelpCircle
} from 'lucide-react';

const SellerDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-black border-b border-gray-800">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-white">trendyol</h1>
              <div className="flex items-center space-x-2 text-sm">
                <span className="text-gray-400">Satıcı Paneli</span>
                <span className="text-gray-400">→</span>
                <span className="text-gray-400">Trendyol Akademi</span>
                <span className="text-gray-400">→</span>
                <span className="text-gray-400">Entegrasyon Dokümanter</span>
                <span className="text-gray-400">→</span>
                <span className="text-orange-500">Mağaza Seneleri</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Bell className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <HelpCircle className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Settings className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <div className="text-sm text-white">Popüzone (ID: 994801)</div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Performance Card */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-6 mb-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold mb-2">Satış Performansım</h2>
              <div className="flex items-center space-x-6">
                <div>
                  <div className="text-sm text-purple-200">Ürün Satışı</div>
                  <div className="text-2xl font-bold">5.760 ₺</div>
                </div>
                <div>
                  <div className="text-sm text-purple-200">Son 30 Gün</div>
                  <div className="text-2xl font-bold">23.511 ₺</div>
                </div>
              </div>
              <div className="mt-4 text-sm">
                <span>Geçtiğiniz döneme göre: </span>
                <span className="font-semibold">%9.2 ↗ artmış ödememeyi atladınız!</span>
              </div>
            </div>
            <div className="text-right">
              <button className="bg-white text-purple-600 px-4 py-2 rounded font-medium">
                Satış Performansı
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Actions */}
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-white font-semibold mb-4">Aksiyonlar</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">Şikayet & Operasyon</span>
                  <span className="text-white">0</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">Bekleyen Siparişler</span>
                  <span className="text-white">0</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">Stoktan Düşenler</span>
                  <span className="text-white">0</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">Reddeden Siparişler</span>
                  <span className="text-white">5</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">Bekleyen Belgeler</span>
                  <span className="text-white">5</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">Müşteri Duyurumları</span>
                  <span className="text-white">0</span>
                </div>
              </div>
              <button className="w-full mt-4 bg-orange-500 text-white py-2 rounded font-medium">
                Giriş Detayları
              </button>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-white font-semibold mb-4">Satış Aktivesi</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">Bekleyen Siparişler</span>
                  <span className="text-white">23 ₺</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">Zarf Siparişler Ücretsiz</span>
                  <span className="text-white">%3.75</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">Benzin Bekleyen Ücretsiz</span>
                  <span className="text-white">5 / tl</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">Avantajlı Ürün Bilgileri</span>
                  <span className="text-white">0</span>
                </div>
              </div>
            </div>
          </div>

          {/* Center Column - Performance */}
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="text-center mb-6">
              <div className="inline-flex items-center bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Star className="h-4 w-4 mr-2" />
                Satış Performansı
              </div>
            </div>

            <div className="text-center text-white mb-6">
              <div className="text-3xl font-bold mb-2">2.002.021 ₺</div>
              <div className="text-gray-400 text-sm">Gecikmeli Değerlendirme</div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-orange-500 text-sm mb-1">Günümüniz Ürünü</div>
                <div className="text-white font-semibold">%8.2%</div>
              </div>
              <div className="text-center">
                <div className="text-green-500 text-sm mb-1">Bugün Satışı</div>
                <div className="text-white font-semibold">112</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-4 text-white text-center">
              <div className="text-sm mb-2">Yeni: İndirimlerle</div>
              <div className="text-sm mb-2">Gösterim Değişiklikleri</div>
              <div className="text-xs">Yeni geliştirimiz sayesinde ürünlerimizi de gylipgük net işlimler de os yazılık üncülük!</div>
              <button className="mt-3 bg-white text-orange-500 px-4 py-1 rounded text-sm font-medium">
                Net İndirim Oluştur
              </button>
            </div>
          </div>

          {/* Right Column - Buyer Information */}
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold">Buyurularınız</h3>
                <span className="text-orange-500 text-sm">Tüm Duyurular</span>
              </div>

              <div className="bg-red-900 border border-red-700 rounded p-3 mb-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  <div>
                    <div className="text-white text-sm font-medium">Trend'N'İL</div>
                    <div className="text-red-300 text-xs">Satışım Antika (35°)</div>
                    <div className="text-red-300 text-xs">Ürün dahil (37°)</div>
                  </div>
                </div>
              </div>

              <div className="bg-orange-900 border border-orange-700 rounded p-3 mb-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  <div>
                    <div className="text-white text-sm font-medium">Kremldi bekızer (37°)</div>
                    <div className="text-orange-300 text-xs">09.09.2025 10:14</div>
                  </div>
                </div>
              </div>

              <div className="bg-green-900 border border-green-700 rounded p-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <div>
                    <div className="text-white text-sm font-medium">Operasyon (5)</div>
                    <div className="text-green-300 text-xs">Tamamlani: Başarlı operasyon sıralanmış</div>
                  </div>
                </div>
              </div>

              <button className="w-full mt-4 bg-orange-500 text-white py-2 rounded font-medium">
                Tüm Başavı
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;