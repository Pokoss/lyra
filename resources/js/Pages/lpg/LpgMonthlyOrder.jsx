import LpgLayout from '@/Layouts/lpg/LpgLayout';
import { Head, Link } from '@inertiajs/react';
import { ArrowLeftIcon, CalendarIcon, TruckIcon, PlusIcon } from '@heroicons/react/24/outline';

export default function LpgMonthlyOrder({ month = '2025-12' }) {
    // Parse month for display
    const [year, monthNum] = month.split('-');
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthDisplay = `${monthNames[parseInt(monthNum) - 1]} ${year}`;

    // Mock monthly order data
    const orderData = {
        totalOrdered: 500000, // kg (500 tons)
        totalDelivered: 156000, // kg
        totalPending: 344000, // kg
        percentageComplete: 31.2,
    };

    // Mock deliveries for this month
    const deliveries = [
        {
            id: 'DLV-2025-089',
            depot: 'Jinja Depot',
            quantity: 23000, // kg
            date: '2025-12-06',
            time: '10:30 AM',
            truckNumber: 'UBJ 234K',
            invoiceStatus: 'paid',
            status: 'completed',
        },
        {
            id: 'DLV-2025-088',
            depot: 'Ola Depot',
            quantity: 21000,
            date: '2025-12-06',
            time: '09:15 AM',
            truckNumber: 'UBE 567M',
            invoiceStatus: 'posted',
            status: 'completed',
        },
        {
            id: 'DLV-2025-087',
            depot: 'Roofings Depot',
            quantity: 19500,
            date: '2025-12-05',
            time: '04:20 PM',
            truckNumber: 'UAM 789P',
            invoiceStatus: 'pending-payment',
            status: 'completed',
        },
        {
            id: 'DLV-2025-086',
            depot: 'Jinja Depot',
            quantity: 22000,
            date: '2025-12-05',
            time: '02:45 PM',
            truckNumber: 'UBJ 456L',
            invoiceStatus: 'received',
            status: 'completed',
        },
        {
            id: 'DLV-2025-085',
            depot: 'Ola Depot',
            quantity: 24000,
            date: '2025-12-04',
            time: '11:00 AM',
            truckNumber: 'UBE 890N',
            invoiceStatus: 'paid',
            status: 'completed',
        },
        {
            id: 'DLV-2025-084',
            depot: 'Roofings Depot',
            quantity: 23500,
            date: '2025-12-03',
            time: '03:30 PM',
            truckNumber: 'UAM 123Q',
            invoiceStatus: 'disputed',
            status: 'completed',
        },
        {
            id: 'DLV-2025-083',
            depot: 'Jinja Depot',
            quantity: 23000,
            date: '2025-12-02',
            time: '09:45 AM',
            truckNumber: 'UBJ 678R',
            invoiceStatus: 'paid',
            status: 'completed',
        },
    ];

    // Depot breakdown
    const depotBreakdown = [
        { name: 'Jinja Depot', delivered: 68000, percentage: 43.6, color: 'blue' },
        { name: 'Ola Depot', delivered: 45000, percentage: 28.8, color: 'green' },
        { name: 'Roofings Depot', delivered: 43000, percentage: 27.6, color: 'purple' },
    ];

    const StatusBadge = ({ status }) => {
        const styles = {
            completed: 'bg-green-100 text-green-700',
            pending: 'bg-orange-100 text-orange-700',
        };

        return (
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${styles[status]}`}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
        );
    };

    const InvoiceStatusBadge = ({ status }) => {
        const styles = {
            'received': 'bg-blue-100 text-blue-700',
            'posted': 'bg-purple-100 text-purple-700',
            'pending-payment': 'bg-orange-100 text-orange-700',
            'paid': 'bg-green-100 text-green-700',
            'disputed': 'bg-red-100 text-red-700',
        };

        const labels = {
            'received': 'Received',
            'posted': 'Posted',
            'pending-payment': 'Pending Payment',
            'paid': 'Paid',
            'disputed': 'Disputed',
        };

        return (
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${styles[status]}`}>
                {labels[status]}
            </span>
        );
    };

    return (
        <LpgLayout>
            <Head title={`LPG Orders — ${monthDisplay} — Lyra`} />

            <div className="p-6 lg:p-10">
                {/* Back Button & Month Header */}
                <div className="mb-6">
                    <Link
                        href="/lpg/orders"
                        className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-4 transition-colors"
                    >
                        <ArrowLeftIcon className="h-4 w-4" />
                        Back to All Orders
                    </Link>
                    
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-purple-50 rounded-lg">
                            <CalendarIcon className="h-6 w-6 text-purple-600" />
                        </div>
                        <h1 className="text-2xl font-bold text-gray-800">{monthDisplay} Order</h1>
                    </div>
                    <p className="text-sm text-gray-500 ml-14">Track deliveries and depot distribution</p>
                </div>

                {/* Order Summary Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-white rounded-lg p-4 border shadow-sm">
                        <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">Total Ordered</div>
                        <div className="text-2xl font-bold text-gray-900">{(orderData.totalOrdered / 1000).toFixed(0)} tons</div>
                        <div className="text-xs text-gray-500 mt-1">{orderData.totalOrdered.toLocaleString()} kg</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border shadow-sm">
                        <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">Delivered</div>
                        <div className="text-2xl font-bold text-green-600">{(orderData.totalDelivered / 1000).toFixed(1)} tons</div>
                        <div className="text-xs text-gray-500 mt-1">{deliveries.length} deliveries</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border shadow-sm">
                        <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">Pending</div>
                        <div className="text-2xl font-bold text-orange-600">{(orderData.totalPending / 1000).toFixed(1)} tons</div>
                        <div className="text-xs text-gray-500 mt-1">Awaiting delivery</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border shadow-sm">
                        <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">Progress</div>
                        <div className="text-2xl font-bold text-purple-600">{orderData.percentageComplete.toFixed(1)}%</div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                            <div 
                                className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full"
                                style={{ width: `${orderData.percentageComplete}%` }}
                            />
                        </div>
                    </div>
                </div>

                {/* Depot Breakdown */}
                <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Depot Distribution</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {depotBreakdown.map((depot, index) => (
                            <div key={index} className="p-4 border rounded-lg">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="font-semibold text-gray-800">{depot.name}</span>
                                    <span className="text-sm font-semibold text-gray-700">{depot.percentage.toFixed(1)}%</span>
                                </div>
                                <div className="text-2xl font-bold text-gray-900 mb-2">{(depot.delivered / 1000).toFixed(1)} tons</div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div 
                                        className={`h-2 rounded-full bg-${depot.color}-500`}
                                        style={{ width: `${depot.percentage}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Deliveries Table */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="p-4 border-b flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-gray-800">Delivery Records</h2>
                        <Link
                            href="/lpg/deliveries/record"
                            className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white text-sm font-semibold rounded-md hover:bg-purple-700 transition-colors"
                        >
                            <PlusIcon className="h-4 w-4" />
                            Record New Delivery
                        </Link>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-sm text-left">
                            <thead className="bg-gray-50 text-xs text-gray-500 uppercase tracking-wider">
                                <tr>
                                    <th className="px-4 py-3">Delivery ID</th>
                                    <th className="px-4 py-3">Depot</th>
                                    <th className="px-4 py-3">Quantity</th>
                                    <th className="px-4 py-3">Truck Number</th>
                                    <th className="px-4 py-3">Date & Time</th>
                                    <th className="px-4 py-3">Invoice Status</th>
                                    <th className="px-4 py-3">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {deliveries.map((delivery) => (
                                    <tr key={delivery.id} className="hover:bg-gray-50">
                                        <td className="px-4 py-4">
                                            <div className="font-semibold text-gray-800">{delivery.id}</div>
                                        </td>
                                        <td className="px-4 py-4">
                                            <div className="font-medium text-gray-800">{delivery.depot}</div>
                                        </td>
                                        <td className="px-4 py-4">
                                            <div className="font-semibold text-gray-800">{(delivery.quantity / 1000).toFixed(1)} tons</div>
                                            <div className="text-xs text-gray-500">{delivery.quantity.toLocaleString()} kg</div>
                                        </td>
                                        <td className="px-4 py-4 text-gray-600">{delivery.truckNumber}</td>
                                        <td className="px-4 py-4">
                                            <div className="text-gray-600">{delivery.date}</div>
                                            <div className="text-xs text-gray-500">{delivery.time}</div>
                                        </td>
                                        <td className="px-4 py-4">
                                            <InvoiceStatusBadge status={delivery.invoiceStatus} />
                                        </td>
                                        <td className="px-4 py-4">
                                            <StatusBadge status={delivery.status} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </LpgLayout>
    );
}
