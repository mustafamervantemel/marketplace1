import React, { useState } from 'react';
import { Minus, Plus, Trash2, ArrowRight, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'iPhone 14 Pro Max 128GB',
      price: 42999,
      quantity: 1,
      image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=200',
      seller: 'Apple Store'
    },
    {
      id: 2,
      name: 'Samsung Galaxy Watch5 Pro',
      price: 3299,
      quantity: 2,
      image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=200',
      seller: 'Samsung'
    },
    {
      id: 3,
      name: 'Nike Air Max 270',
      price: 899,
      quantity: 1,
      image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=200',
      seller: 'Nike Store'
    }
  ]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('tr-TR').format(price);
  };

  const updateQuantity = (id: number, change: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shippingCost = subtotal >= 15000 ? 0 : 29.99;
  const total = subtotal + shippingCost;

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto text-center">
          <ShoppingBag className="h-24 w-24 text-gray-400 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sepetiniz boş</h2>
          <p className="text-gray-600 mb-6">
            Henüz sepetinize ürün eklemediniz. Alışverişe başlamak için kategorilere göz atabilirsiniz.
          </p>
          <Link
            to="/"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block"
          >
            Alışverişe Başla
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm">
            <div className="px-6 py-4 border-b">
              <h2 className="text-xl font-bold text-gray-900">
                Sepetim ({cartItems.length} ürün)
              </h2>
            </div>

            <div className="divide-y">
              {cartItems.map((item) => (
                <div key={item.id} className="p-6">
                  <div className="flex items-start space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">Satıcı: {item.seller}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center border border-gray-300 rounded-lg">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="p-2 hover:bg-gray-50"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="px-3 py-2 font-semibold">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="p-2 hover:bg-gray-50"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                          
                          <button
                            onClick={() => removeItem(item.id)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                        
                        <div className="text-right">
                          <p className="font-bold text-lg text-gray-900">
                            {formatPrice(item.price * item.quantity)} TL
                          </p>
                          <p className="text-sm text-gray-600">
                            Birim: {formatPrice(item.price)} TL
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div>
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Sipariş Özeti</h3>
            
            <div className="space-y-3 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Ara Toplam</span>
                <span className="font-semibold">{formatPrice(subtotal)} TL</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Kargo</span>
                <span className={`font-semibold ${shippingCost === 0 ? 'text-green-600' : ''}`}>
                  {shippingCost === 0 ? 'Ücretsiz' : `${formatPrice(shippingCost)} TL`}
                </span>
              </div>
              
              {subtotal < 15000 && (
                <div className="text-sm text-blue-600 bg-blue-50 p-3 rounded-lg">
                  {formatPrice(15000 - subtotal)} TL daha alışveriş yapın, kargo ücretsiz olsun!
                </div>
              )}
            </div>
            
            <div className="border-t pt-4 mb-6">
              <div className="flex justify-between text-lg font-bold">
                <span>Toplam</span>
                <span>{formatPrice(total)} TL</span>
              </div>
            </div>
            
            <Link
              to="/checkout"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Ödeme Yap</span>
              <ArrowRight className="h-5 w-5" />
            </Link>

            <div className="mt-4 space-y-2">
              <div className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span>Güvenli ödeme</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span>15 gün ücretsiz iade</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span>1-3 iş günü teslimat</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;