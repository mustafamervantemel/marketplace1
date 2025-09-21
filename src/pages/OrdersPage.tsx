import React, { useState } from 'react';
import { Package, Truck, CheckCircle, Clock, Eye, Download } from 'lucide-react';

const OrdersPage: React.FC = () => {
  const [statusFilter, setStatusFilter] = useState('all');

  const orders = [
    {
      id: 'MP-2025-001234',
      date: '2025-01-15',
      status: 'delivered',
      total: 45298,
      items: [
        {
          name: 'iPhone 14 Pro Max 128GB',
          price: 42999,
          quantity: 1,
          image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=100'
        }
      ],
      trackingNumber: 'TR123456789'
    },
    {
      id: 'MP-2025-001235',
      date: '2025-01-18',
      status: 'shipped',
      total: 6598,
      items: [
        {
          name: 'Samsung Galaxy Watch5 Pro',
          price: 3299,
          quantity: 2,
          image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=100'
        }
      ],
      trackingNumber: 'TR987654321'
    },
    {
      id: 'MP-2025-001236',
      date: '2025-01-20',
      status: 'preparing',
      total: 899,
      items: [
        {
          name: 'Nike Air Max 270',
          price: 899,
          quantity: 1,
          image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=100'
        }
      ]
    }
  ];

  const statusLabels = {
    all: 'Tümü',
    pending: 'Beklemede',
    preparing: 'Hazırlanıyor',
    shipped: 'Kargoda',
    delivered: 'Teslim Edildi',
    cancelled: 'İptal Edildi'
  };

  const statusIcons = {
    pending: Clock,
    preparing: Package,
    shipped: Truck,
    delivered: CheckCircle,
    cancelled: Clock
  };

  const statusColors = {
    pending: 'text-yellow-600 bg-yellow-50',
    preparing: 'text-blue-600 bg-blue-50',
    shipped: 'text-purple-600 bg-purple-50',
    delivered: 'text-green-600 bg-green-50',
    cancelled: 'text-red-600 bg-red-50'
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('tr-TR').format(price);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const filteredOrders = statusFilter === 'all' 
    ? orders 
    : orders.filter(order => order.status === statusFilter);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Siparişlerim</h1>
        
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          {Object.entries(statusLabels).map(([value, label]) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
      </div>

      <div className="space-y-6">
        {filteredOrders.length === 0 ? (
          <div className="text-center py-12">
            <Package className="h-24 w-24 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Henüz siparişiniz yok
            </h3>
            <p className="text-gray-600 mb-6">
              İlk siparişinizi vermek için alışverişe başlayın
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Alışverişe Başla
            </button>
          </div>
        ) : (
          filteredOrders.map((order) => {
            const StatusIcon = statusIcons[order.status];
            return (
              <div key={order.id} className="bg-white rounded-lg shadow-sm border p-6">
                {/* Order Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <h3 className="font-semibold text-gray-900">
                      Sipariş #{order.id}
                    </h3>
                    <span className="text-sm text-gray-600">
                      {formatDate(order.date)}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium ${statusColors[order.status]}`}>
                      <StatusIcon className="h-4 w-4" />
                      <span>{statusLabels[order.status]}</span>
                    </div>
                    
                    <div className="flex space-x-2">
                      <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg">
                        <Download className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Order Items */}
                <div className="space-y-3 mb-4">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{item.name}</h4>
                        <p className="text-sm text-gray-600">
                          {item.quantity} adet × {formatPrice(item.price)} TL
                        </p>
                      </div>
                      <span className="font-semibold text-gray-900">
                        {formatPrice(item.price * item.quantity)} TL
                      </span>
                    </div>
                  ))}
                </div>

                {/* Order Footer */}
                <div className="border-t pt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {order.trackingNumber && (
                      <span className="text-sm text-gray-600">
                        Kargo Takip: <span className="font-medium">{order.trackingNumber}</span>
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <span className="text-lg font-bold text-gray-900">
                      Toplam: {formatPrice(order.total)} TL
                    </span>
                    
                    <div className="flex space-x-2">
                      {order.status === 'delivered' && (
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                          Tekrar Sipariş Ver
                        </button>
                      )}
                      {order.status === 'shipped' && (
                        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm">
                          Kargo Takip
                        </button>
                      )}
                      {order.status === 'preparing' && (
                        <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm">
                          İptal Et
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default OrdersPage;