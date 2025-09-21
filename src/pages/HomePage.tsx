import React from 'react';
import { Star, Heart, ShoppingCart, TrendingUp, Filter, Grid, List, Search } from 'lucide-react';

const HomePage: React.FC = () => {
  const categories = [
    { name: 'Elektronik', icon: '📱', color: 'bg-blue-500', count: '(1250)' },
    { name: 'Moda', icon: '👗', color: 'bg-pink-500', count: '(3400)' },
    { name: 'Ev & Yaşam', icon: '🏠', color: 'bg-green-500', count: '(890)' },
    { name: 'Spor & Outdoor', icon: '⚽', color: 'bg-orange-500', count: '(667)' },
    { name: 'Kitap, Müzik & Film', icon: '📚', color: 'bg-purple-500', count: '(234)' },
    { name: 'Oyuncak & Hobi', icon: '🧸', color: 'bg-red-500', count: '(445)' },
    { name: 'Kozmetik & Kişisel Bakım', icon: '💄', color: 'bg-pink-400', count: '(678)' },
    { name: 'Süpermarket', icon: '🛒', color: 'bg-green-600', count: '(1450)' },
    { name: 'Otomotiv', icon: '🚗', color: 'bg-gray-600', count: '(789)' },
    { name: 'Anne & Bebek', icon: '👶', color: 'bg-yellow-500', count: '(567)' },
    { name: 'Pet Shop', icon: '🐕', color: 'bg-brown-500', count: '(123)' }
  ];

  const products = [
    {
      id: 1,
      title: 'Apple iPhone 15 Pro Max 256GB',
      image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.8,
      reviews: 2847,
      price: 52999.00,
      originalPrice: 57999.00,
      discount: 9,
      badge: 'En Çok Satan',
      badgeColor: 'bg-red-500',
      seller: 'VaronTech',
      freeShipping: true
    },
    {
      id: 2,
      title: 'Samsung Galaxy Watch 6 Classic 47mm',
      image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.6,
      reviews: 1574,
      price: 4299.00,
      originalPrice: 5999.00,
      discount: 28,
      badge: 'Flaş İndirim',
      badgeColor: 'bg-orange-500',
      seller: 'TechStore',
      freeShipping: true
    },
    {
      id: 3,
      title: 'MacBook Air M3 13" 256GB Space Gray',
      image: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.9,
      reviews: 967,
      price: 28999.00,
      originalPrice: 32999.00,
      discount: 12,
      badge: 'Yeni',
      badgeColor: 'bg-green-500',
      seller: 'AppleCenter',
      freeShipping: true
    },
    {
      id: 4,
      title: 'Sony WH-1000XM5 Kablosuz Kulaklık',
      image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.7,
      reviews: 1823,
      price: 7999.00,
      originalPrice: 9999.00,
      discount: 20,
      badge: 'Çok Satan',
      badgeColor: 'bg-red-500',
      seller: 'AudioWorld',
      freeShipping: false
    },
    {
      id: 5,
      title: 'Nike Air Max 270 Erkek Spor Ayakkabı',
      image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.4,
      reviews: 3456,
      price: 2199.00,
      originalPrice: 2799.00,
      discount: 21,
      badge: 'Spor',
      badgeColor: 'bg-blue-500',
      seller: 'SportMax',
      freeShipping: true
    },
    {
      id: 6,
      title: 'Dyson V15 Detect Kablosuz Süpürge',
      image: 'https://images.pexels.com/photos/4239035/pexels-photo-4239035.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.8,
      reviews: 892,
      price: 18999.00,
      originalPrice: 22999.00,
      discount: 17,
      badge: 'Premium',
      badgeColor: 'bg-purple-500',
      seller: 'ElektroMag',
      freeShipping: true
    },
    {
      id: 7,
      title: 'ZARA Kadın Blazer Ceket - Siyah',
      image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.3,
      reviews: 567,
      price: 899.00,
      originalPrice: 1299.00,
      discount: 31,
      badge: 'Moda',
      badgeColor: 'bg-pink-500',
      seller: 'FashionHub',
      freeShipping: false
    },
    {
      id: 8,
      title: 'Philips Airfryer XXL 7.3L',
      image: 'https://images.pexels.com/photos/4518654/pexels-photo-4518654.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.6,
      reviews: 2134,
      price: 3799.00,
      originalPrice: 4499.00,
      discount: 16,
      badge: 'Mutfak',
      badgeColor: 'bg-yellow-500',
      seller: 'HomeCenter',
      freeShipping: true
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('tr-TR').format(price);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white text-center py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-4">
            <div className="text-2xl font-bold">17-22 EYLÜL</div>
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-2xl px-6 py-3 rounded-lg">
              MEGA EYLÜL
            </div>
            <div className="text-xl">Bitiyor!</div>
            <div className="text-3xl font-bold ml-8">SON GÜNLER!</div>
          </div>
          <div className="mt-4 text-lg">
            Binlerce üründe <span className="font-bold">%70'e varan indirimler!</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        {/* Categories Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Kategoriler</h2>
            <button className="text-orange-500 hover:text-orange-600 text-sm font-medium">
              Tümünü Gör
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-11 gap-4">
            {categories.map((category, index) => (
              <div key={index} className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 cursor-pointer group transition-colors">
                <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform mb-3`}>
                  {category.icon}
                </div>
                <span className="text-sm font-medium text-gray-900 text-center mb-1">{category.name}</span>
                <span className="text-xs text-gray-500">{category.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Filters and Sort */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Filter className="h-4 w-4" />
                <span>Filtrele</span>
              </button>
              <div className="text-sm text-gray-600">
                <span className="font-medium">8,476</span> ürün bulundu
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                <option>En Çok Satan</option>
                <option>Fiyat (Düşük-Yüksek)</option>
                <option>Fiyat (Yüksek-Düşük)</option>
                <option>En Yeni</option>
                <option>En Yüksek Puan</option>
              </select>
              <div className="flex border border-gray-300 rounded-lg">
                <button className="p-2 bg-orange-500 text-white">
                  <Grid className="h-4 w-4" />
                </button>
                <button className="p-2 hover:bg-gray-50">
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform"
                />
                <div className={`absolute top-3 left-3 ${product.badgeColor} text-white text-xs px-2 py-1 rounded font-medium`}>
                  {product.badge}
                </div>
                <div className="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-1 rounded font-bold">
                  %{product.discount}
                </div>
                <button className="absolute top-12 right-3 p-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-50">
                  <Heart className="h-4 w-4 text-gray-600" />
                </button>
                {product.freeShipping && (
                  <div className="absolute bottom-3 left-3 bg-green-500 text-white text-xs px-2 py-1 rounded font-medium">
                    Ücretsiz Kargo
                  </div>
                )}
              </div>

              <div className="p-4">
                <div className="text-xs text-gray-500 mb-2">{product.seller}</div>
                <h3 className="text-sm font-medium text-gray-900 mb-3 line-clamp-2 h-10">{product.title}</h3>

                <div className="flex items-center space-x-1 mb-3">
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
                  <span className="text-xs text-gray-600">({formatPrice(product.reviews)})</span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-lg font-bold text-orange-600">{formatPrice(product.price)} ₺</div>
                      <div className="text-sm text-gray-500 line-through">{formatPrice(product.originalPrice)} ₺</div>
                    </div>
                  </div>

                  <button className="w-full bg-orange-500 text-white py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2">
                    <ShoppingCart className="h-4 w-4" />
                    <span>Sepete Ekle</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <button className="bg-white text-orange-500 border border-orange-500 px-8 py-3 rounded-lg font-medium hover:bg-orange-50 transition-colors">
            Daha Fazla Ürün Yükle
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-12 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ücretsiz Kargo</h3>
              <p className="text-gray-600">150 TL ve üzeri alışverişlerde ücretsiz kargo</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Güvenli Alışveriş</h3>
              <p className="text-gray-600">SSL sertifikası ile korunan güvenli ödeme</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">7/24 Destek</h3>
              <p className="text-gray-600">Müşteri hizmetlerimiz 7/24 hizmetinizde</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;