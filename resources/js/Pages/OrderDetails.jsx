import AdminLayout from '@/Layouts/admin/AdminLayout';
import { Head, Link } from '@inertiajs/react';
import { CheckCircleIcon, ClockIcon, TruckIcon, PrinterIcon, PencilIcon, XMarkIcon } from '@heroicons/react/24/outline';

export default function OrderDetails({ orderId = 'ORD-2024-001' }) {
    // UI-only mock order data
    const order = {
        id: orderId,
        product: 'Gear Oil XS-10',
        sku: 'GXS10',
        warehouse: 'Banda warehouse',
        warehouseId: 'WH-001',
        totalQuantity: 500,
        quantityDelivered: 320,
        quantityPending: 180,
        balanceAtWarehouse: 1250,
        orderDate: '2025-11-28',
        expectedDelivery: '2025-12-08',
        status: 'pending',
        currentStage: 'in-transit', // placed, in-transit, delivered
        supplier: 'TotalEnergies Supply Chain',
        contactPerson: 'Marie Laurent',
        phone: '+33 1 23 45 67 89',
        trackingNumber: 'TRK-2024-5678',
    };

    // Timeline/updates
    const updates = [
        { date: '2025-12-01 14:30', message: 'Shipment departed from supplier facility', type: 'info' },
        { date: '2025-11-30 10:15', message: 'Order confirmed by supplier', type: 'success' },
        { date: '2025-11-28 16:00', message: 'Order placed successfully', type: 'success' },
    ];

    // Progress stages
    const stages = [
        { name: 'Placed', key: 'placed', completed: true },
        { name: 'In Transit', key: 'in-transit', completed: order.currentStage === 'in-transit' || order.currentStage === 'delivered' },
        { name: 'Delivered', key: 'delivered', completed: order.currentStage === 'delivered' },
    ];

    const statusColors = {
        pending: 'bg-blue-100 text-blue-700',
        completed: 'bg-green-100 text-green-700',
        cancelled: 'bg-red-100 text-red-700',
    };

    return (
        <AdminLayout>
            <Head title={`Order ${order.id} — Lyra`} />

            <div className="p-6 lg:p-10">
                {/* Breadcrumb */}
                <nav className="text-xs text-gray-400 mb-4">
                    <Link href="/orders" className="hover:underline text-blue-600">Orders</Link>
                    <span className="mx-2">/</span>
                    <span className="text-gray-700 font-semibold">Order {order.id}</span>
                </nav>

                {/* Header with Actions */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Order {order.id}</h1>
                        <p className="text-sm text-gray-500 mt-1">Placed on {order.orderDate}</p>
                    </div>
                    <div className="mt-4 lg:mt-0 flex gap-2">
                        <button className="flex items-center gap-2 px-4 py-2 bg-white border text-sm font-semibold rounded-md hover:bg-gray-50 transition-colors">
                            <PencilIcon className="h-4 w-4" />
                            Edit Order
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-white border text-red-600 text-sm font-semibold rounded-md hover:bg-red-50 transition-colors">
                            <XMarkIcon className="h-4 w-4" />
                            Cancel Order
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-md hover:bg-blue-700 transition-colors">
                            <PrinterIcon className="h-4 w-4" />
                            Print
                        </button>
                    </div>
                </div>

                {/* Order Summary Card */}
                <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                    <div className="flex items-start justify-between mb-4">
                        <h2 className="text-lg font-semibold text-gray-800">Order Summary</h2>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${statusColors[order.status]}`}>
                            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div>
                            <div className="text-xs text-gray-400 mb-1">Product</div>
                            <div className="font-semibold text-gray-800">{order.product}</div>
                            <div className="text-xs text-gray-500 mt-1">SKU: {order.sku}</div>
                        </div>
                        <div>
                            <div className="text-xs text-gray-400 mb-1">Warehouse</div>
                            <div className="font-semibold text-gray-800">{order.warehouse}</div>
                            <Link href={`/warehouses/${order.warehouseId}`} className="text-xs text-blue-600 hover:underline mt-1 inline-block">
                                View Warehouse
                            </Link>
                        </div>
                        <div>
                            <div className="text-xs text-gray-400 mb-3">Order Quantity</div>
                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <span className="text-xs text-gray-600">Total on Order:</span>
                                    <span className="font-bold text-gray-900">{order.totalQuantity} packs</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-xs text-gray-600">Delivered:</span>
                                    <span className="font-semibold text-green-600">{order.quantityDelivered} packs</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-xs text-gray-600">Pending:</span>
                                    <span className="font-semibold text-orange-600">{order.quantityPending} packs</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="text-xs text-gray-400 mb-1">Expected Delivery</div>
                            <div className="font-semibold text-gray-800 mb-3">{order.expectedDelivery}</div>
                            <div className="mt-3 pt-3 border-t">
                                <div className="text-xs text-gray-400 mb-1">Balance at Warehouse</div>
                                <div className="font-bold text-blue-600 text-lg">{order.balanceAtWarehouse} packs</div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 pt-6 border-t grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <div className="text-xs text-gray-400 mb-1">Supplier</div>
                            <div className="font-semibold text-gray-800">{order.supplier}</div>
                        </div>
                        
                        <div>
                            <div className="text-xs text-gray-400 mb-1">Tracking Number</div>
                            <div className="font-semibold text-gray-800">{order.trackingNumber}</div>
                        </div>
                    </div>
                </div>

                {/* Status Progress Bar */}
                <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                    <h2 className="text-lg font-semibold text-gray-800 mb-6">Order Progress</h2>

                    <div className="relative">
                        {/* Progress line */}
                        <div className="absolute top-6 left-0 right-0 h-1 bg-gray-200">
                            <div
                                className="h-1 bg-blue-600 transition-all duration-500"
                                style={{
                                    width: order.currentStage === 'placed' ? '0%' : order.currentStage === 'in-transit' ? '50%' : '100%'
                                }}
                            />
                        </div>

                        {/* Progress stages */}
                        <div className="relative flex justify-between">
                            {stages.map((stage, index) => (
                                <div key={stage.key} className="flex flex-col items-center">
                                    <div
                                        className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${
                                            stage.completed
                                                ? 'bg-blue-600 border-blue-600 text-white'
                                                : 'bg-white border-gray-300 text-gray-400'
                                        }`}
                                    >
                                        {stage.key === 'placed' && <ClockIcon className="h-6 w-6" />}
                                        {stage.key === 'in-transit' && <TruckIcon className="h-6 w-6" />}
                                        {stage.key === 'delivered' && <CheckCircleIcon className="h-6 w-6" />}
                                    </div>
                                    <div className="mt-3 text-center">
                                        <div className={`text-sm font-semibold ${stage.completed ? 'text-gray-800' : 'text-gray-400'}`}>
                                            {stage.name}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Shipment Timeline */}
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">Shipment Timeline</h2>
                        <div className="space-y-4">
                            {updates.map((update, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className={`w-2 h-2 mt-2 rounded-full ${update.type === 'success' ? 'bg-green-500' : 'bg-blue-500'}`} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-sm text-gray-600">{update.message}</div>
                                        <div className="text-xs text-gray-400 mt-1">{update.date}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Notes / Recent Updates */}
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">Notes & Updates</h2>
                        <div className="space-y-3">
                            <div className="p-3 bg-blue-50 border border-blue-200 rounded-md">
                                <div className="text-sm text-gray-700">
                                    Shipment is on schedule. Expected to arrive at warehouse by {order.expectedDelivery}.
                                </div>
                                <div className="text-xs text-gray-400 mt-2">System notification • 2025-12-01</div>
                            </div>
                            <div className="p-3 bg-gray-50 border border-gray-200 rounded-md">
                                <div className="text-sm text-gray-700">
                                    Quality inspection passed at supplier facility.
                                </div>
                                <div className="text-xs text-gray-400 mt-2">Marie Laurent • 2025-11-30</div>
                            </div>
                            <div className="p-3 bg-gray-50 border border-gray-200 rounded-md">
                                <div className="text-sm text-gray-700">
                                    Order confirmation received from supplier.
                                </div>
                                <div className="text-xs text-gray-400 mt-2">System notification • 2025-11-28</div>
                            </div>
                        </div>

                        {/* Add Note button */}
                        <button className="mt-4 w-full px-4 py-2 bg-white border text-sm font-semibold rounded-md hover:bg-gray-50 transition-colors">
                            Add Note
                        </button>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
