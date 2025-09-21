import React from 'react';
import { Bell, Settings, HelpCircle, BarChart3, Eye, Search, User, LogOut } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface SellerLayoutProps {
  children: React.ReactNode;
}

const SellerLayout: React.FC<SellerLayoutProps> = ({ children }) => {
  const location = useLocation();

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3, path: '/seller/dashboard' },
    { id: 'products', label: 'Ürünler', icon: BarChart3, path: '/seller/products' },
    { id: 'orders', label: 'Siparişler', icon: BarChart3, path: '/seller/orders' },
    { id: 'finance', label: 'Finans', icon: BarChart3, path: '/seller/finance' },
    { id: 'reports', label: 'Raporlar', icon: BarChart3, path: '/seller/reports' },
    { id: 'settings', label: 'Ayarlar', icon: Settings, path: '/seller/settings' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
  

      {/* Main Navigation */}
      <div className="bg-orange-500 text-white">
        <div className="px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <h2 className="text-xl font-bold">varonsoft</h2>
              <div className="flex items-center space-x-4 text-sm">
                <Link to="/seller/products" className="cursor-pointer hover:underline">Ürün</Link>
                <Link to="/seller/orders" className="cursor-pointer hover:underline">Sipariş & Kargo</Link>
                <Link to="/seller/finance" className="cursor-pointer hover:underline">Finans</Link>
                <span className="bg-green-500 px-2 py-1 rounded text-xs">Promosyon & Fırsat</span>
                <Link to="/seller/reports" className="cursor-pointer hover:underline">Raporlar</Link>
                <span className="cursor-pointer hover:underline">Magazza & Müşteri</span>
                <span className="cursor-pointer hover:underline">Reklam Yönetimi</span>
                <span className="bg-purple-500 px-2 py-1 rounded text-xs">Gelişkin Merchant</span>
                <span className="bg-pink-500 px-2 py-1 rounded text-xs">NE</span>
              </div>
            </div>
            <div className="flex items-center">
              <Search className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-lg min-h-screen">
          <div className="p-4">
            <div className="space-y-2">
              {sidebarItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;

                return (
                  <Link
                    key={item.id}
                    to={item.path}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-orange-100 text-orange-600 border-l-4 border-orange-500'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* User Profile Section */}
          <div className="absolute bottom-0 w-64 p-4 border-t bg-white">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                P
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium">Varonsoft</div>
                <div className="text-xs text-gray-500">ID: 999999</div>
              </div>
              <LogOut className="h-4 w-4 text-gray-400 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default SellerLayout;