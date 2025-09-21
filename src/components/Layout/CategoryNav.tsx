import React from 'react';
import { ChevronRight } from 'lucide-react';

const categories = [
  { id: 1, name: 'Elektronik', count: 1250 },
  { id: 2, name: 'Moda', count: 3400 },
  { id: 3, name: 'Ev & Yaşam', count: 890 },
  { id: 4, name: 'Spor & Outdoor', count: 567 },
  { id: 5, name: 'Kitap, Müzik & Film', count: 234 },
  { id: 6, name: 'Oyuncak & Hobi', count: 445 },
  { id: 7, name: 'Kozmetik & Kişisel Bakım', count: 678 },
  { id: 8, name: 'Süpermarket', count: 1890 },
];

const CategoryNav: React.FC = () => {
  return (
    <nav className="bg-gray-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-8 py-3 overflow-x-auto">
          {categories.map((category) => (
            <a
              key={category.id}
              href={`/category/${category.id}`}
              className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 whitespace-nowrap group"
            >
              <span className="font-medium">{category.name}</span>
              <span className="text-sm text-gray-500">({category.count})</span>
              <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default CategoryNav;