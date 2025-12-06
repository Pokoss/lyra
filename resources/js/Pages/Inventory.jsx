import AdminLayout from '@/Layouts/admin/AdminLayout';
import { Head, Link } from '@inertiajs/react';
import InventoryChart from '@/Components/InventoryChart';

export default function Inventory() {
    const topStats = [
        { id: 1, title: 'Total SKUs', value: '1,286', color: 'border-red-700' },
        { id: 2, title: 'Low Stock Items', value: '42', color: 'border-blue-600' },
        { id: 3, title: 'Pending Orders', value: '18', color: 'border-red-700' },
        { id: 4, title: 'On-time Delivery', value: '97%', color: 'border-blue-600' },
    ];

    const items = [
        { id: 'GXS10', name: 'Gear Oil XS-10', qty: 3, image: '/images/assets/oil.jpg' },
        { id: 'HH12', name: 'Hydraulic Oil H12', qty: 8, image: '/images/assets/oil.jpg' },
        { id: 'E300', name: 'Engine Oil E300', qty: 12, image: '/images/assets/oil.jpg' },
        { id: 'L500', name: 'Lubricant L500', qty: 34, image: '/images/assets/oil.jpg' },
    ];

    return (
        <AdminLayout>
            <Head title="Inventory — Lyra" />

            <div className="p-6 lg:p-10">
                <div className="flex items-center justify-between mb-6 gap-4 flex-col sm:flex-row">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Inventory</h1>
                        <p className="text-sm text-gray-500">Lubricant inventory management — UI-only preview</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <Link href="/inventory/overview" className="px-3 py-2 rounded-md bg-red-700 text-white text-sm font-semibold hover:bg-red-800">New Order</Link>
                        <Link href="/inventory/overview" className="px-3 py-2 rounded-md bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700">Export</Link>
                        <Link href="/inventory/overview" className="px-3 py-2 rounded-md bg-white border text-sm font-semibold hover:bg-gray-50">Open Overview</Link>
                    </div>
                </div>

                {/* top stat cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    {topStats.map((s) => (
                        <div key={s.id} className={`bg-white p-4 rounded-lg shadow-sm border-t-4 ${s.color}`}>
                            <div className="text-sm text-gray-500">{s.title}</div>
                            <div className="mt-2 text-2xl font-bold text-gray-800">{s.value}</div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-4">
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <h3 className="text-sm font-semibold text-gray-700">Inventory Trends</h3>
                                <div className="text-xs text-gray-400">Last 30 days</div>
                            </div>
                            <div className="text-xs text-gray-400">Updated just now</div>
                        </div>

                        <div className="h-64 sm:h-80">
                            <InventoryChart />
                        </div>

                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="p-3 rounded border bg-gray-50">
                                <h4 className="text-xs text-gray-500">Top categories</h4>
                                <div className="mt-2 text-sm text-gray-800 font-semibold">Engine oils, Hydraulic oils</div>
                            </div>
                            <div className="p-3 rounded border bg-gray-50">
                                <h4 className="text-xs text-gray-500">Last replenishment</h4>
                                <div className="mt-2 text-sm text-gray-800 font-semibold">2025-11-30</div>
                            </div>
                        </div>
                    </div>

                    <aside className="bg-white rounded-lg shadow-sm p-4 h-full flex flex-col">
                        <div className="flex items-center justify-between mb-3">
                            <h3 className="text-sm font-semibold text-gray-700">Low stock lubricants</h3>
                            <span className="text-xs text-gray-400">Critical</span>
                        </div>

                        <ul className="space-y-3 overflow-auto">
                            {items.map((it) => (
                                <li key={it.id} className="flex items-center justify-between p-3 border rounded">
                                    <div className="flex items-center gap-3">
                                        <img src={it.image} alt={it.name} className="w-12 h-12 rounded-md object-cover" />
                                        <div>
                                            <div className="text-sm font-medium">{it.name}</div>
                                            <div className="text-xs text-gray-400">SKU: {it.id}</div>
                                        </div>
                                    </div>

                                    <div className="text-sm font-semibold text-right">
                                        <div className={it.qty <= 5 ? 'text-red-600' : it.qty <= 12 ? 'text-yellow-500' : 'text-gray-700'}>{it.qty} left</div>
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
