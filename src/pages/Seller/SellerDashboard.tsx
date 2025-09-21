import React from 'react';
import {
  TrendingUp,
  DollarSign,
  ShoppingCart,
  Package,
  Users,
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
  HelpCircle,
  Target,
  AlertCircle,
  CheckCircle,
  Clock,
  Star
} from 'lucide-react';

const SellerDashboard: React.FC = () => {
  const statsCards = [
    {
      title: "Bugünkü Satış",
      value: "5.760 ₺",
      change: "+4.8%",
      changeType: "increase",
      icon: DollarSign,
      color: "text-green-600"
    },
    {
      title: "Toplam Gelir",
      value: "2.002.021 ₺",
      change: "+12.3%",
      changeType: "increase",
      icon: TrendingUp,
      color: "text-blue-600"
    },
    {
      title: "Bekleyen Siparişler",
      value: "23",
      change: "-2.1%",
      changeType: "decrease",
      icon: ShoppingCart,
      color: "text-orange-600"
    },
    {
      title: "Toplam Ürün",
      value: "1,247",
      change: "+8.9%",
      changeType: "increase",
      icon: Package,
      color: "text-purple-600"
    }
  ];

  const recentOrders = [
    {
      id: "VS-2024-001",
      customer: "Ahmet Yılmaz",
      product: "iPhone 15 Pro Max",
      amount: 52999,
      status: "processing",
      date: "2 saat önce"
    },
    {
      id: "VS-2024-002",
      customer: "Elif Kaya",
      product: "Samsung Galaxy Watch",
      amount: 4299,
      status: "shipped",
      date: "4 saat önce"
    },
    {
      id: "VS-2024-003",
      customer: "Mehmet Demir",
      product: "MacBook Air M3",
      amount: 28999,
      status: "delivered",
      date: "1 gün önce"
    },
    {
      id: "VS-2024-004",
      customer: "Zeynep Öz",
      product: "AirPods Pro",
      amount: 7999,
      status: "processing",
      date: "3 saat önce"
    }
  ];

  const topProducts = [
    {
      name: "iPhone 15 Pro Max",
      sales: 156,
      revenue: 8267844,
      trend: "up",
      image: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      name: "MacBook Air M3",
      sales: 89,
      revenue: 2580911,
      trend: "up",
      image: "https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      name: "Samsung Galaxy Watch",
      sales: 234,
      revenue: 1005966,
      trend: "down",
      image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=100"
    }
  ];

  const statusColors = {
    processing: 'bg-yellow-100 text-yellow-800',
    shipped: 'bg-blue-100 text-blue-800',
    delivered: 'bg-green-100 text-green-800'
  };

  const statusLabels = {
    processing: 'Hazırlanıyor',
    shipped: 'Kargoda',
    delivered: 'Teslim Edildi'
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('tr-TR').format(price);
  };

  return (
    <div className="space-y-6">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white rounded-lg p-6">
        <div className="flex items-center justify-center space-x-4">
          <div className="text-2xl font-bold">17-22 EYLÜL</div>
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-2xl px-4 py-2 rounded">
            MEGA EYLÜL
          </div>
          <div className="text-xl">Bitiyor!</div>
          <div className="text-3xl font-bold ml-8">SON GÜNLER!</div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6 border">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-full ${stat.color} bg-opacity-10`}>
                  <IconComponent className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className={`flex items-center text-sm ${
                  stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.changeType === 'increase' ? (
                    <ArrowUpRight className="h-4 w-4 mr-1" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4 mr-1" />
                  )}
                  {stat.change}
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.title}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sales Performance */}
        <div className="bg-white rounded-lg shadow-sm p-6 border">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Satış Performansı</h3>
            <HelpCircle className="h-5 w-5 text-gray-400" />
          </div>

          <div className="space-y-6">
            <div>
              <div className="text-sm text-gray-600 mb-1">Bugünkü Satış</div>
              <div className="text-red-500 text-sm mb-2">+4.8%</div>
              <div className="text-3xl font-bold text-gray-900">5.760 ₺</div>
            </div>

            <div>
              <div className="text-sm text-gray-600 mb-1">Güncel Dönem</div>
              <div className="text-3xl font-bold text-gray-900">2.002.021 ₺</div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="text-sm text-blue-800">
                Vadesi geçmiş bekleme tutarınız 7.052 ₺ erken ödeme alabilirsiniz!
              </div>
            </div>

            <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors">
              Satış Performansı Detayları
            </button>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="bg-white rounded-lg shadow-sm p-6 border">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Son Siparişler</h3>
            <button className="text-orange-500 hover:text-orange-600 text-sm font-medium">
              Tümünü Gör
            </button>
          </div>

          <div className="space-y-4">
            {recentOrders.map((order) => (
              <div key={order.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900 text-sm">#{order.id}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[order.status]}`}>
                      {statusLabels[order.status]}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{order.customer}</p>
                  <p className="text-sm text-gray-600 mb-2">{order.product}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-900 text-sm">
                      {formatPrice(order.amount)} ₺
                    </span>
                    <span className="text-xs text-gray-500">{order.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white rounded-lg shadow-sm p-6 border">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">En Çok Satan Ürünler</h3>
            <button className="text-orange-500 hover:text-orange-600 text-sm font-medium">
              Detayları Gör
            </button>
          </div>

          <div className="space-y-4">
            {topProducts.map((product, index) => (
              <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-12 h-12 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 text-sm mb-1">{product.name}</h4>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">{product.sales} satış</span>
                    {product.trend === 'up' ? (
                      <ArrowUpRight className="h-3 w-3 text-green-500" />
                    ) : (
                      <ArrowDownRight className="h-3 w-3 text-red-500" />
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900 text-sm">
                    {formatPrice(product.revenue)} ₺
                  </p>
                  <p className="text-xs text-gray-600">gelir</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Actions and Quick Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Actions */}
        <div className="bg-white rounded-lg shadow-sm p-6 border">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Aksiyonlar</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 px-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <AlertCircle className="h-5 w-5 text-red-500" />
                <span className="text-gray-700">Şikayet & Operasyon</span>
              </div>
              <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm font-medium">0</span>
            </div>
            <div className="flex items-center justify-between py-3 px-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-yellow-500" />
                <span className="text-gray-700">Bekleyen Siparişler</span>
              </div>
              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm font-medium">23</span>
            </div>
            <div className="flex items-center justify-between py-3 px-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Package className="h-5 w-5 text-blue-500" />
                <span className="text-gray-700">Stoktan Düşenler</span>
              </div>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm font-medium">5</span>
            </div>
            <div className="flex items-center justify-between py-3 px-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">Müşteri Duyurumları</span>
              </div>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">0</span>
            </div>
          </div>

          <button className="w-full mt-6 bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors">
            Giriş Detayları
          </button>
        </div>

        {/* Announcements */}
        <div className="bg-white rounded-lg shadow-sm p-6 border">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Duyurularınız</h3>
            <button className="text-orange-500 hover:text-orange-600 text-sm font-medium">
              Tüm Duyurular
            </button>
          </div>

          <div className="space-y-4">
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">
                  <Star className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-900 mb-1">Satışta %15 Artışın Sırı</div>
                  <div className="text-xs text-gray-600 mb-2">VaronSoft 2024 kampanyasına katılın, üreticilerinizi satışınızı zirveye çıkarın!</div>
                  <button className="text-xs text-orange-600 font-medium hover:underline">
                    Kampanyaları İncele!
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="text-sm text-blue-800">
                <div className="font-medium mb-1">Operasyon Bildirimi</div>
                <div className="text-xs">Görev senaryosunun tamamlanması için 24 saat içinde cevap verilmesi gerekiyor.</div>
              </div>
            </div>
          </div>

          <button className="w-full mt-6 bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors">
            Tümünü Başvur
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;