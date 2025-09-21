import React from 'react';
import { Star, Heart, ShoppingCart } from 'lucide-react';

const HomePage: React.FC = () => {
  const categories = [
    { name: 'Yemek', icon: '🍔', color: 'bg-orange-500' },
    { name: 'Ayakkabıların Keyifli', icon: '👟', color: 'bg-blue-500' },
    { name: 'Evlilik Gözetek Kampanyaları', icon: '💒', color: 'bg-pink-500' },
    { name: 'Sanat Eserleri', icon: '🎨', color: 'bg-purple-500' },
    { name: 'İyi Fiyatlı Ürünler', icon: '❄️', color: 'bg-cyan-500' },
    { name: 'Sen De Al', icon: '👗', color: 'bg-red-500' },
    { name: 'Avantajlı Ürünler', icon: '🎁', color: 'bg-green-500' },
    { name: 'İndirim Kuponlarım', icon: '🎫', color: 'bg-yellow-500' },
    { name: 'Kreditler', icon: '💳', color: 'bg-gray-500' },
    { name: 'Kredi Kartı', icon: '💴', color: 'bg-indigo-500' },
    { name: 'Yeni Gelen Ürünler', icon: '🌟', color: 'bg-orange-400' }
  ];

  const products = [
    {
      id: 1,
      title: 'COMBO MECHAl Kadın Büzgülü Kapası Dino Lop İç Geralliştirici 2 Parça Şık Eşofman Takımı',
      image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.4,
      reviews: 5241,
      price: 164.95,
      originalPrice: 329.90,
      badge: 'Çok Satan',
      badgeColor: 'bg-red-500'
    },
    {
      id: 2,
      title: 'Dış Sipariş 438 gr Doğal Uzmasına Desteği Nüfüzlü Yağı İki İçim',
      image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.6,
      reviews: 1074,
      price: 39.90,
      originalPrice: 79.80,
      badge: 'Çok Satan',
      badgeColor: 'bg-red-500'
    },
    {
      id: 3,
      title: 'Starbaby Soft Sallı Bebek Pijama Set 1 Yaş & Pamuk Dalada',
      image: 'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.3,
      reviews: 2286,
      price: 199.90,
      originalPrice: 399.80,
      badge: 'Flaş Ürün',
      badgeColor: 'bg-orange-500'
    },
    {
      id: 4,
      title: 'Soft Kızlı Kapüşonlu Polar Üçüçer Gizli',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.5,
      reviews: 165,
      price: 299.90,
      originalPrice: 599.80,
      badge: 'Flaş Ürün',
      badgeColor: 'bg-orange-500'
    },
    {
      id: 5,
      title: 'Gimart Mevkadar Kadın Şık Örgü Dış Gömlek Kontak Lacivertini Kombinler',
      image: 'https://images.pexels.com/photos/984619/pexels-photo-984619.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.2,
      reviews: 892,
      price: 199.90,
      originalPrice: 399.80,
      badge: 'Flaş Ürün',
      badgeColor: 'bg-green-500'
    },
    {
      id: 6,
      title: 'medisaydirm Ceza Sweatshirt Siya İtem Yaylırmın Maymun',
      image: 'https://images.pexels.com/photos/581338/pexels-photo-581338.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.7,
      reviews: 1543,
      price: 499.90,
      originalPrice: 999.80,
      badge: 'Çok Satan',
      badgeColor: 'bg-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white text-center py-4">
        <div className="flex items-center justify-center space-x-4">
          <div className="text-2xl font-bold">17-22 EYLÜL</div>
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-2xl px-4 py-2 rounded">
            MEGA EYLÜL
          </div>
          <div className="text-xl">Bitiyor!</div>
          <div className="text-3xl font-bold ml-8">SON GÜNLER!</div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center space-x-6">
              <div className="text-2xl font-bold text-orange-500">trendyol</div>
              <div className="flex items-center space-x-4 text-sm">
                <span className="hover:text-orange-500 cursor-pointer">TÜM KATEGORİLER</span>
                <span className="hover:text-orange-500 cursor-pointer">Kadın</span>
                <span className="hover:text-orange-500 cursor-pointer">Erkek</span>
                <span className="bg-orange-500 text-white px-2 py-1 rounded text-xs">Kozmo & Güzellik</span>
                <span className="hover:text-orange-500 cursor-pointer">Ev & Yaşam</span>
                <span className="hover:text-orange-500 cursor-pointer">Süpermarket</span>
                <span className="hover:text-orange-500 cursor-pointer">Kozmetik</span>
                <span className="hover:text-orange-500 cursor-pointer">Ayakkabı & Çanta</span>
                <span className="hover:text-orange-500 cursor-pointer">Elektronik</span>
                <span className="hover:text-orange-500 cursor-pointer">Çok Satanlar</span>
                <span className="bg-red-500 text-white px-2 py-1 rounded text-xs">Flaş Ürünler</span>
                <span className="bg-red-500 text-white px-2 py-1 rounded text-xs">Flaş Ürünler</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-orange-500">Giriş Yap</button>
              <button className="text-gray-600 hover:text-orange-500">Favorilerim</button>
              <button className="text-gray-600 hover:text-orange-500">Sepetim</button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center cursor-pointer group">
              <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
                {category.icon}
              </div>
              <span className="text-xs mt-2 text-gray-700 text-center">{category.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Products Section */}
      <div className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Popüler Ürünler</h2>
            <button className="text-orange-500 hover:underline">Tümünü Gör →</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className={`absolute top-2 left-2 ${product.badgeColor} text-white text-xs px-2 py-1 rounded`}>
                    {product.badge}
                  </div>
                  <button className="absolute top-2 right-2 p-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart className="h-4 w-4 text-gray-600" />
                  </button>
                </div>

                <div className="p-3 text-gray-900">
                  <h3 className="text-sm font-medium mb-2 line-clamp-2">{product.title}</h3>

                  <div className="flex items-center space-x-1 mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-600">({product.reviews})</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-lg font-bold text-orange-600">{product.price.toFixed(2)} TL</div>
                      <div className="text-xs text-gray-500 line-through">{product.originalPrice.toFixed(2)} TL</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Flash Sale Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold">⚡ Flaş Ürünler</div>
              <div className="text-sm">Sınırlı süre</div>
            </div>
            <button className="bg-white text-blue-600 px-4 py-2 rounded font-medium hover:bg-gray-100">
              Tümünü gör →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;