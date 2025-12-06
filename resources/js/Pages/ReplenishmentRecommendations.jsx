import AdminLayout from '@/Layouts/admin/AdminLayout';
import { Head, Link } from '@inertiajs/react';
import { FunnelIcon, ExclamationTriangleIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import StatusBadge from '@/Components/StatusBadge';

export default function ReplenishmentRecommendations() {
    // UI-only mock recommendations data
    const recommendations = [
        {
            id: 1,
            product: 'Transmission Fluid TF-55',
            sku: 'TTF55',
            currentStock: 12,
            requiredStock: 150,
            daysRemaining: 3,
            suggestedOrder: 138,
            warehouse: 'Tanzania',
            warehouseId: 'WH-001',
            category: 'Transmission Fluids',
            country: 'France',
            priority: 'critical',
        },
        {
            id: 2,
            product: 'Compressor Oil CO-100',
            sku: 'CCO100',
            currentStock: 8,
            requiredStock: 120,
            daysRemaining: 2,
            suggestedOrder: 112,
            warehouse: 'Kenya',
            warehouseId: 'WH-006',
            category: 'Compressor Oils',
            country: 'Italy',
            priority: 'critical',
        },
        {
            id: 3,
            product: 'Hydraulic Oil HT-200',
            sku: 'HHT200',
            currentStock: 28,
            requiredStock: 200,
            daysRemaining: 5,
            suggestedOrder: 172,
            warehouse: 'Paris',
            warehouseId: 'WH-002',
            category: 'Hydraulic Oils',
            country: 'France',
            priority: 'critical',
        },
        {
            id: 4,
            product: 'Marine Diesel Oil MD-30',
            sku: 'MMD30',
            currentStock: 45,
            requiredStock: 180,
            daysRemaining: 8,
            suggestedOrder: 135,
            warehouse: 'Egypt',
            warehouseId: 'WH-005',
            category: 'Marine Oils',
            country: 'Spain',
            priority: 'high',
        },
        {
            id: 5,
            product: 'Industrial Grease IG-40',
            sku: 'IIG40',
            currentStock: 85,
            requiredStock: 250,
            daysRemaining: 15,
            suggestedOrder: 165,
            warehouse: 'Paris',
            warehouseId: 'WH-003',
            category: 'Greases',
            country: 'Belgium',
            priority: 'medium',
        },
        {
            id: 6,
            product: 'Gear Oil XS-10',
            sku: 'GXS10',
            currentStock: 120,
            requiredStock: 300,
            daysRemaining: 18,
            suggestedOrder: 180,
            warehouse: 'Dubai',
            warehouseId: 'WH-004',
            category: 'Engine Oils',
            country: 'Germany',
            priority: 'medium',
        },
        {
            id: 7,
            product: 'Brake Fluid BF-DOT4',
            sku: 'BDF4',
            currentStock: 65,
            requiredStock: 140,
            daysRemaining: 12,
            suggestedOrder: 75,
            warehouse: 'Tanzania',
            warehouseId: 'WH-001',
            category: 'Brake Fluids',
            country: 'France',
            priority: 'medium',
        },
        {
            id: 8,
            product: 'Coolant Antifreeze CA-50',
            sku: 'CAF50',
            currentStock: 95,
            requiredStock: 220,
            daysRemaining: 16,
            suggestedOrder: 125,
            warehouse: 'Kenya',
            warehouseId: 'WH-002',
            category: 'Coolants',
            country: 'France',
            priority: 'medium',
        },
    ];

    const criticalItems = recommendations.filter(r => r.priority === 'critical');
    
    const warehouses = ['All Warehouses', 'Main Distribution Center', 'Regional Depot North', 'Belgium Hub', 'Germany Distribution', 'Spain Logistics Center', 'Italy Storage Facility'];
    const categories = ['All Categories', 'Engine Oils', 'Hydraulic Oils', 'Transmission Fluids', 'Greases', 'Marine Oils', 'Compressor Oils', 'Brake Fluids', 'Coolants'];
    const countries = ['All Countries', 'France', 'Belgium', 'Germany', 'Spain', 'Italy'];

    // Priority badge component
    const PriorityBadge = ({ priority }) => {
        const styles = {
            critical: 'bg-red-100 text-red-700 border-red-300',
            high: 'bg-orange-100 text-orange-700 border-orange-300',
            medium: 'bg-yellow-100 text-yellow-700 border-yellow-300',
        };

        return (
            <span className={`inline-block px-2 py-1 rounded text-xs font-semibold border ${styles[priority]}`}>
                {priority.charAt(0).toUpperCase() + priority.slice(1)}
            </span>
        );
    };

    return (
        <AdminLayout>
            <Head title="Replenishment Recommendations — Lyra" />

            <div className="p-6 lg:p-10">
                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">Replenishment Recommendations</h1>
                    <p className="text-sm text-gray-500 mt-1">Stock replenishment suggestions based on usage patterns</p>
                </div>

                {/* Critical Items Alert */}
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                    <div className="flex items-start gap-3">
                        <ExclamationTriangleIcon className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
                        <div className="flex-1">
                            <h3 className="text-sm font-semibold text-red-800">Critical Stock Alert</h3>
                            <p className="text-sm text-red-700 mt-1">
                                {criticalItems.length} products require immediate replenishment (less than 5 days remaining)
                            </p>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {criticalItems.map((item) => (
                                    <Link
                                        key={item.id}
                                        href={`/inventory/product/${item.sku}`}
                                        className="text-xs font-medium text-red-700 hover:text-red-900 underline"
                                    >
                                        {item.product} ({item.daysRemaining}d)
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-white rounded-lg p-4 border shadow-sm">
                        <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">Total Recommendations</div>
                        <div className="text-2xl font-bold text-gray-900">{recommendations.length}</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border shadow-sm">
                        <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">Critical Items</div>
                        <div className="text-2xl font-bold text-red-600">{criticalItems.length}</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border shadow-sm">
                        <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">Suggested Order packs</div>
                        <div className="text-2xl font-bold text-gray-900">
                            {recommendations.reduce((sum, r) => sum + r.suggestedOrder, 0).toLocaleString()}
                        </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border shadow-sm">
                        <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">Avg Days Remaining</div>
                        <div className="text-2xl font-bold text-gray-900">
                            {Math.round(recommendations.reduce((sum, r) => sum + r.daysRemaining, 0) / recommendations.length)}
                        </div>
                    </div>
                </div>

                {/* Charts Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    {/* Forecast Chart Placeholder */}
                    <div className="bg-white rounded-lg shadow-sm p-6 border">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-base font-semibold text-gray-800">Demand Forecast (Next 60 Days)</h3>
                            <ChartBarIcon className="h-5 w-5 text-blue-600" />
                        </div>
                        <div className="h-64 flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                            <div className="text-center">
                                <div className="text-blue-600 text-sm font-medium">Forecast Chart Placeholder</div>
                                <div className="text-xs text-gray-500 mt-1">Stock demand projection visualization</div>
                            </div>
                        </div>
                    </div>

                    {/* Seasonal Trends Placeholder */}
                    <div className="bg-white rounded-lg shadow-sm p-6 border">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-base font-semibold text-gray-800">Seasonal Trends</h3>
                            <ChartBarIcon className="h-5 w-5 text-green-600" />
                        </div>
                        <div className="h-64 flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
                            <div className="text-center">
                                <div className="text-green-600 text-sm font-medium">Seasonal Trends Chart Placeholder</div>
                                <div className="text-xs text-gray-500 mt-1">Historical seasonal usage patterns</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Filters */}
                <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                            <FunnelIcon className="h-5 w-5" />
                            <span>Filters:</span>
                        </div>
                        <div className="flex flex-col md:flex-row gap-3 flex-1">
                            <select className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                {warehouses.map((w) => (
                                    <option key={w} value={w}>{w}</option>
                                ))}
                            </select>
                            <select className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                {categories.map((c) => (
                                    <option key={c} value={c}>{c}</option>
                                ))}
                            </select>
                            <select className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                {countries.map((country) => (
                                    <option key={country} value={country}>{country}</option>
                                ))}
                            </select>
                            <select className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                <option value="all">All Priorities</option>
                                <option value="critical">Critical Only</option>
                                <option value="high">High Priority</option>
                                <option value="medium">Medium Priority</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Recommendations Table */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-sm text-left">
                            <thead className="bg-gray-50 text-xs text-gray-500 uppercase tracking-wider">
                                <tr>
                                    <th className="px-4 py-3">Priority</th>
                                    <th className="px-4 py-3">Product</th>
                                    <th className="px-4 py-3">Country of origin</th>
                                    <th className="px-4 py-3">Current Stock</th>
                                    <th className="px-4 py-3">Required (60d)</th>
                                    <th className="px-4 py-3">Days Remaining</th>
                                    <th className="px-4 py-3">Suggested Order</th>
                                    <th className="px-4 py-3">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {recommendations.map((rec) => (
                                    <tr key={rec.id} className={`hover:bg-gray-50 ${rec.priority === 'critical' ? 'bg-red-50' : ''}`}>
                                        <td className="px-4 py-4">
                                            <PriorityBadge priority={rec.priority} />
                                        </td>
                                        <td className="px-4 py-4">
                                            <div className="font-semibold text-gray-800">{rec.product}</div>
                                            <div className="text-xs text-gray-400">SKU: {rec.sku}</div>
                                        </td>
                                        <td className="px-4 py-4 text-gray-600">{rec.warehouse}</td>
                                        <td className="px-4 py-4">
                                            <div className={`font-semibold ${rec.daysRemaining <= 5 ? 'text-red-600' : 'text-gray-800'}`}>
                                                {rec.currentStock} packs
                                            </div>
                                        </td>
                                        <td className="px-4 py-4 text-gray-600">{rec.requiredStock} packs</td>
                                        <td className="px-4 py-4">
                                            <div className={`font-semibold ${rec.daysRemaining <= 5 ? 'text-red-600' : rec.daysRemaining <= 10 ? 'text-orange-600' : 'text-gray-800'}`}>
                                                {rec.daysRemaining} days
                                            </div>
                                        </td>
                                        <td className="px-4 py-4">
                                            <div className="font-semibold text-blue-600">{rec.suggestedOrder} packs</div>
                                        </td>
                                        <td className="px-4 py-4">
                                            <button className="text-xs bg-red-700 text-white px-3 py-1.5 rounded-md hover:bg-red-800 font-semibold transition-colors">
                                                Create Order
                                            </button>
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
