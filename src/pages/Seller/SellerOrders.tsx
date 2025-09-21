import React, { useState } from 'react';
import { Package, Truck, CheckCircle, Clock, MessageSquare, Eye, Printer } from 'lucide-react';

const SellerOrders: React.FC = () => {
  const [statusFilter, setStatusFilter] = useState('all');

  const orders = [
    {
      id: 'MP-001234',
      customer: {
        name: 'Ahmet Yılmaz',
        email: 'ahmet@example.com',
        phone: '+90 555 123 45 67'
      },
      items: [
        {
          name: 'iPhone 14 Pro Max 128GB',
          quantity: 1,
          price: 42999,
          image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=100'
        }
      ],
      total: 42999,
      status: 'pending',
      date: '2025-01-20',
      shippingAddress: {
        fullName: 'Ahmet Yılmaz',
        address: 'Atatürk Mahallesi, Cumhuriyet Caddesi No:123/4',
        district: 'Kadıköy',
        city: 'İstanbul',
        phone: '+90 555 123 45 67'
      }
    },
    {
      id: 'MP-001235',
      customer: {
        name: 'Elif Kaya',
        email: 'elif@example.com',
        phone: '+90 555 987 65 43'
      },
      items: [
        {
          name: 'Samsung Galaxy Watch5 Pro',
          quantity: 2,
          price: 3299,
          image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=100'
        }
      ],
      total: 6598,
      status: 'preparing',
      date: '2025-01-18',
      shippingAddress: {
        fullName: 'Elif Kaya',
        address: 'İnönü Mahallesi, Gazi Caddesi No:456/7',
        district: 'Beşiktaş',
        city: 'İstanbul',
        phone: '+90 555 987 65 43'
      }
    },
    {
      id: 'MP-001236',
      customer: {
        name: 'Mehmet Demir',
        email: 'mehmet@example.com',
        phone: '+90 555 456 78 90'
      },
      items: [
        {
          name: 'MacBook Air M2',
          quantity: 1,
          price: 18999,
          image: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=100'
        }
      ],
      total: 18999,
      status: 'shipped',
      date: '2025-01-15',
      trackingNumber: 'TR123456789',
      shippingAddress: {
        fullName: 'Mehmet Demir',
        address: 'Çamlık Mahallesi, Atatürk Bulvarı No:789/12',
        district: 'Üsküdar',
        city: 'İstanbul',
        phone: '+90 555 456 78 90'
      }
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

  const handleStatusChange = (orderId: string, newStatus: string) => {
    // Handle status change logic here
    console.log(`Changing order ${orderId} status to ${newStatus}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Siparişler</h1>
          <p className="text-gray-600 mt-2">Gelen siparişleri yönetin ve takip edin</p>
        </div>
        
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
              Henüz sipariş yok
            </h3>
            <p className="text-gray-600">
              Bu duruma göre sipariş bulunmuyor.
            </p>
          </div>
        ) : (
          filteredOrders.map((order) => {
            const StatusIcon = statusIcons[order.status];
            return (
              <div key={order.id} className="bg-white rounded-lg shadow-sm border p-6">
                {/* Order Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <h3 className="font-semibold text-gray-900 text-lg">
                      Sipariş #{order.id}
                    </h3>
                    <span className="text-sm text-gray-600">
                      {formatDate(order.date)}
                    </span>
                    <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium ${statusColors[order.status]}`}>
                      <StatusIcon className="h-4 w-4" />
                      <span>{statusLabels[order.status]}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg">
                      <Printer className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg">
                      <MessageSquare className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Customer Info */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Müşteri Bilgileri</h4>
                    <div className="space-y-2">
                      <p className="text-gray-600">{order.customer.name}</p>
                      <p className="text-sm text-gray-500">{order.customer.email}</p>
                      <p className="text-sm text-gray-500">{order.customer.phone}</p>
                    </div>
                  </div>

                  {/* Shipping Address */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Teslimat Adresi</h4>
                    <div className="text-sm text-gray-600">
                      <p className="font-medium">{order.shippingAddress.fullName}</p>
                      <p>{order.shippingAddress.address}</p>
                      <p>{order.shippingAddress.district}, {order.shippingAddress.city}</p>
                      <p>{order.shippingAddress.phone}</p>
                    </div>
                  </div>

                  {/* Order Items */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Sipariş Detayları</h4>
                    <div className="space-y-3">
                      {order.items.map((item, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-12 h-12 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <p className="font-medium text-gray-900 text-sm">{item.name}</p>
                            <p className="text-sm text-gray-600">
                              {item.quantity} adet × {formatPrice(item.price)} TL
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Order Actions */}
                <div className="border-t pt-6 mt-6 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {order.status === 'pending' && (
                      <>
                        <button 
                          onClick={() => handleStatusChange(order.id, 'preparing')}
                          className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors text-sm"
                        >
                          Siparişi Onayla
                        </button>
                        <button 
                          onClick={() => handleStatusChange(order.id, 'cancelled')}
                          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm"
                        >
                          İptal Et
                        </button>
                      </>
                    )}
                    
                    {order.status === 'preparing' && (
                      <button 
                        onClick={() => handleStatusChange(order.id, 'shipped')}
                        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm"
                      >
                        Kargoya Ver
                      </button>
                    )}

                    {order.status === 'shipped' && order.trackingNumber && (
                      <div className="text-sm text-gray-600">
                        Kargo Takip: <span className="font-medium">{order.trackingNumber}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="text-right">
                    <p className="text-lg font-bold text-gray-900">
                      Toplam: {formatPrice(order.total)} TL
                    </p>
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

export default SellerOrders;