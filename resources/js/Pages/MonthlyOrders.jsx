import AdminLayout from '@/Layouts/admin/AdminLayout';
import { Head, Link } from '@inertiajs/react';
import { FunnelIcon, PlusIcon, ArrowLeftIcon, CalendarIcon } from '@heroicons/react/24/outline';
import Pagination from '@/Components/Pagination';

export default function MonthlyOrders({ month = '2025-11' }) {
    // Parse month for display
    const [year, monthNum] = month.split('-');
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthDisplay = `${monthNames[parseInt(monthNum) - 1]} ${year}`;

    // UI-only mock orders data for the selected month
    const orders = [
        {
            id: 'ORD-2025-001',
            product: 'Gear Oil XS-10',
            sku: 'GXS10',
            countryOfOrigin: 'Kenya',
            quantity: 500,
            orderDate: '2025-11-28',
            expectedDelivery: '2025-12-08',
            status: 'pending',
            value: '$12,500',
        },
        {
            id: 'ORD-2025-002',
            product: 'Hydraulic Oil HT-200',
            sku: 'HHT200',
            countryOfOrigin: 'Tanzania',
            quantity: 300,
            orderDate: '2025-11-25',
            expectedDelivery: '2025-12-05',
            status: 'completed',
            value: '$8,400',
        },
        {
            id: 'ORD-2025-003',
            product: 'Transmission Fluid TF-55',
            sku: 'TTF55',
            countryOfOrigin: 'Egypt',
            quantity: 150,
            orderDate: '2025-11-30',
            expectedDelivery: '2025-12-10',
            status: 'pending',
            value: '$5,250',
        },
        {
            id: 'ORD-2025-004',
            product: 'Industrial Grease IG-40',
            sku: 'IIG40',
            countryOfOrigin: 'Dubai',
            quantity: 200,
            orderDate: '2025-11-20',
            expectedDelivery: '2025-11-30',
            status: 'cancelled',
            value: '$6,800',
        },
        {
            id: 'ORD-2025-005',
            product: 'Marine Diesel Oil MD-30',
            sku: 'MMD30',
            countryOfOrigin: 'Paris',
            quantity: 400,
            orderDate: '2025-11-22',
            expectedDelivery: '2025-12-02',
            status: 'completed',
            value: '$14,000',
        },
        {
            id: 'ORD-2025-006',
            product: 'Compressor Oil CO-100',
            sku: 'CCO100',
            countryOfOrigin: 'Kenya',
            quantity: 250,
            orderDate: '2025-11-01',
            expectedDelivery: '2025-11-12',
            status: 'completed',
            value: '$9,250',
        },
        {
            id: 'ORD-2025-007',
            product: 'Engine Oil 5W-30',
            sku: 'EO5W30',
            countryOfOrigin: 'Tanzania',
            quantity: 600,
            orderDate: '2025-11-15',
            expectedDelivery: '2025-11-25',
            status: 'completed',
            value: '$18,600',
        },
        {
            id: 'ORD-2025-008',
            product: 'Brake Fluid DOT 4',
            sku: 'BFD4',
            countryOfOrigin: 'Egypt',
            quantity: 180,
            orderDate: '2025-11-18',
            expectedDelivery: '2025-11-28',
            status: 'completed',
            value: '$3,960',
        },
    ];

    const countries = ['All Countries', 'Kenya', 'Tanzania', 'Egypt', 'Dubai', 'Paris'];
    const products = ['All Products', 'Gear Oil XS-10', 'Hydraulic Oil HT-200', 'Transmission Fluid TF-55', 'Industrial Grease IG-40', 'Marine Diesel Oil MD-30', 'Compressor Oil CO-100'];

    // Status badge component
    const StatusBadge = ({ status }) => {
        const styles = {
            pending: 'bg-orange-100 text-orange-700',
            completed: 'bg-green-100 text-green-700',
            cancelled: 'bg-red-100 text-red-700',
        };

        return (
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${styles[status]}`}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
        );
    };

    return (
        <AdminLayout>
            <Head title={`Orders — ${monthDisplay} — Lyra`} />

            <div className="p-6 lg:p-10">
                {/* Back Button & Month Header */}
                <div className="mb-6">
                    <Link
                        href="/orders"
                        className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-4 transition-colors"
                    >
                        <ArrowLeftIcon className="h-4 w-4" />
                        Back to All Orders
                    </Link>
                    
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-red-50 rounded-lg">
                            <CalendarIcon className="h-6 w-6 text-red-600" />
                        </div>
                        <h1 className="text-2xl font-bold text-gray-800">{monthDisplay} Orders</h1>
                    </div>
                    <p className="text-sm text-gray-500 ml-14">Manage and track orders for this month</p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-white rounded-lg p-4 border shadow-sm">
                        <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">Total Orders</div>
                        <div className="text-2xl font-bold text-gray-900">{orders.length}</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border shadow-sm">
                        <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">Pending</div>
                        <div className="text-2xl font-bold text-orange-600">
                            {orders.filter(o => o.status === 'pending').length}
                        </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border shadow-sm">
                        <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">Completed</div>
                        <div className="text-2xl font-bold text-green-600">
                            {orders.filter(o => o.status === 'completed').length}
                        </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border shadow-sm">
                        <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">Cancelled</div>
                        <div className="text-2xl font-bold text-red-600">
                            {orders.filter(o => o.status === 'cancelled').length}
                        </div>
                    </div>
                </div>

                {/* Action Bar with Filters */}
                <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
                    <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
                        <div className="flex flex-col md:flex-row gap-4 flex-1 w-full">
                            <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                                <FunnelIcon className="h-5 w-5" />
                                <span>Filters:</span>
                            </div>
                            <div className="flex flex-col md:flex-row gap-3 flex-1">
                                <select className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                    <option value="all">All Status</option>
                                    <option value="pending">Pending</option>
                                    <option value="completed">Completed</option>
                                    <option value="cancelled">Cancelled</option>
                                </select>
                                <select className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                    {countries.map((c) => (
                                        <option key={c} value={c}>{c}</option>
                                    ))}
                                </select>
                                <select className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                    {products.map((p) => (
                                        <option key={p} value={p}>{p}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <button className="flex items-center justify-center gap-2 px-4 py-2 bg-red-700 text-white text-sm font-semibold rounded-md hover:bg-red-800 transition-colors whitespace-nowrap">
                            <PlusIcon className="h-4 w-4" />
                            New Order
                        </button>
                    </div>
                </div>

                {/* Orders Table */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-sm text-left">
                            <thead className="bg-gray-50 text-xs text-gray-500 uppercase tracking-wider">
                                <tr>
                                    <th className="px-4 py-3">Product Code</th>
                                    <th className="px-4 py-3">Product</th>
                                    <th className="px-4 py-3">Country of Origin</th>
                                    <th className="px-4 py-3">Quantity</th>
                                    <th className="px-4 py-3">Order Date</th>
                                    <th className="px-4 py-3">Expected Delivery</th>
                                    <th className="px-4 py-3">Value</th>
                                    <th className="px-4 py-3">Status</th>
                                    <th className="px-4 py-3">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {orders.map((order) => (
                                    <tr key={order.id} className="hover:bg-gray-50">
                                        <td className="px-4 py-4">
                                            <div className="font-semibold text-gray-800">{order.id}</div>
                                            <div className="text-xs text-gray-400">SKU: {order.sku}</div>
                                        </td>
                                        <td className="px-4 py-4 font-medium text-gray-800">{order.product}</td>
                                        <td className="px-4 py-4 text-gray-600">{order.countryOfOrigin}</td>
                                        <td className="px-4 py-4">
                                            <div className="font-semibold text-gray-800">{order.quantity} packs</div>
                                        </td>
                                        <td className="px-4 py-4 text-gray-600">{order.orderDate}</td>
                                        <td className="px-4 py-4 text-gray-600">{order.expectedDelivery}</td>
                                        <td className="px-4 py-4">
                                            <div className="font-semibold text-gray-800">{order.value}</div>
                                        </td>
                                        <td className="px-4 py-4">
                                            <StatusBadge status={order.status} />
                                        </td>
                                        <td className="px-4 py-4">
                                            <Link
                                                href={`/orders/${order.id}`}
                                                className="text-xs bg-white border px-3 py-1 rounded-md hover:bg-gray-50"
                                            >
                                                View
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="px-4 pb-4">
                        <Pagination current={1} total={2} />
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
