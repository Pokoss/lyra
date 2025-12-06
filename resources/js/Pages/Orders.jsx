import AdminLayout from '@/Layouts/admin/AdminLayout';
import { Head, Link } from '@inertiajs/react';
import { CalendarIcon, ChevronRightIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function Orders() {
    // Monthly orders summary data
    const monthlyOrders = [
        {
            month: 'December 2025',
            monthKey: '2025-12',
            totalOrders: 45,
            pending: 28,
            completed: 15,
            cancelled: 2,
            totalValue: '$245,000',
            topProduct: 'Gear Oil XS-10',
        },
        {
            month: 'November 2025',
            monthKey: '2025-11',
            totalOrders: 38,
            pending: 0,
            completed: 32,
            cancelled: 6,
            totalValue: '$198,500',
            topProduct: 'Hydraulic Oil HT-200',
        },
        {
            month: 'October 2025',
            monthKey: '2025-10',
            totalOrders: 52,
            pending: 0,
            completed: 48,
            cancelled: 4,
            totalValue: '$312,000',
            topProduct: 'Transmission Fluid TF-55',
        },
        {
            month: 'September 2025',
            monthKey: '2025-09',
            totalOrders: 41,
            pending: 0,
            completed: 37,
            cancelled: 4,
            totalValue: '$220,750',
            topProduct: 'Marine Diesel Oil MD-30',
        },
        {
            month: 'August 2025',
            monthKey: '2025-08',
            totalOrders: 35,
            pending: 0,
            completed: 33,
            cancelled: 2,
            totalValue: '$187,200',
            topProduct: 'Industrial Grease IG-40',
        },
        {
            month: 'July 2025',
            monthKey: '2025-07',
            totalOrders: 48,
            pending: 0,
            completed: 44,
            cancelled: 4,
            totalValue: '$265,800',
            topProduct: 'Gear Oil XS-10',
        },
    ];

    // Calculate totals
    const totalOrders = monthlyOrders.reduce((sum, m) => sum + m.totalOrders, 0);
    const totalPending = monthlyOrders.reduce((sum, m) => sum + m.pending, 0);
    const totalCompleted = monthlyOrders.reduce((sum, m) => sum + m.completed, 0);
    const totalCancelled = monthlyOrders.reduce((sum, m) => sum + m.cancelled, 0);

    return (
        <AdminLayout>
            <Head title="Orders — Lyra" />

            <div className="p-6 lg:p-10">
                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">Orders</h1>
                    <p className="text-sm text-gray-500 mt-1">Browse orders by month and manage replenishment</p>
                </div>

                {/* Overall Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-5 text-white shadow-lg">
                        <div className="text-xs uppercase tracking-wide opacity-90 mb-1">Total Orders (6 months)</div>
                        <div className="text-3xl font-bold">{totalOrders}</div>
                    </div>
                    <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg p-5 text-white shadow-lg">
                        <div className="text-xs uppercase tracking-wide opacity-90 mb-1">Active/Pending</div>
                        <div className="text-3xl font-bold">{totalPending}</div>
                    </div>
                    <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-5 text-white shadow-lg">
                        <div className="text-xs uppercase tracking-wide opacity-90 mb-1">Completed</div>
                        <div className="text-3xl font-bold">{totalCompleted}</div>
                    </div>
                    <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-lg p-5 text-white shadow-lg">
                        <div className="text-xs uppercase tracking-wide opacity-90 mb-1">Cancelled</div>
                        <div className="text-3xl font-bold">{totalCancelled}</div>
                    </div>
                </div>

                {/* Monthly Orders Grid */}
                <div>
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Orders by Month</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {monthlyOrders.map((month) => (
                            <Link
                                key={month.monthKey}
                                href={`/orders/month/${month.monthKey}`}
                                className="bg-white rounded-lg border shadow-sm hover:shadow-md transition-shadow p-6 group"
                            >
                                {/* Month Header */}
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-red-50 rounded-lg">
                                            <CalendarIcon className="h-6 w-6 text-red-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-800 text-lg">{month.month}</h3>
                                            <p className="text-xs text-gray-500 mt-0.5">Click to view details</p>
                                        </div>
                                    </div>
                                    <ChevronRightIcon className="h-5 w-5 text-gray-400 group-hover:text-red-600 transition-colors" />
                                </div>

                                {/* Total Orders */}
                                <div className="mb-4 pb-4 border-b">
                                    <div className="text-sm text-gray-500 mb-1">Total Orders</div>
                                    <div className="text-3xl font-bold text-gray-900">{month.totalOrders}</div>
                                    <div className="text-xs text-gray-500 mt-1">Value: {month.totalValue}</div>
                                </div>

                                {/* Status Breakdown */}
                                <div className="space-y-2 mb-4">
                                    {month.pending > 0 && (
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-gray-600 flex items-center gap-2">
                                                <ClockIcon className="h-4 w-4 text-orange-500" />
                                                Pending
                                            </span>
                                            <span className="font-semibold text-orange-600">{month.pending}</span>
                                        </div>
                                    )}
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-600">Completed</span>
                                        <span className="font-semibold text-green-600">{month.completed}</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-600">Cancelled</span>
                                        <span className="font-semibold text-red-600">{month.cancelled}</span>
                                    </div>
                                </div>

                                {/* Top Product */}
                                <div className="pt-3 border-t">
                                    <div className="text-xs text-gray-500 mb-1">Top Product</div>
                                    <div className="text-sm font-medium text-gray-800">{month.topProduct}</div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
