import AdminLayout from '@/Layouts/admin/AdminLayout';
import { Head, Link } from '@inertiajs/react';
import InventoryChart from '@/Components/InventoryChart';

export default function DashboardHomeScreen() {
    // static/mock data for UI only
    const lowStock = [
        { id: 1, name: 'Gear Oil XS-10', sku: 'GXS10', qty: 3, severity: 'critical', image: '/images/assets/oil.jpg' },
        { id: 2, name: 'Hydraulic Oil H12', sku: 'HH12', qty: 8, severity: 'low', image: '/images/assets/oil.jpg' },
        { id: 3, name: 'Engine Oil E300', sku: 'E300', qty: 12, severity: 'warning', image: '/images/assets/oil.jpg' },
    ];

    return (
        <AdminLayout>
            <Head title="Dashboard — Lyra" />

            <div className="p-6 lg:p-10">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
                        <p className="text-sm text-gray-500">Inventory & replenishment overview — Total Lubricants</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <Link href="/inventory/overview" className="px-3 py-2 rounded-md bg-red-700 text-white text-sm font-semibold hover:bg-red-800">New Order</Link>
                        <Link href="/inventory/overview" className="px-3 py-2 rounded-md bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700">Export</Link>
                        <Link href="/inventory/overview" className="px-3 py-2 rounded-md bg-white border text-sm font-semibold hover:bg-gray-50">Open Inventory Overview</Link>
                    </div>
                </div>

                {/* KPI row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <div className="bg-white p-4 rounded-lg shadow-sm border-t-4 border-red-700">
                        <div className="text-sm text-gray-500">Total SKUs</div>
                        <div className="mt-2 text-2xl font-bold text-gray-800">1,286</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border-t-4 border-blue-600">
                        <div className="text-sm text-gray-500">Low stock items</div>
                        <div className="mt-2 text-2xl font-bold text-gray-800">42</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border-t-4 border-red-700">
                        <div className="text-sm text-gray-500">Pending orders</div>
                        <div className="mt-2 text-2xl font-bold text-gray-800">18</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border-t-4 border-blue-600">
                        <div className="text-sm text-gray-500">On-time delivery</div>
                        <div className="mt-2 text-2xl font-bold text-gray-800">97%</div>
                    </div>
                </div>

                {/* Main content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-4">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-sm font-semibold text-gray-700">Inventory trends</h3>
                            <span className="text-xs text-gray-400">Last 30 days</span>
                        </div>

                        <div className="h-64 sm:h-80">
                            <InventoryChart />
                        </div>
                    </div>

                    <aside className="bg-white rounded-lg shadow-sm p-4 h-full flex flex-col">
                        <div className="flex items-center justify-between mb-3">
                            <h3 className="text-sm font-semibold text-gray-700">Low stock lubricants</h3>
                            <span className="text-xs text-gray-400">Most critical</span>
                        </div>

                        <ul className="space-y-3 overflow-auto">
                            {lowStock.map((item) => (
                                <li key={item.id} className="flex items-center justify-between p-3 border rounded">
                                    <div className="flex items-center gap-3">
                                        <img src={item.image} alt={item.name} className="w-12 h-12 rounded-md object-cover" />
                                        <div>
                                            <div className="text-sm font-medium">{item.name}</div>
                                            <div className="text-xs text-gray-400">SKU: {item.sku}</div>
                                        </div>
                                    </div>

                                    <div className="text-sm font-semibold text-right">
                                        <div className={item.qty <= 5 ? 'text-red-600' : item.qty <= 12 ? 'text-yellow-500' : 'text-gray-700'}>{item.qty} left</div>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-auto pt-3 border-t flex items-center justify-between">
                            <a className="text-xs text-gray-500 hover:underline cursor-pointer">View full inventory</a>
                            <button className="px-3 py-1 text-xs bg-red-700 text-white rounded-md hover:bg-red-800">Replenish</button>
                        </div>
                    </aside>
                </div>
            </div>
        </AdminLayout>
    );
}
