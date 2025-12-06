import LpgLayout from '@/Layouts/lpg/LpgLayout';
import { Head, Link } from '@inertiajs/react';
import { 
    CubeIcon, 
    CheckCircleIcon, 
    ClockIcon, 
    ExclamationTriangleIcon,
    TruckIcon,
    CalendarIcon,
    ScaleIcon,
    BuildingStorefrontIcon
} from '@heroicons/react/24/outline';

export default function LpgDashboard() {
    // Mock data for monthly LPG orders
    const monthlyOrders = [
        {
            month: 'December 2025',
            monthKey: '2025-12',
            totalOrdered: 500000, // kg (500 tons)
            totalDelivered: 156000, // kg
            totalPending: 344000, // kg
            percentageComplete: 31.2,
            deliveryCount: 7,
            lastDelivery: '2025-12-05',
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
            lastDelivery: '2025-11-29',
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
            lastDelivery: '2025-10-30',
            status: 'completed',
        },
    ];

    const depots = [
        { 
            name: 'Jinja Depot', 
            currentStock: 125000, // kg
            capacity: 200000,
            percentage: 62.5,
            deliveriesToday: 3,
            color: 'blue'
        },
        { 
            name: 'Ola Depot', 
            currentStock: 89000,
            capacity: 150000,
            percentage: 59.3,
            deliveriesToday: 2,
            color: 'green'
        },
        { 
            name: 'Roofings Depot', 
            currentStock: 67000,
            capacity: 120000,
            percentage: 55.8,
            deliveriesToday: 2,
            color: 'purple'
        },
    ];

    const recentDeliveries = [
        {
            id: 'DLV-2025-089',
            depot: 'Jinja Depot',
            quantity: 23000, // kg
            date: '2025-12-06',
            time: '10:30 AM',
            truckNumber: 'UBJ 234K',
            status: 'completed',
        },
        {
            id: 'DLV-2025-088',
            depot: 'Ola Depot',
            quantity: 21000,
            date: '2025-12-06',
            time: '09:15 AM',
            truckNumber: 'UBE 567M',
            status: 'completed',
        },
        {
            id: 'DLV-2025-087',
            depot: 'Roofings Depot',
            quantity: 19500,
            date: '2025-12-05',
            time: '04:20 PM',
            truckNumber: 'UAM 789P',
            status: 'completed',
        },
        {
            id: 'DLV-2025-086',
            depot: 'Jinja Depot',
            quantity: 22000,
            date: '2025-12-05',
            time: '02:45 PM',
            truckNumber: 'UBJ 456L',
            status: 'completed',
        },
    ];

    const stats = [
        { 
            label: 'Current Month Order', 
            value: '500 tons', 
            subValue: '31.2% delivered',
            icon: ScaleIcon,
            color: 'from-blue-500 to-blue-600'
        },
        { 
            label: 'Total Delivered', 
            value: '156 tons', 
            subValue: 'December 2025',
            icon: CheckCircleIcon,
            color: 'from-green-500 to-green-600'
        },
        { 
            label: 'Pending Delivery', 
            value: '344 tons', 
            subValue: 'Remaining this month',
            icon: ClockIcon,
            color: 'from-orange-500 to-orange-600'
        },
        { 
            label: 'Active Depots', 
            value: '3', 
            subValue: '7 deliveries today',
            icon: BuildingStorefrontIcon,
            color: 'from-purple-500 to-purple-600'
        },
    ];

    const StatusBadge = ({ status }) => {
        const styles = {
            active: 'bg-blue-100 text-blue-700',
            completed: 'bg-green-100 text-green-700',
            pending: 'bg-orange-100 text-orange-700',
        };

        return (
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${styles[status]}`}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
        );
    };

    return (
        <LpgLayout>
            <Head title="LPG Dashboard — Lyra" />

            <div className="p-6 lg:p-10">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">LPG Dashboard</h1>
                    <p className="text-sm text-gray-500 mt-1">Monitor monthly orders and depot deliveries</p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div key={index} className="bg-white rounded-lg shadow-sm border overflow-hidden">
                                <div className={`bg-gradient-to-br ${stat.color} p-4`}>
                                    <div className="flex items-center justify-between text-white">
                                        <Icon className="h-8 w-8 opacity-90" />
                                        <div className="text-right">
                                            <div className="text-2xl font-bold">{stat.value}</div>
                                            <div className="text-xs mt-1 opacity-90">
                                                {stat.subValue}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-3 bg-gray-50">
                                    <div className="text-sm font-semibold text-gray-700">{stat.label}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Monthly Orders Overview */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold text-gray-800">Monthly Orders</h2>
                        <Link href="/lpg/orders" className="text-sm text-purple-600 hover:underline font-semibold">
                            View All Orders
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {monthlyOrders.map((order) => (
                            <Link
                                key={order.monthKey}
                                href={`/lpg/orders/month/${order.monthKey}`}
                                className="bg-white rounded-lg border shadow-sm hover:shadow-md transition-shadow p-6 group"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-purple-50 rounded-lg">
                                            <CalendarIcon className="h-6 w-6 text-purple-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-800">{order.month}</h3>
                                            <p className="text-xs text-gray-500 mt-0.5">{order.deliveryCount} deliveries</p>
                                        </div>
                                    </div>
                                    <StatusBadge status={order.status} />
                                </div>

                                <div className="mb-4">
                                    <div className="text-sm text-gray-500 mb-1">Total Order</div>
                                    <div className="text-2xl font-bold text-gray-900">{(order.totalOrdered / 1000).toFixed(0)} tons</div>
                                </div>

                                <div className="space-y-2 mb-3">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Delivered:</span>
                                        <span className="font-semibold text-green-600">{(order.totalDelivered / 1000).toFixed(0)} tons</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Pending:</span>
                                        <span className="font-semibold text-orange-600">{(order.totalPending / 1000).toFixed(0)} tons</span>
                                    </div>
                                </div>

                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div 
                                        className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full transition-all"
                                        style={{ width: `${order.percentageComplete}%` }}
                                    />
                                </div>
                                <div className="text-xs text-gray-500 mt-1 text-right">{order.percentageComplete}% complete</div>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                    {/* Depot Status */}
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-semibold text-gray-800">Depot Status</h2>
                            <Link href="/lpg/depots" className="text-sm text-purple-600 hover:underline font-semibold">
                                Manage Depots
                            </Link>
                        </div>
                        <div className="space-y-4">
                            {depots.map((depot, index) => (
                                <div key={index} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-2">
                                            <BuildingStorefrontIcon className="h-5 w-5 text-purple-600" />
                                            <span className="font-semibold text-gray-800">{depot.name}</span>
                                        </div>
                                        <span className="text-sm font-semibold text-gray-700">{depot.percentage.toFixed(1)}%</span>
                                    </div>
                                    <div className="text-sm text-gray-600 mb-2">
                                        {(depot.currentStock / 1000).toFixed(1)} / {(depot.capacity / 1000).toFixed(0)} tons
                                        <span className="text-xs text-gray-500 ml-2">• {depot.deliveriesToday} deliveries today</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div 
                                            className={`h-2 rounded-full ${
                                                depot.percentage >= 80 ? 'bg-red-500' :
                                                depot.percentage >= 60 ? 'bg-green-500' :
                                                depot.percentage >= 40 ? 'bg-blue-500' : 'bg-orange-500'
                                            }`}
                                            style={{ width: `${depot.percentage}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Recent Deliveries */}
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-semibold text-gray-800">Recent Deliveries</h2>
                            <Link href="/lpg/deliveries" className="text-sm text-purple-600 hover:underline font-semibold">
                                View All
                            </Link>
                        </div>
                        <div className="space-y-3">
                            {recentDeliveries.map((delivery) => (
                                <div key={delivery.id} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                                    <div className="flex items-start justify-between mb-2">
                                        <div>
                                            <div className="font-semibold text-gray-800">{delivery.id}</div>
                                            <div className="text-sm text-gray-600">{delivery.depot}</div>
                                        </div>
                                        <TruckIcon className="h-5 w-5 text-green-600" />
                                    </div>
                                    <div className="flex items-center justify-between text-sm mt-2 pt-2 border-t">
                                        <div>
                                            <span className="font-semibold text-gray-800">{(delivery.quantity / 1000).toFixed(1)} tons</span>
                                            <span className="text-gray-400 text-xs ml-2">{delivery.truckNumber}</span>
                                        </div>
                                        <span className="text-gray-400 text-xs">
                                            {delivery.date} {delivery.time}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <Link 
                            href="/lpg/deliveries/record"
                            className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 text-white text-sm font-semibold rounded-md hover:bg-purple-700 transition-colors"
                        >
                            <TruckIcon className="h-4 w-4" />
                            Record New Delivery
                        </Link>
                    </div>
                </div>
            </div>
        </LpgLayout>
    );
}
