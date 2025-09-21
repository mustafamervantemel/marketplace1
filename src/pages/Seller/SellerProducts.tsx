import React, { useState } from 'react';
import { Plus, Edit, Trash2, Eye, MoreVertical, Search, Filter } from 'lucide-react';

const SellerProducts: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const products = [
    {
      id: 1,
      name: 'iPhone 14 Pro Max 128GB Space Black',
      category: 'Elektronik',
      price: 42999,
      stock: 15,
      status: 'active',
      sales: 45,
      views: 1250,
      image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=100',
      createdAt: '2025-01-15'
    },
    {
      id: 2,
      name: 'Samsung Galaxy Watch5 Pro 45mm',
      category: 'Elektronik',
      price: 3299,
      stock: 8,
      status: 'active',
      sales: 67,
      views: 892,
      image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=100',
      createdAt: '2025-01-12'
    },
    {
      id: 3,
      name: 'Nike Air Max 270 White',
      category: 'Spor',
      price: 899,
      stock: 0,
      status: 'out_of_stock',
      sales: 23,
      views: 567,
      image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=100',
      createdAt: '2025-01-10'
    },
    {
      id: 4,
      name: 'MacBook Air M2 13" 256GB',
      category: 'Elektronik',
      price: 18999,
      stock: 5,
      status: 'draft',
      sales: 12,
      views: 234,
      image: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=100',
      createdAt: '2025-01-08'
    }
  ];

  const categories = ['Elektronik', 'Spor', 'Moda', 'Ev & Yaşam'];
  
  const statusLabels = {
    all: 'Tümü',
    active: 'Aktif',
    draft: 'Taslak',
    out_of_stock: 'Stokta Yok',
    inactive: 'Pasif'
  };

  const statusColors = {
    active: 'bg-green-100 text-green-800',
    draft: 'bg-gray-100 text-gray-800',
    out_of_stock: 'bg-red-100 text-red-800',
    inactive: 'bg-yellow-100 text-yellow-800'
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('tr-TR').format(price);
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || product.status === statusFilter;
    const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
    return matchesSearch && matchesStatus && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Ürünlerim</h1>
          <p className="text-gray-600 mt-2">Ürünlerinizi yönetin ve performanslarını takip edin</p>
        </div>
        <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>Yeni Ürün Ekle</span>
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Ürün ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>

          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {Object.entries(statusLabels).map(([value, label]) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>

          {/* Category Filter */}
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">Tüm Kategoriler</option>
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>

          {/* More Filters Button */}
          <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Filter className="h-4 w-4 mr-2" />
            <span>Daha Fazla Filtre</span>
          </button>
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Ürün</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Kategori</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Fiyat</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Stok</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Durum</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Satış/Görüntülenme</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                      <div>
                        <h4 className="font-medium text-gray-900">{product.name}</h4>
                        <p className="text-sm text-gray-600">ID: {product.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-600">{product.category}</td>
                  <td className="py-4 px-6">
                    <span className="font-semibold text-gray-900">
                      {formatPrice(product.price)} TL
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`font-medium ${
                      product.stock === 0 ? 'text-red-600' : 
                      product.stock < 10 ? 'text-yellow-600' : 'text-green-600'
                    }`}>
                      {product.stock}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[product.status]}`}>
                      {statusLabels[product.status]}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="text-sm">
                      <div className="text-gray-900 font-medium">{product.sales} satış</div>
                      <div className="text-gray-600">{product.views} görüntülenme</div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <button className="p-1 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="p-1 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="p-1 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded">
                        <Trash2 className="h-4 w-4" />
                      </button>
                      <button className="p-1 text-gray-600 hover:text-gray-700 hover:bg-gray-50 rounded">
                        <MoreVertical className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 mb-4">
              <Search className="h-12 w-12 mx-auto mb-4" />
              <p>Aradığınız kriterlere uygun ürün bulunamadı.</p>
            </div>
          </div>
        )}
      </div>

      {/* Pagination */}
      {filteredProducts.length > 0 && (
        <div className="flex items-center justify-between mt-6">
          <p className="text-gray-600">
            {filteredProducts.length} ürün gösteriliyor
          </p>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Önceki
            </button>
            <button className="px-3 py-2 bg-blue-600 text-white rounded-lg">
              1
            </button>
            <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              2
            </button>
            <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Sonraki
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SellerProducts;