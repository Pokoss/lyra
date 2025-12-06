import React from 'react';
import AdminLayout from '@/Layouts/admin/AdminLayout';
import { Head, Link } from '@inertiajs/react';
import SalesChart from '@/Components/SalesChart';
import AgingChart from '@/Components/AgingChart';

export default function ProductDetails() {
    // UI-only sample data
    const product = {
        name: 'Gear Oil XS-10',
        sku: 'GXS10',
        origin: 'France',
        category: 'Engine Oils',
        price: '34.50 USD / L',
        image: '/images/assets/oil.jpg',
    };

    const warehouses = [
        { id: 'WH-A', name: 'Main Warehouse', qty: 330, days: 120 },
        { id: 'WH-B', name: 'Depot 2', qty: 28, days: 5 },
        { id: 'WH-C', name: 'Regional', qty: 12, days: 3 },
    ];

    const inTransit = [
        { id: 'T-221', eta: '2025-12-02', qty: 80, status: 'On route' },
        { id: 'T-218', eta: '2025-11-28', qty: 40, status: 'Arriving' },
    ];

    const pastOrders = [
        { id: '#O-9931', date: '2025-11-15', qty: 100, status: 'Delivered' },
        { id: '#O-9721', date: '2025-10-10', qty: 200, status: 'Delivered' },
    ];

    return (
        <AdminLayout>
            <Head title={`${product.name} — Lyra`} />

            <div className="p-6 lg:p-10">
                <nav className="text-xs text-gray-400 mb-4">
                    <Link href="/inventory" className="hover:underline text-blue-600">Inventory</Link>
                    <span className="mx-2">/</span>
                    <span className="text-gray-700 font-semibold">{product.name}</span>
                </nav>

                {/* Product header card */}
                <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                            <img src={product.image} alt={product.name} className="w-28 h-28 object-cover rounded-lg border" />

                            <div className="flex-1">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <h1 className="text-xl font-bold text-gray-800">{product.name}</h1>
                                        <div className="text-xs text-gray-400">SKU: {product.sku}</div>
                                    </div>

                                    <div className="text-right">
                                        <div className="text-sm text-gray-500">Contract price</div>
                                        <div className="text-lg font-bold text-gray-800">{product.price}</div>
                                    </div>
                                </div>

                                <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-gray-600">
                                    <div>
                                        <div className="text-xs text-gray-400">Country of origin</div>
                                        <div className="font-semibold">{product.origin}</div>
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-400">Category</div>
                                        <div className="font-semibold">{product.category}</div>
                                    </div>
                                    <div className="text-right sm:text-left">
                                        <div className="text-xs text-gray-400">Availability</div>
                                        <div className="font-semibold text-green-700">In stock</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="mt-4 flex gap-2 items-center">
                            <button className="px-3 py-2 rounded-md bg-white border text-sm font-semibold hover:bg-gray-50">Export Report</button>
                        </div>

                </div>

                {/* Quick summary - horizontal KPI cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-white rounded-lg p-4 border shadow-sm">
                        <div className="text-xs text-gray-400 mb-1">Total Available</div>
                        <div className="text-2xl font-bold text-gray-900">370 units</div>
                        <div className="mt-2 inline-block px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">Healthy</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border shadow-sm">
                        <div className="text-xs text-gray-400 mb-1">Avg Days of Stock</div>
                        <div className="text-2xl font-bold text-gray-900">45</div>
                        <div className="text-xs text-gray-500 mt-2">Across all warehouses</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border shadow-sm">
                        <div className="text-xs text-gray-400 mb-1">Reorder Point</div>
                        <div className="text-2xl font-bold text-gray-900">90 units</div>
                        <div className="text-xs text-gray-500 mt-2">Threshold</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border shadow-sm flex flex-col justify-center gap-2">
                        <button className="w-full px-3 py-2 rounded-md bg-red-700 text-white text-sm font-semibold hover:bg-red-800">Create Order</button>
                        <button className="w-full px-3 py-2 rounded-md bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700">Transfer</button>
                    </div>
                </div>

                {/* Stock Summary */}
                <div className="bg-white rounded-lg p-6 border shadow-sm mb-6">
                    <h3 className="text-base font-semibold text-gray-700 mb-4">Stock Summary (by warehouse)</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {warehouses.map((w) => (
                            <div key={w.id} className="p-4 rounded-lg border bg-gray-50">
                                <div className="text-xs text-gray-400 uppercase tracking-wide">{w.name}</div>
                                <div className="mt-2 text-xl font-bold text-gray-800">{w.qty} units</div>
                                <div className="text-sm text-gray-600 mt-1">{w.days} days of stock</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Analytics Charts - Full Width */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    {/* Sales Analytics */}
                    <div className="bg-white rounded-lg p-6 border shadow-sm">
                        <h3 className="text-base font-semibold text-gray-700 mb-4">Sales Analytics</h3>
                        <SalesChart heightClass="h-96" />
                    </div>

                    {/* Inventory Aging */}
                    <div className="bg-white rounded-lg p-6 border shadow-sm">
                        <h4 className="text-base font-semibold text-gray-700 mb-4">Inventory Aging</h4>
                        <AgingChart heightClass="h-96" />
                    </div>
                </div>

                {/* In-Transit & Orders */}
                <div className="bg-white rounded-lg p-6 border shadow-sm">
                    

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                            <h5 className="text-sm font-semibold text-gray-700 mb-3">In-Transit Shipments</h5>
                            <div className="space-y-3">
                                {inTransit.map((t) => (
                                    <div key={t.id} className="flex items-center justify-between p-3 border rounded bg-blue-50">
                                        <div>
                                            <div className="text-sm font-medium">Shipment {t.id}</div>
                                            <div className="text-xs text-gray-500">ETA: {t.eta}</div>
                                        </div>
                                        <div className="text-sm font-semibold text-blue-700">{t.qty} units</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h5 className="text-sm font-semibold text-gray-700 mb-3">Past Order History</h5>
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="text-left text-xs text-gray-400 uppercase">
                                        <th className="py-2">Order</th>
                                        <th>Date</th>
                                        <th>Qty</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {pastOrders.map((o) => (
                                        <tr key={o.id} className="border-t text-sm text-gray-700">
                                            <td className="py-2 font-medium">{o.id}</td>
                                            <td>{o.date}</td>
                                            <td>{o.qty}</td>
                                            <td><span className="inline-block px-2 py-1 rounded-full text-xs bg-green-100 text-green-700">{o.status}</span></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
