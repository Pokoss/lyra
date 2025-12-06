import AdminLayout from '@/Layouts/admin/AdminLayout';
import { Head,Link } from '@inertiajs/react';
import StatusBadge from '@/Components/StatusBadge';
import Pagination from '@/Components/Pagination';

export default function InventoryOverview() {
    const rows = [
        { id: 1, name: 'Gear Oil XS-10', sku: '10', image: '/images/assets/oil.jpg', category: 'Engine Oil', country: 'France', stock: 330, status: 'healthy', updated: '2025-11-28' },
        { id: 2, name: 'Hydraulic Oil H12', sku: '20', image: '/images/assets/oil.jpg', category: 'Hydraulic', country: 'Germany', stock: 8, status: 'low', updated: '2025-11-25' },
        { id: 3, name: 'Engine Oil E300', sku: '330', image: '/images/assets/oil.jpg', category: 'Engine Oil', country: 'UK', stock: 12, status: 'medium', updated: '2025-11-20' },
        { id: 4, name: 'Lubricant L500', sku: '400', image: '/images/assets/oil.jpg', category: 'Gear Oil', country: 'USA', stock: 34, status: 'healthy', updated: '2025-11-28' },
    ];

    return (
        <AdminLayout>
            <Head title="Lubricant Inventory Overview" />

            <div className="p-6 lg:p-10">
                <div className="flex items-center justify-between mb-6 gap-4 flex-col sm:flex-row">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Lubricant Inventory Overview</h1>
                        <p className="text-sm text-gray-500">Browse and manage lubricant products</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="px-3 py-2 rounded-md bg-red-700 text-white text-sm font-semibold hover:bg-red-800">Add Product</button>
                        <button className="px-3 py-2 rounded-md bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700">Export</button>
                    </div>
                </div>

                {/* Filters */}
                <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-3 items-center">
                        <div className="md:col-span-2">
                            <input
                                type="search"
                                placeholder="Search product name or SKU"
                                className="w-full rounded-lg border py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-300"
                            />
                        </div>

                        <select className="rounded-lg border py-2 px-3 text-sm">
                            <option>All Warehouses</option>
                            <option>Main Warehouse</option>
                            <option>Depot 2</option>
                        </select>

                        <select className="rounded-lg border py-2 px-3 text-sm">
                            <option>All Countries</option>
                            <option>France</option>
                            <option>Germany</option>
                        </select>

                        <select className="rounded-lg border py-2 px-3 text-sm md:col-span-1">
                            <option>All Categories</option>
                            <option>Engine Oil</option>
                            <option>Hydraulic</option>
                        </select>
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-sm text-left">
                            <thead className="bg-gray-50 text-xs text-gray-500 uppercase tracking-wider">
                                <tr>
                                    <th className="px-4 py-3">Image</th>
                                    <th className="px-4 py-3">Product Name</th>
                                    <th className="px-4 py-3">Monthly cover</th>
                                    <th className="px-4 py-3">Category</th>
                                    <th className="px-4 py-3">Country of Origin</th>
                                    <th className="px-4 py-3">Stock Level</th>
                                    <th className="px-4 py-3">Reorder Status</th>
                                    <th className="px-4 py-3">Last Updated</th>
                                    <th className="px-4 py-3">View</th>
                                </tr>
                            </thead>

                            <tbody className="divide-y">
                                {rows.map((r) => (
                                    <tr key={r.id} className="hover:bg-gray-50">
                                        <td className="px-4 py-4">
                                            <img src={r.image} alt={r.name} className="w-12 h-12 rounded-md object-cover" />
                                        </td>
                                        <td className="px-4 py-4 font-medium text-gray-800">{r.name}</td>
                                        <td className="px-4 py-4 text-gray-600">{r.sku}</td>
                                        <td className="px-4 py-4 text-gray-600">{r.category}</td>
                                        <td className="px-4 py-4 text-gray-600">{r.country}</td>
                                        <td className="px-4 py-4">
                                            <div className="text-sm font-semibold text-gray-800">{r.stock}</div>
                                            <div className="mt-1 w-36 bg-gray-100 h-2 rounded-full overflow-hidden">
                                                <div className={`h-2 rounded-full ${r.stock < 10 ? 'bg-red-600' : r.stock < 50 ? 'bg-yellow-500' : 'bg-green-600'}`} style={{ width: `${Math.min(100, r.stock)}%` }}></div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-4">
                                            <StatusBadge status={r.status === 'healthy' ? 'healthy' : r.status === 'medium' ? 'medium' : 'low'} />
                                        </td>
                                        <td className="px-4 py-4 text-gray-600">{r.updated}</td>
                                        <td className="px-4 py-4">
                                                <Link className="text-xs bg-white border px-3 py-1 rounded-md hover:bg-gray-50" href={`/inventory/product/${r.sku}`}>View</Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="p-4">
                        <Pagination current={1} total={8} />
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
