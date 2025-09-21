import React from 'react';
import { Star, Heart, ShoppingCart } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  seller: string;
  discount?: number;
}

const products: Product[] = [
  {
    id: 1,
    name: 'iPhone 14 Pro Max 128GB',
    price: 42999,
    originalPrice: 49999,
    rating: 4.8,
    reviewCount: 1250,
    image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400',
    seller: 'Apple Store',
    discount: 14,
  },
  {
    id: 2,
    name: 'Samsung Galaxy Watch5 Pro',
    price: 3299,
    originalPrice: 3999,
    rating: 4.6,
    reviewCount: 892,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400',
    seller: 'Samsung',
    discount: 18,
  },
  {
    id: 3,
    name: 'Nike Air Max 270',
    price: 899,
    rating: 4.7,
    reviewCount: 2341,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400',
    seller: 'Nike Store',
  },
  {
    id: 4,
    name: 'MacBook Air M2',
    price: 18999,
    originalPrice: 21999,
    rating: 4.9,
    reviewCount: 567,
    image: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=400',
    seller: 'Apple Store',
    discount: 14,
  },
];

interface ProductGridProps {
  title: string;
  subtitle?: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ title, subtitle }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('tr-TR').format(price);
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">{title}</h2>
          {subtitle && <p className="text-gray-600">{subtitle}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-sm border hover:shadow-lg transition-all duration-300 group"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.discount && (
                  <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-bold">
                    -%{product.discount}
                  </div>
                )}
                <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-50">
                  <Heart className="h-4 w-4 text-gray-600 hover:text-red-500" />
                </button>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                  {product.name}
                </h3>

                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">
                      {product.rating} ({product.reviewCount})
                    </span>
                  </div>
                </div>

                <p className="text-sm text-gray-500 mb-3">{product.seller}</p>

                <div className="flex items-center justify-between mb-3">
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-gray-900">
                      {formatPrice(product.price)} TL
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        {formatPrice(product.originalPrice)} TL
                      </span>
                    )}
                  </div>
                </div>

                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 group">
                  <ShoppingCart className="h-4 w-4" />
                  <span>Sepete Ekle</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-8 py-3 rounded-lg font-semibold transition-colors">
            Daha Fazla Ürün Gör
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;