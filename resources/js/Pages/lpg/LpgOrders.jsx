import LpgLayout from '@/Layouts/lpg/LpgLayout';
import { Head, Link } from '@inertiajs/react';
import { CalendarIcon, ChevronRightIcon, ClockIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

export default function LpgOrders() {
    // Monthly LPG orders data
    const monthlyOrders = [
        {
            month: 'December 2025',
            monthKey: '2025-12',
            totalOrdered: 500000, // kg
            totalDelivered: 156000,
            totalPending: 344000,
            percentageComplete: 31.2,
            deliveryCount: 7,
            lastDelivery: '2025-12-05 02:30 PM',
            status: 'active',
        },
        {
            month: 'November 2025',
            monthKey: '2025-11',
            totalOrdered: 500000,
            totalDelivered: 500000,
            totalPending: 0,
            percentageComplete: 100,
            deliveryCount: 22,
            lastDelivery: '2025-11-29 04:45 PM',
            status: 'completed',
        },
        {
            month: 'October 2025',
            monthKey: '2025-10',
            totalOrdered: 450000,
            totalDelivered: 450000,
            totalPending: 0,
            percentageComplete: 100,
            deliveryCount: 19,
            lastDelivery: '2025-10-30 11:20 AM',
            status: 'completed',
        },
        {
            month: 'September 2025',
            monthKey: '2025-09',
            totalOrdered: 480000,
            totalDelivered: 480000,
            totalPending: 0,
            percentageComplete: 100,
            deliveryCount: 21,
            lastDelivery: '2025-09-28 03:15 PM',
            status: 'completed',
        },
        {
            month: 'August 2025',
            monthKey: '2025-08',
            totalOrdered: 450000,
            totalDelivered: 450000,
            totalPending: 0,
            percentageComplete: 100,
            deliveryCount: 20,
            lastDelivery: '2025-08-31 10:30 AM',
            status: 'completed',
        },
        {
            month: 'July 2025',
            monthKey: '2025-07',
            totalOrdered: 500000,
            totalDelivered: 500000,
            totalPending: 0,
            percentageComplete: 100,
            deliveryCount: 23,
            lastDelivery: '2025-07-30 02:45 PM',
            status: 'completed',
        },
    ];

    // Calculate totals
    const totalOrdered = monthlyOrders.reduce((sum, m) => sum + m.totalOrdered, 0);
    const totalDelivered = monthlyOrders.reduce((sum, m) => sum + m.totalDelivered, 0);
    const totalPending = monthlyOrders.reduce((sum, m) => sum + m.totalPending, 0);
    const totalDeliveries = monthlyOrders.reduce((sum, m) => sum + m.deliveryCount, 0);

    return (
        <LpgLayout>
            <Head title="LPG Orders — Lyra" />

            <div className="p-6 lg:p-10">
                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">LPG Orders</h1>
                    <p className="text-sm text-gray-500 mt-1">Browse monthly orders and track deliveries to depots</p>
                </div>

                {/* Overall Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-5 text-white shadow-lg">
                        <div className="text-xs uppercase tracking-wide opacity-90 mb-1">Total Ordered (6 months)</div>
                        <div className="text-3xl font-bold">{(totalOrdered / 1000).toFixed(0)} tons</div>
                        <div className="text-xs opacity-80 mt-1">{totalDeliveries} deliveries</div>
                    </div>
                    <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-5 text-white shadow-lg">
                        <div className="text-xs uppercase tracking-wide opacity-90 mb-1">Total Delivered</div>
                        <div className="text-3xl font-bold">{(totalDelivered / 1000).toFixed(0)} tons</div>
                        <div className="text-xs opacity-80 mt-1">Completed deliveries</div>
                    </div>
                    <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg p-5 text-white shadow-lg">
                        <div className="text-xs uppercase tracking-wide opacity-90 mb-1">Pending</div>
                        <div className="text-3xl font-bold">{(totalPending / 1000).toFixed(0)} tons</div>
                        <div className="text-xs opacity-80 mt-1">Awaiting delivery</div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-5 text-white shadow-lg">
                        <div className="text-xs uppercase tracking-wide opacity-90 mb-1">Active Depots</div>
                        <div className="text-3xl font-bold">3</div>
                        <div className="text-xs opacity-80 mt-1">Jinja, Ola, Roofings</div>
                    </div>
                </div>

                {/* Monthly Orders Grid */}
                <div>
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Orders by Month</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {monthlyOrders.map((order) => (
                            <Link
                                key={order.monthKey}
                                href={`/lpg/orders/month/${order.monthKey}`}
                                className="bg-white rounded-lg border shadow-sm hover:shadow-md transition-shadow p-6 group"
                            >
                                {/* Month Header */}
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-purple-50 rounded-lg">
                                            <CalendarIcon className="h-6 w-6 text-purple-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-800 text-lg">{order.month}</h3>
                                            <p className="text-xs text-gray-500 mt-0.5">Click to view details</p>
                                        </div>
                                    </div>
                                    <ChevronRightIcon className="h-5 w-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
                                </div>

                                {/* Total Order */}
                                <div className="mb-4 pb-4 border-b">
                                    <div className="text-sm text-gray-500 mb-1">Total Order</div>
                                    <div className="text-3xl font-bold text-gray-900">{(order.totalOrdered / 1000).toFixed(0)} tons</div>
                                    <div className="text-xs text-gray-500 mt-1">{(order.totalOrdered / 1000).toFixed(3)} kg</div>
                                </div>

                                {/* Status Breakdown */}
                                <div className="space-y-2 mb-4">
                                    {order.status === 'active' && order.totalPending > 0 && (
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-gray-600 flex items-center gap-2">
                                                <ClockIcon className="h-4 w-4 text-orange-500" />
                                                Pending
                                            </span>
                                            <span className="font-semibold text-orange-600">{(order.totalPending / 1000).toFixed(1)} tons</span>
                                        </div>
                                    )}
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-600 flex items-center gap-2">
                                            <CheckCircleIcon className="h-4 w-4 text-green-500" />
                                            Delivered
                                        </span>
                                        <span className="font-semibold text-green-600">{(order.totalDelivered / 1000).toFixed(1)} tons</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-600">Deliveries</span>
                                        <span className="font-semibold text-gray-700">{order.deliveryCount}</span>
                                    </div>
                                </div>

                                {/* Progress Bar */}
                                <div className="mb-2">
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div 
                                            className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full transition-all"
                                            style={{ width: `${order.percentageComplete}%` }}
                                        />
                                    </div>
                                    <div className="text-xs text-gray-500 mt-1 text-right">{order.percentageComplete.toFixed(1)}% complete</div>
                                </div>

                                {/* Last Delivery */}
                                <div className="pt-3 border-t">
                                    <div className="text-xs text-gray-500 mb-1">Last Delivery</div>
                                    <div className="text-sm font-medium text-gray-800">{order.lastDelivery}</div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </LpgLayout>
    );
}
