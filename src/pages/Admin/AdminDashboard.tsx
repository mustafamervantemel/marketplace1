import React from 'react';
import { 
  Users, 
  Package, 
  DollarSign, 
  ShoppingCart, 
  TrendingUp, 
  AlertTriangle,
  Calendar,
  ArrowUp,
  ArrowDown
} from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const stats = [
    {
      label: 'Toplam Kullanıcılar',
      value: '12,845',
      change: '+12.5%',
      trend: 'up',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      label: 'Aktif Satıcılar',
      value: '1,234',
      change: '+8.2%',
      trend: 'up',
      icon: Package,
      color: 'text-green-600'
    },
    {
      label: 'Aylık Ciro',
      value: '₺2,840,500',
      change: '+15.3%',
      trend: 'up',
      icon: DollarSign,
      color: 'text-purple-600'
    },
    {
      label: 'Toplam Siparişler',
      value: '8,567',
      change: '-2.1%',
      trend: 'down',
      icon: ShoppingCart,
      color: 'text-orange-600'
    }
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'user_register',
      message: 'Yeni kullanıcı kaydı: Ahmet Yılmaz',
      time: '5 dakika önce',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      id: 2,
      type: 'seller_approval',
      message: 'Satıcı onaylandı: TechStore',
      time: '15 dakika önce',
      icon: Package,
      color: 'text-green-600'
    },
    {
      id: 3,
      type: 'high_value_order',
      message: 'Yüksek değerli sipariş: ₺45,000',
      time: '1 saat önce',
      icon: DollarSign,
      color: 'text-purple-600'
    },
    {
      id: 4,
      type: 'product_report',
      message: 'Ürün şikayeti: iPhone 14 Pro',
      time: '2 saat önce',
      icon: AlertTriangle,
      color: 'text-red-600'
    }
  ];

  const topSellers = [
    {
      name: 'Apple Store Turkey',
      sales: 456000,
      orders: 1250,
      rating: 4.9,
      commission: 68400
    },
    {
      name: 'Samsung Official',
      sales: 324000,
      orders: 890,
      rating: 4.8,
      commission: 48600
    },
    {
      name: 'TechWorld',
      sales: 189000,
      orders: 567,
      rating: 4.7,
      commission: 28350
    }
  ];

  const pendingApprovals = [
    {
      id: 1,
      type: 'seller',
      name: 'ElektronikDünyası',
      date: '2025-01-20',
      status: 'pending'
    },
    {
      id: 2,
      type: 'product',
      name: 'iPhone 15 Pro Max',
      seller: 'MobilShop',
      date: '2025-01-19',
      status: 'pending'
    },
    {
      id: 3,
      type: 'return',
      name: 'MacBook Air İade Talebi',
      customer: 'Mehmet K.',
      date: '2025-01-18',
      status: 'pending'
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('tr-TR').format(price);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-600 mt-2">Platform performansını ve kullanıcıları yönetin</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-2">
                <div className={`p-2 rounded-lg ${stat.color} bg-opacity-10`}>
                  <IconComponent className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className={`flex items-center text-sm ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.trend === 'up' ? (
                    <ArrowUp className="h-4 w-4 mr-1" />
                  ) : (
                    <ArrowDown className="h-4 w-4 mr-1" />
                  )}
                  {stat.change}
                </div>
              </div>
              <div className="mb-1">
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Recent Activities */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Son Aktiviteler</h3>
          <div className="space-y-4">
            {recentActivities.map((activity) => {
              const IconComponent = activity.icon;
              return (
                <div key={activity.id} className="flex items-start space-x-3">
                  <div className={`p-2 rounded-lg ${activity.color} bg-opacity-10`}>
                    <IconComponent className={`h-4 w-4 ${activity.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900">{activity.message}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Top Sellers */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">En İyi Satıcılar</h3>
          <div className="space-y-4">
            {topSellers.map((seller, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">{seller.name}</h4>
                  <p className="text-sm text-gray-600">
                    {seller.orders} sipariş • {seller.rating} ⭐
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">
                    ₺{formatPrice(seller.sales)}
                  </p>
                  <p className="text-sm text-gray-600">
                    Komisyon: ₺{formatPrice(seller.commission)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pending Approvals */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Bekleyen Onaylar</h3>
          <div className="space-y-4">
            {pendingApprovals.map((item) => (
              <div key={item.id} className="border border-gray-200 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    item.type === 'seller' ? 'bg-blue-100 text-blue-800' :
                    item.type === 'product' ? 'bg-green-100 text-green-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {item.type === 'seller' ? 'Satıcı' :
                     item.type === 'product' ? 'Ürün' : 'İade'}
                  </span>
                  <span className="text-xs text-gray-500">{item.date}</span>
                </div>
                <h5 className="font-medium text-gray-900 text-sm mb-1">{item.name}</h5>
                {item.seller && (
                  <p className="text-xs text-gray-600">Satıcı: {item.seller}</p>
                )}
                {item.customer && (
                  <p className="text-xs text-gray-600">Müşteri: {item.customer}</p>
                )}
                <div className="flex space-x-2 mt-2">
                  <button className="text-xs bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700">
                    Onayla
                  </button>
                  <button className="text-xs bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700">
                    Reddet
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Hızlı İşlemler</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <Users className="h-6 w-6 text-blue-600" />
            <span className="font-medium">Kullanıcıları Yönet</span>
          </button>
          
          <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <Package className="h-6 w-6 text-green-600" />
            <span className="font-medium">Ürünleri İncele</span>
          </button>
          
          <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <DollarSign className="h-6 w-6 text-purple-600" />
            <span className="font-medium">Finansal Raporlar</span>
          </button>
          
          <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <AlertTriangle className="h-6 w-6 text-red-600" />
            <span className="font-medium">Şikayetler</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;