import AdminLayout from '@/Layouts/admin/AdminLayout';
import { Head, Link } from '@inertiajs/react';
import { MagnifyingGlassIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function Warehouses() {
    // UI-only mock data
    const warehouses = [
        { 
            id: 'WH-001', 
            name: 'Main Distribution Center', 
            location: 'Paris', 
            country: 'France', 
            skuCount: 245, 
            totalStock: 12450,
            manager: 'Jean Dupont',
            address: '123 Rue de la République'
        },
        { 
            id: 'WH-002', 
            name: 'Regional Depot North', 
            location: 'Lyon', 
            country: 'France', 
            skuCount: 128, 
            totalStock: 5600,
            manager: 'Marie Laurent',
            address: '45 Avenue du Nord'
        },
        { 
            id: 'WH-003', 
            name: 'Belgium Hub', 
            location: 'Brussels', 
            country: 'Belgium', 
            skuCount: 89, 
            totalStock: 3200,
            manager: 'Peter Van Damme',
            address: '12 Boulevard Central'
        },
        { 
            id: 'WH-004', 
            name: 'Germany Distribution', 
            location: 'Munich', 
            country: 'Germany', 
            skuCount: 310, 
            totalStock: 18700,
            manager: 'Klaus Schmidt',
            address: '78 Industriestraße'
        },
        { 
            id: 'WH-005', 
            name: 'Spain Logistics Center', 
            location: 'Madrid', 
            country: 'Spain', 
            skuCount: 156, 
            totalStock: 7800,
            manager: 'Carlos Rodriguez',
            address: '34 Calle Industrial'
        },
        { 
            id: 'WH-006', 
            name: 'Italy Storage Facility', 
            location: 'Milan', 
            country: 'Italy', 
            skuCount: 102, 
            totalStock: 4500,
            manager: 'Giuseppe Rossi',
            address: '56 Via Logistica'
        },
    ];

    const countries = ['All Countries', 'France', 'Belgium', 'Germany', 'Spain', 'Italy'];

    return (
        <AdminLayout>
            <Head title="Warehouses — Lyra" />

            <div className="p-6 lg:p-10">
                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">Warehouses</h1>
                    <p className="text-sm text-gray-500 mt-1">Manage warehouse locations and inventory distribution</p>
                </div>

                {/* Filters */}
                <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
                    <div className="flex flex-col md:flex-row gap-4">
                        {/* Search */}
                        <div className="flex-1 relative">
                            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search warehouses by name or location..."
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        {/* Country filter */}
                        <div className="md:w-64">
                            <select className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                {countries.map((c) => (
                                    <option key={c} value={c}>{c}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-white rounded-lg p-4 border shadow-sm">
                        <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">Total Warehouses</div>
                        <div className="text-2xl font-bold text-gray-900">{warehouses.length}</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border shadow-sm">
                        <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">Total SKUs</div>
                        <div className="text-2xl font-bold text-gray-900">
                            {warehouses.reduce((sum, w) => sum + w.skuCount, 0)}
                        </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border shadow-sm">
                        <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">Total Stock Units</div>
                        <div className="text-2xl font-bold text-gray-900">
                            {warehouses.reduce((sum, w) => sum + w.totalStock, 0).toLocaleString()}
                        </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border shadow-sm">
                        <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">Countries</div>
                        <div className="text-2xl font-bold text-gray-900">
                            {new Set(warehouses.map(w => w.country)).size}
                        </div>
                    </div>
                </div>

                {/* Warehouses Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {warehouses.map((warehouse) => (
                        <div key={warehouse.id} className="bg-white rounded-lg border shadow-sm hover:shadow-md transition-shadow">
                            <div className="p-6">
                                {/* Header */}
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800">{warehouse.name}</h3>
                                        <div className="flex items-center gap-1 mt-1 text-sm text-gray-500">
                                            <MapPinIcon className="h-4 w-4" />
                                            <span>{warehouse.location}, {warehouse.country}</span>
                                        </div>
                                    </div>
                                    <div className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-semibold">
                                        {warehouse.id}
                                    </div>
                                </div>

                                {/* Stats */}
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <div className="text-xs text-gray-400 mb-1">SKUs</div>
                                        <div className="text-xl font-bold text-gray-800">{warehouse.skuCount}</div>
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-400 mb-1">Total Stock</div>
                                        <div className="text-xl font-bold text-gray-800">{warehouse.totalStock.toLocaleString()}</div>
                                    </div>
                                </div>

                                {/* Manager */}
                                <div className="mb-4 pb-4 border-b">
                                    <div className="text-xs text-gray-400 mb-1">Manager</div>
                                    <div className="text-sm font-medium text-gray-700">{warehouse.manager}</div>
                                </div>

                                {/* Action Button */}
                                <Link
                                    href={`/warehouses/${warehouse.id}`}
                                    className="block w-full text-center px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-md hover:bg-blue-700 transition-colors"
                                >
                                    View Warehouse
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </AdminLayout>
    );
}
