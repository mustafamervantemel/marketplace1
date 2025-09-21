import React, { useState } from 'react';
import { Star, Heart, Share2, ShoppingCart, Truck, Shield, RotateCcw, Plus, Minus } from 'lucide-react';

const ProductDetailPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedTab, setSelectedTab] = useState('description');

  const product = {
    id: 1,
    name: 'iPhone 14 Pro Max 128GB Space Black',
    price: 42999,
    originalPrice: 49999,
    discount: 14,
    rating: 4.8,
    reviewCount: 1250,
    seller: {
      name: 'Apple Store Turkey',
      rating: 4.9,
      followers: 125000
    },
    images: [
      'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1440727/pexels-photo-1440727.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5081398/pexels-photo-5081398.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    features: [
      'A16 Bionic çip',
      '6.7" Super Retina XDR ekran',
      '48MP Ana kamera sistemi',
      '128GB depolama',
      'Face ID ile güvenli kimlik doğrulama'
    ],
    stock: 15,
    shippingInfo: {
      freeShipping: true,
      estimatedDelivery: '1-3 iş günü',
      returnPolicy: '15 gün ücretsiz iade'
    }
  };

  const reviews = [
    {
      id: 1,
      user: 'Ahmet K.',
      rating: 5,
      comment: 'Harika bir telefon, kamera kalitesi mükemmel!',
      date: '2 gün önce'
    },
    {
      id: 2,
      user: 'Elif Y.',
      rating: 4,
      comment: 'Performans çok iyi ama fiyatı biraz yüksek.',
      date: '1 hafta önce'
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('tr-TR').format(price);
  };

  const handleQuantityChange = (change: number) => {
    setQuantity(prev => Math.max(1, Math.min(product.stock, prev + change)));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div>
          <div className="bg-white rounded-lg p-4 mb-4">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
          <div className="flex space-x-2 overflow-x-auto">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                  selectedImage === index ? 'border-blue-500' : 'border-gray-200'
                }`}
              >
                <img src={image} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <div className="bg-white rounded-lg p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-gray-600">
                {product.rating} ({product.reviewCount} değerlendirme)
              </span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-bold text-gray-900">
                  {formatPrice(product.price)} TL
                </span>
                <span className="text-lg text-gray-500 line-through">
                  {formatPrice(product.originalPrice)} TL
                </span>
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-semibold">
                  %{product.discount} İndirim
                </span>
              </div>
            </div>

            {/* Seller Info */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-900">{product.seller.name}</p>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">
                      {product.seller.rating} ({product.seller.followers.toLocaleString()} takipçi)
                    </span>
                  </div>
                </div>
                <button className="text-blue-600 hover:text-blue-700 font-medium">
                  Mağazayı Ziyaret Et
                </button>
              </div>
            </div>

            {/* Features */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">Özellikler</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-gray-700 font-medium">Adet:</span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="p-2 hover:bg-gray-50"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2 font-semibold">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="p-2 hover:bg-gray-50"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <span className="text-sm text-gray-600">
                  (Stokta {product.stock} adet var)
                </span>
              </div>

              <div className="flex space-x-3">
                <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                  <ShoppingCart className="h-5 w-5" />
                  <span>Sepete Ekle</span>
                </button>
                <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Heart className="h-5 w-5 text-gray-600" />
                </button>
                <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Share2 className="h-5 w-5 text-gray-600" />
                </button>
              </div>

              <button className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                Hemen Al
              </button>
            </div>

            {/* Shipping Info */}
            <div className="mt-6 space-y-3">
              {product.shippingInfo.freeShipping && (
                <div className="flex items-center text-green-600">
                  <Truck className="h-5 w-5 mr-2" />
                  <span>Ücretsiz Kargo</span>
                </div>
              )}
              <div className="flex items-center text-gray-600">
                <Shield className="h-5 w-5 mr-2" />
                <span>Güvenli Ödeme</span>
              </div>
              <div className="flex items-center text-gray-600">
                <RotateCcw className="h-5 w-5 mr-2" />
                <span>{product.shippingInfo.returnPolicy}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Tabs */}
      <div className="mt-12">
        <div className="bg-white rounded-lg">
          <div className="border-b">
            <div className="flex space-x-8 px-6">
              {[
                { id: 'description', label: 'Açıklama' },
                { id: 'reviews', label: `Değerlendirmeler (${product.reviewCount})` },
                { id: 'shipping', label: 'Kargo & İade' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                  className={`py-4 px-2 font-medium text-sm border-b-2 transition-colors ${
                    selectedTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6">
            {selectedTab === 'description' && (
              <div className="prose max-w-none">
                <p className="text-gray-600 leading-relaxed">
                  iPhone 14 Pro Max, Apple'ın en gelişmiş teknolojilerini bir araya getiren 
                  premium akıllı telefon modelidir. A16 Bionic çip ile güçlendirilmiş bu cihaz, 
                  günlük kullanımdan profesyonel fotografçılığa kadar her alanda üstün performans sunar.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  6.7 inçlik Super Retina XDR ekranı ile sinema kalitesinde görsel deneyim yaşayın. 
                  48MP Ana kamera sistemi ile çektiğiniz fotoğraflar ve videolar profesyonel 
                  kalitede olacak.
                </p>
              </div>
            )}

            {selectedTab === 'reviews' && (
              <div className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-200 pb-6">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <span className="font-semibold text-gray-900">{review.user}</span>
                        <div className="flex items-center ml-3">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                    <p className="text-gray-600">{review.comment}</p>
                  </div>
                ))}
              </div>
            )}

            {selectedTab === 'shipping' && (
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">Kargo Bilgileri</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 150 TL ve üzeri siparişlerde kargo ücretsiz</li>
                  <li>• Siparişiniz 1-3 iş günü içinde kargoya verilir</li>
                  <li>• Türkiye geneli teslimat yapılır</li>
                </ul>

                <h3 className="font-semibold text-gray-900 mt-6">İade Şartları</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Ürünü teslim aldığınız tarihten itibaren 15 gün içinde iade edebilirsiniz</li>
                  <li>• Ürün kutusunda, etiketlerinde ve ambalajında hasar olmamalıdır</li>
                  <li>• İade kargo ücreti tarafımıza aittir</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;