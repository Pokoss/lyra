import AdminLayout from '@/Layouts/admin/AdminLayout';
import { Head } from '@inertiajs/react';
import { ArrowDownTrayIcon, ChartBarIcon } from '@heroicons/react/24/outline';

export default function Reports() {
    // UI-only mock data
    const stats = {
        totalSales: '$2,456,780',
        totalSKUs: 245,
        slowMoving: 18,
        fastMoving: 42,
    };

    const topProducts = [
        { name: 'Gear Oil XS-10', sales: 15420 },
        { name: 'Hydraulic Oil HT-200', sales: 12350 },
        { name: 'Marine Diesel Oil MD-30', sales: 9870 },
        { name: 'Industrial Grease IG-40', sales: 8540 },
        { name: 'Transmission Fluid TF-55', sales: 7230 },
    ];

    return (
        <AdminLayout>
            <Head title="Reports & Analytics — Lyra" />

            <div className="p-6 lg:p-10">
                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">Reports & Analytics</h1>
                    <p className="text-sm text-gray-500 mt-1">Comprehensive inventory and sales insights</p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-6 text-white shadow-lg">
                        <div className="text-sm opacity-90 mb-2">Total Sales</div>
                        <div className="text-3xl font-bold">{stats.totalSales}</div>
                        <div className="text-xs opacity-75 mt-2">Year to date</div>
                    </div>
                    <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-6 text-white shadow-lg">
                        <div className="text-sm opacity-90 mb-2">Total SKUs</div>
                        <div className="text-3xl font-bold">{stats.totalSKUs}</div>
                        <div className="text-xs opacity-75 mt-2">Active products</div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-6 text-white shadow-lg">
                        <div className="text-sm opacity-90 mb-2">Fast-moving</div>
                        <div className="text-3xl font-bold">{stats.fastMoving}</div>
                        <div className="text-xs opacity-75 mt-2">High demand</div>
                    </div>
                    <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg p-6 text-white shadow-lg">
                        <div className="text-sm opacity-90 mb-2">Slow-moving</div>
                        <div className="text-3xl font-bold">{stats.slowMoving}</div>
                        <div className="text-xs opacity-75 mt-2">Needs attention</div>
                    </div>
                    
                </div>

                {/* Main Charts Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    {/* Sales vs Stock Chart */}
                    <div className="bg-white rounded-lg shadow-sm p-6 border">
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <h3 className="text-base font-semibold text-gray-800">Sales vs Stock</h3>
                                <p className="text-xs text-gray-500 mt-1">Last 12 months</p>
                            </div>
                            <button className="flex items-center gap-2 px-3 py-1.5 text-xs bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                                <ArrowDownTrayIcon className="h-4 w-4" />
                                Export
                            </button>
                        </div>
                        <div className="h-72 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg border border-blue-200">
                            <div className="text-center">
                                <ChartBarIcon className="h-12 w-12 text-blue-500 mx-auto mb-2" />
                                <div className="text-blue-600 text-sm font-medium">Sales vs Stock Chart</div>
                                <div className="text-xs text-gray-500 mt-1">Comparative analysis visualization</div>
                            </div>
                        </div>
                    </div>

                    {/* Inventory Aging Chart */}
                    <div className="bg-white rounded-lg shadow-sm p-6 border">
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <h3 className="text-base font-semibold text-gray-800">Inventory Aging</h3>
                                <p className="text-xs text-gray-500 mt-1">Current stock age distribution</p>
                            </div>
                            <button className="flex items-center gap-2 px-3 py-1.5 text-xs bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                                <ArrowDownTrayIcon className="h-4 w-4" />
                                Export
                            </button>
                        </div>
                        <div className="h-72 flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg border border-green-200">
                            <div className="text-center">
                                <ChartBarIcon className="h-12 w-12 text-green-500 mx-auto mb-2" />
                                <div className="text-green-600 text-sm font-medium">Inventory Aging Chart</div>
                                <div className="text-xs text-gray-500 mt-1">Age distribution by days</div>
                            </div>
                        </div>
                    </div>

                    {/* Price Fluctuation Timeline */}
                    <div className="bg-white rounded-lg shadow-sm p-6 border">
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <h3 className="text-base font-semibold text-gray-800">Price Fluctuation Timeline</h3>
                                <p className="text-xs text-gray-500 mt-1">Historical pricing trends</p>
                            </div>
                            <button className="flex items-center gap-2 px-3 py-1.5 text-xs bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors">
                                <ArrowDownTrayIcon className="h-4 w-4" />
                                Export
                            </button>
                        </div>
                        <div className="h-72 flex items-center justify-center bg-gradient-to-br from-orange-50 to-amber-100 rounded-lg border border-orange-200">
                            <div className="text-center">
                                <ChartBarIcon className="h-12 w-12 text-orange-500 mx-auto mb-2" />
                                <div className="text-orange-600 text-sm font-medium">Price Fluctuation Timeline</div>
                                <div className="text-xs text-gray-500 mt-1">Price changes over time</div>
                            </div>
                        </div>
                    </div>

                    {/* Top-selling Products */}
                    <div className="bg-white rounded-lg shadow-sm p-6 border">
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <h3 className="text-base font-semibold text-gray-800">Top-selling Products</h3>
                                <p className="text-xs text-gray-500 mt-1">Current quarter performance</p>
                            </div>
                            <button className="flex items-center gap-2 px-3 py-1.5 text-xs bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
                                <ArrowDownTrayIcon className="h-4 w-4" />
                                Export
                            </button>
                        </div>
                        <div className="space-y-3">
                            {topProducts.map((product, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center text-sm font-bold">
                                        {index + 1}
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-sm font-medium text-gray-800">{product.name}</div>
                                        <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                                            <div
                                                className="bg-purple-600 h-2 rounded-full"
                                                style={{ width: `${(product.sales / topProducts[0].sales) * 100}%` }}
                                            />
                                        </div>
                                    </div>
                                    <div className="text-sm font-semibold text-gray-800">{product.sales.toLocaleString()}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Additional Reports Section */}
                <div className="bg-white rounded-lg shadow-sm p-6 border">
                    <h3 className="text-base font-semibold text-gray-800 mb-4">Available Reports</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <button className="flex items-center justify-between p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all">
                            <div className="text-left">
                                <div className="text-sm font-semibold text-gray-800">Warehouse Performance</div>
                                <div className="text-xs text-gray-500 mt-1">Detailed warehouse analytics</div>
                            </div>
                            <ArrowDownTrayIcon className="h-5 w-5 text-gray-400" />
                        </button>
                        <button className="flex items-center justify-between p-4 border-2 border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition-all">
                            <div className="text-left">
                                <div className="text-sm font-semibold text-gray-800">Stock Movement Report</div>
                                <div className="text-xs text-gray-500 mt-1">In/Out stock transactions</div>
                            </div>
                            <ArrowDownTrayIcon className="h-5 w-5 text-gray-400" />
                        </button>
                        <button className="flex items-center justify-between p-4 border-2 border-gray-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-all">
                            <div className="text-left">
                                <div className="text-sm font-semibold text-gray-800">Order Fulfillment</div>
                                <div className="text-xs text-gray-500 mt-1">Delivery performance metrics</div>
                            </div>
                            <ArrowDownTrayIcon className="h-5 w-5 text-gray-400" />
                        </button>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
