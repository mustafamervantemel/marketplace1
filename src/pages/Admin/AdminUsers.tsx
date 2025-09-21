import React, { useState } from 'react';
import { Users, Search, Filter, MoreVertical, Ban, CheckCircle, Eye, Mail } from 'lucide-react';

const AdminUsers: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [userTypeFilter, setUserTypeFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const users = [
    {
      id: '1',
      name: 'Ahmet Yılmaz',
      email: 'ahmet@example.com',
      phone: '+90 555 123 45 67',
      userType: 'customer',
      status: 'active',
      joinDate: '2024-12-15',
      totalOrders: 15,
      totalSpent: 45670,
      lastLogin: '2025-01-20'
    },
    {
      id: '2',
      name: 'Apple Store Turkey',
      email: 'info@applestore.com',
      phone: '+90 212 555 00 00',
      userType: 'seller',
      status: 'active',
      joinDate: '2024-01-10',
      totalSales: 1250,
      totalRevenue: 2840500,
      rating: 4.9,
      lastLogin: '2025-01-20'
    },
    {
      id: '3',
      name: 'Elif Kaya',
      email: 'elif@example.com',
      phone: '+90 555 987 65 43',
      userType: 'customer',
      status: 'active',
      joinDate: '2024-11-22',
      totalOrders: 8,
      totalSpent: 12340,
      lastLogin: '2025-01-19'
    },
    {
      id: '4',
      name: 'TechWorld',
      email: 'contact@techworld.com',
      phone: '+90 216 444 55 66',
      userType: 'seller',
      status: 'suspended',
      joinDate: '2024-08-05',
      totalSales: 567,
      totalRevenue: 189000,
      rating: 4.2,
      lastLogin: '2025-01-15'
    },
    {
      id: '5',
      name: 'Mehmet Demir',
      email: 'mehmet@example.com',
      phone: '+90 555 456 78 90',
      userType: 'customer',
      status: 'inactive',
      joinDate: '2024-06-12',
      totalOrders: 3,
      totalSpent: 5670,
      lastLogin: '2024-12-01'
    }
  ];

  const userTypeLabels = {
    all: 'Tümü',
    customer: 'Müşteriler',
    seller: 'Satıcılar',
    admin: 'Adminler'
  };

  const statusLabels = {
    all: 'Tümü',
    active: 'Aktif',
    inactive: 'Pasif',
    suspended: 'Askıya Alınmış',
    banned: 'Yasaklı'
  };

  const statusColors = {
    active: 'bg-green-100 text-green-800',
    inactive: 'bg-gray-100 text-gray-800',
    suspended: 'bg-yellow-100 text-yellow-800',
    banned: 'bg-red-100 text-red-800'
  };

  const userTypeColors = {
    customer: 'bg-blue-100 text-blue-800',
    seller: 'bg-purple-100 text-purple-800',
    admin: 'bg-orange-100 text-orange-800'
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('tr-TR').format(price);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('tr-TR');
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesUserType = userTypeFilter === 'all' || user.userType === userTypeFilter;
    const matchesStatus = statusFilter === 'all' || user.status === statusFilter;
    return matchesSearch && matchesUserType && matchesStatus;
  });

  const handleUserAction = (userId: string, action: string) => {
    console.log(`Performing ${action} on user ${userId}`);
    // Handle user actions here
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Kullanıcı Yönetimi</h1>
          <p className="text-gray-600 mt-2">Platform kullanıcılarını yönetin ve takip edin</p>
        </div>
        <div className="flex items-center space-x-3">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            {filteredUsers.length} kullanıcı
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
              placeholder="Kullanıcı ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>

          {/* User Type Filter */}
          <select
            value={userTypeFilter}
            onChange={(e) => setUserTypeFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {Object.entries(userTypeLabels).map(([value, label]) => (
              <option key={value} value={value}>{label}</option>
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

          {/* Export Button */}
          <button className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Filter className="h-4 w-4 mr-2" />
            <span>Dışa Aktar</span>
          </button>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Kullanıcı</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Tür</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Durum</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Katılım</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Aktivite</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Performans</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                        <Users className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{user.name}</h4>
                        <p className="text-sm text-gray-600">{user.email}</p>
                        <p className="text-sm text-gray-500">{user.phone}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${userTypeColors[user.userType]}`}>
                      {userTypeLabels[user.userType]}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[user.status]}`}>
                      {statusLabels[user.status]}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="text-sm">
                      <div className="text-gray-900">{formatDate(user.joinDate)}</div>
                      <div className="text-gray-600">Son giriş: {formatDate(user.lastLogin)}</div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="text-sm">
                      {user.userType === 'customer' ? (
                        <>
                          <div className="text-gray-900">{user.totalOrders} sipariş</div>
                          <div className="text-gray-600">₺{formatPrice(user.totalSpent)}</div>
                        </>
                      ) : (
                        <>
                          <div className="text-gray-900">{user.totalSales} satış</div>
                          <div className="text-gray-600">₺{formatPrice(user.totalRevenue)}</div>
                        </>
                      )}
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    {user.userType === 'seller' ? (
                      <div className="flex items-center space-x-1">
                        <span className="text-yellow-400">⭐</span>
                        <span className="text-sm font-medium">{user.rating}</span>
                      </div>
                    ) : (
                      <span className="text-sm text-gray-500">-</span>
                    )}
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <button 
                        onClick={() => handleUserAction(user.id, 'view')}
                        className="p-1 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      <button 
                        onClick={() => handleUserAction(user.id, 'message')}
                        className="p-1 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded"
                      >
                        <Mail className="h-4 w-4" />
                      </button>
                      {user.status === 'active' ? (
                        <button 
                          onClick={() => handleUserAction(user.id, 'suspend')}
                          className="p-1 text-gray-600 hover:text-yellow-600 hover:bg-yellow-50 rounded"
                        >
                          <Ban className="h-4 w-4" />
                        </button>
                      ) : (
                        <button 
                          onClick={() => handleUserAction(user.id, 'activate')}
                          className="p-1 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded"
                        >
                          <CheckCircle className="h-4 w-4" />
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

        {filteredUsers.length === 0 && (
          <div className="text-center py-12">
            <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">Aradığınız kriterlere uygun kullanıcı bulunamadı.</p>
          </div>
        )}
      </div>

      {/* Pagination */}
      {filteredUsers.length > 0 && (
        <div className="flex items-center justify-between mt-6">
          <p className="text-gray-600">
            {filteredUsers.length} kullanıcı gösteriliyor
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

export default AdminUsers;