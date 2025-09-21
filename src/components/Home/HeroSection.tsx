import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const banners = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/1619651/pexels-photo-1619651.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Elektronik Ürünlerde %50\'ye Varan İndirim',
      subtitle: 'En sevilen markalarda özel fiyatlar',
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Yaz Modası Burada',
      subtitle: 'Sezon trendlerini kaçırma',
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/1029236/pexels-photo-1029236.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Ev Dekorasyonunda Yenilik',
      subtitle: 'Evinizi yenileyin, hayatınızı güzelleştirin',
    },
  ];

  return (
    <div className="relative h-96 md:h-[500px] overflow-hidden rounded-xl">
      {/* Main banner */}
      <div className="relative h-full">
        <img
          src={banners[0].image}
          alt={banners[0].title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-lg text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {banners[0].title}
              </h1>
              <p className="text-xl mb-6 opacity-90">
                {banners[0].subtitle}
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
                Alışverişe Başla
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full shadow-lg transition-all">
        <ChevronLeft className="h-6 w-6 text-gray-700" />
      </button>
      <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full shadow-lg transition-all">
        <ChevronRight className="h-6 w-6 text-gray-700" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === 0 ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;