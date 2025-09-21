import React, { useState } from 'react';
import { Package, Search, Filter, Eye, CheckCircle, X, Flag, MoreVertical } from 'lucide-react';

const AdminProducts: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const products = [
    {
      id: 1,
      name: 'iPhone 14 Pro Max 128GB Space Black',
      seller: 'Apple Store Turkey',
      category: 'Elektronik',
      price: 42999,
      stock: 15,
      status: 'active',
      approvalStatus: 'approved',
      reports: 0,
      views: 1250,
      sales: 45,
      image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=100',
      createdAt: '2025-01-15',
      lastUpdated: '2025-01-20'
    },
    {
      id: 2,
      name: 'Samsung Galaxy Watch5 Pro 45mm',
      seller: 'Samsung Official',
      category: 'Elektronik',
      price: 3299,
      stock: 8,
      status: 'active',
      approvalStatus: 'approved',
      reports: 1,
      views: 892,
      sales: 67,
      image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=100',
      createdAt: '2025-01-12',
      lastUpdated: '2025-01-19'
    },
    {
      id: 3,
      name: 'Fake iPhone - Sahte Ürün',
      seller: 'ŞüpheliSatıcı',
      category: 'Elektronik',
      price: 299,
      stock: 50,
      status: 'suspended',
      approvalStatus: 'rejected',
      reports: 15,
      views: 234,
      sales: 0,
      image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=100',
      createdAt: '2025-01-18',
      lastUpdated: '2025-01-19'
    },
    {
      id: 4,
      name: 'MacBook Air M2 13" 256GB',
      seller: 'TechWorld',
      category: 'Elektronik',
      price: 18999,
      stock: 5,
      status: 'pending',
      approvalStatus: 'pending',
      reports: 0,
      views: 67,
      sales: 0,
      image: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=100',
      createdAt: '2025-01-19',
      lastUpdated: '2025-01-19'
    }
  ];

  const categories = ['Elektronik', 'Moda', 'Ev & Yaşam', 'Spor', 'Kitap'];
  
  const statusLabels = {
    all: 'Tümü',
    active: 'Aktif',
    pending: 'Beklemede',
    suspended: 'Askıya Alınmış',
    rejected: 'Reddedildi'
  };

  const approvalStatusLabels = {
    pending: 'Beklemede',
    approved: 'Onaylandı',
    rejected: 'Reddedildi'
  };

  const statusColors = {
    active: 'bg-green-100 text-green-800',
    pending: 'bg-yellow-100 text-yellow-800',
    suspended: 'bg-red-100 text-red-800',
    rejected: 'bg-red-100 text-red-800'
  };

  const approvalColors = {
    pending: 'bg-yellow-100 text-yellow-800',
    approved: 'bg-green-100 text-green-800',
    rejected: 'bg-red-100 text-red-800'
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('tr-TR').format(price);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('tr-TR');
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.seller.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
    const matchesStatus = statusFilter === 'all' || product.status === statusFilter;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const handleProductAction = (productId: number, action: string) => {
    console.log(`Performing ${action} on product ${productId}`);
    // Handle product actions here
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Ürün Yönetimi</h1>
          <p className="text-gray-600 mt-2">Platform ürünlerini kontrol edin ve yönetin</p>
        </div>
        <div className="flex items-center space-x-3">
          <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
            {products.filter(p => p.reports > 0).length} şikayetli ürün
          </span>
          <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
            {products.filter(p => p.approvalStatus === 'pending').length} onay bekleyen
          </span>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Ürün veya satıcı ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>

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

          {/* Quick Filters */}
          <div className="flex space-x-2">
            <button className="flex-1 px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm">
              Şikayetliler
            </button>
            <button className="flex-1 px-3 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors text-sm">
              Bekleyenler
            </button>
          </div>
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Ürün</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Satıcı</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Kategori</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Fiyat</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Durum</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Onay</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Şikayet</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Performans</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.id} className={`border-b border-gray-200 hover:bg-gray-50 ${
                  product.reports > 0 ? 'bg-red-50' : ''
                }`}>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                      <div>
                        <h4 className="font-medium text-gray-900 max-w-xs truncate">
                          {product.name}
                        </h4>
                        <p className="text-sm text-gray-600">ID: {product.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="text-sm">
                      <div className="text-gray-900 font-medium">{product.seller}</div>
                      <div className="text-gray-600">{formatDate(product.createdAt)}</div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-600">{product.category}</td>
                  <td className="py-4 px-6">
                    <span className="font-semibold text-gray-900">
                      {formatPrice(product.price)} TL
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[product.status]}`}>
                      {statusLabels[product.status]}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${approvalColors[product.approvalStatus]}`}>
                      {approvalStatusLabels[product.approvalStatus]}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    {product.reports > 0 ? (
                      <div className="flex items-center text-red-600">
                        <Flag className="h-4 w-4 mr-1" />
                        <span className="font-medium">{product.reports}</span>
                      </div>
                    ) : (
                      <span className="text-gray-400">0</span>
                    )}
                  </td>
                  <td className="py-4 px-6">
                    <div className="text-sm">
                      <div className="text-gray-900">{product.sales} satış</div>
                      <div className="text-gray-600">{product.views} görüntülenme</div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <button 
                        onClick={() => handleProductAction(product.id, 'view')}
                        className="p-1 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded"
                        title="Detayları Görüntüle"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      
                      {product.approvalStatus === 'pending' && (
                        <>
                          <button 
                            onClick={() => handleProductAction(product.id, 'approve')}
                            className="p-1 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded"
                            title="Onayla"
                          >
                            <CheckCircle className="h-4 w-4" />
                          </button>
                          <button 
                            onClick={() => handleProductAction(product.id, 'reject')}
                            className="p-1 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded"
                            title="Reddet"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </>
                      )}

                      {product.reports > 0 && (
                        <button 
                          onClick={() => handleProductAction(product.id, 'investigate')}
                          className="p-1 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded"
                          title="Şikayetleri İncele"
                        >
                          <Flag className="h-4 w-4" />
                        </button>
                      )}

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
            <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">Aradığınız kriterlere uygun ürün bulunamadı.</p>
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

export default AdminProducts;