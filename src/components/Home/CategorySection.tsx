import React from 'react';
import { Smartphone, Shirt, Home, Dumbbell, Book, Gamepad2, Sparkles, ShoppingBasket } from 'lucide-react';

const categories = [
  { id: 1, name: 'Elektronik', icon: Smartphone, color: 'bg-blue-500' },
  { id: 2, name: 'Moda', icon: Shirt, color: 'bg-pink-500' },
  { id: 3, name: 'Ev & Yaşam', icon: Home, color: 'bg-green-500' },
  { id: 4, name: 'Spor', icon: Dumbbell, color: 'bg-orange-500' },
  { id: 5, name: 'Kitap', icon: Book, color: 'bg-purple-500' },
  { id: 6, name: 'Oyuncak', icon: Gamepad2, color: 'bg-yellow-500' },
  { id: 7, name: 'Kozmetik', icon: Sparkles, color: 'bg-red-500' },
  { id: 8, name: 'Market', icon: ShoppingBasket, color: 'bg-indigo-500' },
];

const CategorySection: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Kategoriler</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <a
                key={category.id}
                href={`/category/${category.id}`}
                className="group flex flex-col items-center p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 hover:scale-105"
              >
                <div className={`${category.color} p-4 rounded-full mb-3 group-hover:shadow-lg transition-shadow`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700 text-center group-hover:text-gray-900">
                  {category.name}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;