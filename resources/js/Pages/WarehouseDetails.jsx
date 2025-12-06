import AdminLayout from '@/Layouts/admin/AdminLayout';
import { Head, Link } from '@inertiajs/react';
import { MapPinIcon, UserCircleIcon, FunnelIcon } from '@heroicons/react/24/outline';
import StatusBadge from '@/Components/StatusBadge';

export default function WarehouseDetails({ warehouseId = 'WH-001' }) {
    // UI-only mock warehouse data
    const warehouse = {
        id: warehouseId,
        name: 'Main Distribution Center',
        address: '123 Rue de la République',
        location: 'Paris',
        country: 'France',
        manager: 'Jean Dupont',
        totalSKUs: 245,
        totalStock: 12450,
        email: 'jean.dupont@totalenergies.com',
        phone: '+33 1 23 45 67 89',
    };

    // Mock products in warehouse
    const products = [
        {
            id: 1,
            image: '/images/assets/oil.jpg',
            name: 'Gear Oil XS-10',
            sku: 'GXS10',
            category: 'Engine Oils',
            country: 'France',
            quantity: 330,
            status: 'healthy',
            lastUpdated: '2025-12-01',
        },
        {
            id: 2,
            image: '/images/assets/oil.jpg',
            name: 'Hydraulic Oil HT-200',
            sku: 'HHT200',
            category: 'Hydraulic Oils',
            country: 'Germany',
            quantity: 85,
            status: 'medium',
            lastUpdated: '2025-11-28',
        },
        {
            id: 3,
            image: '/images/assets/oil.jpg',
            name: 'Transmission Fluid TF-55',
            sku: 'TTF55',
            category: 'Transmission Fluids',
            country: 'France',
            quantity: 12,
            status: 'low',
            lastUpdated: '2025-11-30',
        },
        {
            id: 4,
            image: '/images/assets/oil.jpg',
            name: 'Industrial Grease IG-40',
            sku: 'IIG40',
            category: 'Greases',
            country: 'Belgium',
            quantity: 145,
            status: 'healthy',
            lastUpdated: '2025-12-02',
        },
        {
            id: 5,
            image: '/images/assets/oil.jpg',
            name: 'Marine Diesel Oil MD-30',
            sku: 'MMD30',
            category: 'Marine Oils',
            country: 'France',
            quantity: 45,
            status: 'medium',
            lastUpdated: '2025-11-25',
        },
        {
            id: 6,
            image: '/images/assets/oil.jpg',
            name: 'Compressor Oil CO-100',
            sku: 'CCO100',
            category: 'Compressor Oils',
            country: 'Spain',
            quantity: 8,
            status: 'low',
            lastUpdated: '2025-11-29',
        },
    ];

    const categories = ['All Categories', 'Engine Oils', 'Hydraulic Oils', 'Transmission Fluids', 'Greases', 'Marine Oils', 'Compressor Oils'];
    const countries = ['All Countries', 'France', 'Germany', 'Belgium', 'Spain'];

    return (
        <AdminLayout>
            <Head title={`${warehouse.name} — Lyra`} />

            <div className="p-6 lg:p-10">
                {/* Breadcrumb */}
                <nav className="text-xs text-gray-400 mb-4">
                    <Link href="/warehouses" className="hover:underline text-blue-600">Warehouses</Link>
                    <span className="mx-2">/</span>
                    <span className="text-gray-700 font-semibold">{warehouse.name}</span>
                </nav>

                {/* Warehouse Header */}
                <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                        <div className="flex-1">
                            <div className="flex items-start justify-between gap-4 mb-4">
                                <div>
                                    <h1 className="text-2xl font-bold text-gray-800">{warehouse.name}</h1>
                                    <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                                        <MapPinIcon className="h-4 w-4" />
                                        <span>{warehouse.address}, {warehouse.location}, {warehouse.country}</span>
                                    </div>
                                </div>
                                <div className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold">
                                    {warehouse.id}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                                <div>
                                    <div className="text-xs text-gray-400 mb-1">Manager</div>
                                    <div className="flex items-center gap-2">
                                        <UserCircleIcon className="h-5 w-5 text-gray-400" />
                                        <div>
                                            <div className="text-sm font-semibold text-gray-700">{warehouse.manager}</div>
                                            <div className="text-xs text-gray-500">{warehouse.email}</div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-xs text-gray-400 mb-1">Phone</div>
                                    <div className="text-sm font-semibold text-gray-700">{warehouse.phone}</div>
                                </div>
                                <div>
                                    <div className="text-xs text-gray-400 mb-1">Status</div>
                                    <div className="inline-block px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                                        Active
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col gap-2 lg:w-64">
                            <button className="w-full px-4 py-2 bg-red-700 text-white text-sm font-semibold rounded-md hover:bg-red-800 transition-colors">
                                Transfer Stock
                            </button>
                            <button className="w-full px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-md hover:bg-blue-700 transition-colors">
                                Add Stock
                            </button>
                            <button className="w-full px-4 py-2 bg-white border text-sm font-semibold rounded-md hover:bg-gray-50 transition-colors">
                                Export Report
                            </button>
                        </div>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white rounded-lg p-4 border shadow-sm">
                        <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">Total SKUs</div>
                        <div className="text-2xl font-bold text-gray-900">{warehouse.totalSKUs}</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border shadow-sm">
                        <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">Total Stock Units</div>
                        <div className="text-2xl font-bold text-gray-900">{warehouse.totalStock.toLocaleString()}</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border shadow-sm">
                        <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">Low Stock Items</div>
                        <div className="text-2xl font-bold text-red-600">
                            {products.filter(p => p.status === 'low').length}
                        </div>
                    </div>
                </div>

                {/* Products Table */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    {/* Filters */}
                    <div className="p-4 bg-gray-50 border-b">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                                <FunnelIcon className="h-5 w-5" />
                                <span>Filters:</span>
                            </div>
                            <div className="flex flex-col md:flex-row gap-3 flex-1">
                                <select className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                    {categories.map((cat) => (
                                        <option key={cat} value={cat}>{cat}</option>
                                    ))}
                                </select>
                                <select className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                    {countries.map((country) => (
                                        <option key={country} value={country}>{country}</option>
                                    ))}
                                </select>
                                <select className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                    <option value="all">All Stock Levels</option>
                                    <option value="low">Low Stock Only</option>
                                    <option value="medium">Medium Stock</option>
                                    <option value="healthy">Healthy Stock</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-sm text-left">
                            <thead className="bg-gray-50 text-xs text-gray-500 uppercase tracking-wider">
                                <tr>
                                    <th className="px-4 py-3">Image</th>
                                    <th className="px-4 py-3">Product Name</th>
                                    <th className="px-4 py-3">SKU</th>
                                    <th className="px-4 py-3">Category</th>
                                    <th className="px-4 py-3">Country of Origin</th>
                                    <th className="px-4 py-3">Quantity</th>
                                    <th className="px-4 py-3">Stock Level</th>
                                    <th className="px-4 py-3">Last Updated</th>
                                    <th className="px-4 py-3">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {products.map((product) => (
                                    <tr key={product.id} className="hover:bg-gray-50">
                                        <td className="px-4 py-4">
                                            <img src={product.image} alt={product.name} className="w-12 h-12 rounded-md object-cover" />
                                        </td>
                                        <td className="px-4 py-4 font-medium text-gray-800">{product.name}</td>
                                        <td className="px-4 py-4 text-gray-600">{product.sku}</td>
                                        <td className="px-4 py-4 text-gray-600">{product.category}</td>
                                        <td className="px-4 py-4 text-gray-600">{product.country}</td>
                                        <td className="px-4 py-4">
                                            <div className="text-sm font-semibold text-gray-800">{product.quantity} units</div>
                                        </td>
                                        <td className="px-4 py-4">
                                            <StatusBadge status={product.status} />
                                        </td>
                                        <td className="px-4 py-4 text-gray-600">{product.lastUpdated}</td>
                                        <td className="px-4 py-4">
                                            <Link
                                                href={`/inventory/product/${product.sku}`}
                                                className="text-xs bg-white border px-3 py-1 rounded-md hover:bg-gray-50"
                                            >
                                                View Product
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
