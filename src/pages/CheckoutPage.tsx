import React, { useState } from 'react';
import { CreditCard, MapPin, Truck, Shield } from 'lucide-react';

const CheckoutPage: React.FC = () => {
  const [selectedAddress, setSelectedAddress] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('card');

  const addresses = [
    {
      id: 0,
      title: 'Ev',
      fullName: 'John Doe',
      address: 'Atatürk Mahallesi, Cumhuriyet Caddesi No:123/4',
      district: 'Kadıköy',
      city: 'İstanbul',
      phone: '+90 555 123 45 67'
    },
    {
      id: 1,
      title: 'İş',
      fullName: 'John Doe',
      address: 'İş Merkezi, Levent Mahallesi, Büyükdere Caddesi No:45',
      district: 'Şişli',
      city: 'İstanbul',
      phone: '+90 555 123 45 67'
    }
  ];

  const orderItems = [
    {
      id: 1,
      name: 'iPhone 14 Pro Max 128GB',
      price: 42999,
      quantity: 1,
      image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      id: 2,
      name: 'Samsung Galaxy Watch5 Pro',
      price: 3299,
      quantity: 2,
      image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('tr-TR').format(price);
  };

  const subtotal = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shippingCost = 0; // Free shipping
  const total = subtotal + shippingCost;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Ödeme</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Checkout Form */}
        <div className="lg:col-span-2 space-y-6">
          {/* Delivery Address */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-4">
              <MapPin className="h-5 w-5 text-blue-600 mr-2" />
              <h3 className="text-lg font-semibold">Teslimat Adresi</h3>
            </div>

            <div className="space-y-3">
              {addresses.map((address) => (
                <label
                  key={address.id}
                  className={`block p-4 border rounded-lg cursor-pointer transition-colors ${
                    selectedAddress === address.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <input
                    type="radio"
                    name="address"
                    value={address.id}
                    checked={selectedAddress === address.id}
                    onChange={() => setSelectedAddress(address.id)}
                    className="sr-only"
                  />
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center mb-1">
                        <span className="font-semibold text-gray-900">{address.title}</span>
                        <span className="ml-2 text-sm text-gray-600">({address.fullName})</span>
                      </div>
                      <p className="text-gray-600 text-sm mb-1">
                        {address.address}, {address.district}, {address.city}
                      </p>
                      <p className="text-gray-600 text-sm">{address.phone}</p>
                    </div>
                  </div>
                </label>
              ))}
            </div>

            <button className="mt-4 text-blue-600 hover:text-blue-700 font-medium">
              + Yeni Adres Ekle
            </button>
          </div>

          {/* Payment Method */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-4">
              <CreditCard className="h-5 w-5 text-blue-600 mr-2" />
              <h3 className="text-lg font-semibold">Ödeme Yöntemi</h3>
            </div>

            <div className="space-y-3 mb-6">
              <label className="flex items-center p-4 border rounded-lg cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={paymentMethod === 'card'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="mr-3"
                />
                <CreditCard className="h-5 w-5 text-gray-600 mr-2" />
                <span>Kredi/Banka Kartı</span>
              </label>

              <label className="flex items-center p-4 border rounded-lg cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="installment"
                  checked={paymentMethod === 'installment'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="mr-3"
                />
                <CreditCard className="h-5 w-5 text-gray-600 mr-2" />
                <span>Taksitli Ödeme</span>
              </label>
            </div>

            {paymentMethod === 'card' && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Kart Numarası
                    </label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Kart Üzerindeki İsim
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Son Kullanma Tarihi
                    </label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      CVV
                    </label>
                    <input
                      type="text"
                      placeholder="123"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Order Summary */}
        <div>
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Sipariş Özeti</h3>

            {/* Order Items */}
            <div className="space-y-3 mb-4">
              {orderItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {item.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {item.quantity} x {formatPrice(item.price)} TL
                    </p>
                  </div>
                  <span className="text-sm font-medium text-gray-900">
                    {formatPrice(item.price * item.quantity)} TL
                  </span>
                </div>
              ))}
            </div>

            <hr className="my-4" />

            {/* Price Breakdown */}
            <div className="space-y-3 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Ara Toplam</span>
                <span className="font-semibold">{formatPrice(subtotal)} TL</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Kargo</span>
                <span className="font-semibold text-green-600">Ücretsiz</span>
              </div>
            </div>
            
            <hr className="my-4" />
            
            <div className="flex justify-between text-lg font-bold mb-6">
              <span>Toplam</span>
              <span>{formatPrice(total)} TL</span>
            </div>

            {/* Security Info */}
            <div className="bg-green-50 p-4 rounded-lg mb-6">
              <div className="flex items-center text-green-800">
                <Shield className="h-5 w-5 mr-2" />
                <span className="text-sm font-medium">Güvenli Ödeme</span>
              </div>
              <p className="text-xs text-green-700 mt-1">
                256-bit SSL şifreleme ile korunuyor
              </p>
            </div>

            {/* Delivery Info */}
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <div className="flex items-center text-blue-800">
                <Truck className="h-5 w-5 mr-2" />
                <span className="text-sm font-medium">Teslimat Bilgisi</span>
              </div>
              <p className="text-xs text-blue-700 mt-1">
                Siparişiniz 1-3 iş günü içinde teslim edilecek
              </p>
            </div>

            <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Siparişi Tamamla
            </button>

            <p className="text-xs text-gray-600 text-center mt-4">
              Siparişinizi tamamlayarak{' '}
              <a href="#" className="text-blue-600 hover:underline">kullanım şartları</a>'nı
              kabul etmiş olursunuz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;