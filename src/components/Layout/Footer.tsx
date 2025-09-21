import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="bg-primary-600 text-white px-4 py-2 rounded-lg font-bold text-xl mb-4 inline-block">
              MarketPlace
            </div>
            <p className="text-gray-300 mb-4">
              Türkiye'nin güvenilir e-ticaret platformu. Milyonlarca ürün, binlerce marka.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Müşteri Hizmetleri</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">Yardım Merkezi</a></li>
              <li><a href="#" className="hover:text-white">İletişim</a></li>
              <li><a href="#" className="hover:text-white">Canlı Destek</a></li>
              <li><a href="#" className="hover:text-white">İade & Değişim</a></li>
              <li><a href="#" className="hover:text-white">Güvenli Alışveriş</a></li>
            </ul>
          </div>

          {/* Seller */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Satıcı</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">Satıcı Ol</a></li>
              <li><a href="#" className="hover:text-white">Satıcı Girişi</a></li>
              <li><a href="#" className="hover:text-white">Satıcı Destek</a></li>
              <li><a href="#" className="hover:text-white">Satış Koşulları</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>0850 XXX XX XX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@marketplace.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>İstanbul, Türkiye</span>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 MarketPlace. Tüm hakları saklıdır.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm">Gizlilik Politikası</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">Kullanım Şartları</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">KVKK</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;