import { Head, Link } from '@inertiajs/react';
import { 
    FireIcon, 
    BeakerIcon, 
    BoltIcon 
} from '@heroicons/react/24/outline';

export default function BusinessUnitSelection() {
    const businessUnits = [
        {
            id: 'fuels',
            name: 'Fuels',
            description: 'Manage fuel inventory, distribution and sales',
            icon: FireIcon,
            color: 'from-orange-500 to-red-600',
            href: '/fuels/dashboard',
            status: 'Coming Soon',
        },
        {
            id: 'lubricants',
            name: 'Lubricants',
            description: 'Track lubricant products, orders and warehouse operations',
            icon: BeakerIcon,
            color: 'from-blue-500 to-blue-700',
            href: '/dashboard',
            status: 'Active',
        },
        {
            id: 'lpg',
            name: 'LPG',
            description: 'Monitor LPG cylinder inventory and distribution',
            icon: BoltIcon,
            color: 'from-purple-500 to-purple-700',
            href: '/lpg/dashboard',
            status: 'Active',
        },
    ];

    return (
        <>
            <Head title="Select Business Unit — Lyra" />

            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col">
                {/* Header with TotalEnergies Branding */}
                <div className="bg-white border-b shadow-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <img 
                                    src="/images/totalenergies-logo.png" 
                                    alt="TotalEnergies" 
                                    className="h-10"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'block';
                                    }}
                                />
                                <div style={{ display: 'none' }} className="bg-gradient-to-r from-red-600 to-blue-600 text-white px-4 py-2 rounded font-bold text-lg">
                                    TotalEnergies
                                </div>
                                <div className="border-l border-gray-300 pl-3 ml-3">
                                    <h1 className="text-xl font-bold text-gray-800">Lyra</h1>
                                    <p className="text-xs text-gray-500">Inventory Management System</p>
                                </div>
                            </div>
                            <Link
                                href="/logout"
                                method="post"
                                as="button"
                                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                            >
                                Logout
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 flex items-center justify-center p-6">
                    <div className="max-w-6xl w-full">
                        {/* Welcome Section */}
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-3">
                                Welcome to Lyra
                            </h2>
                            <p className="text-lg text-gray-600">
                                Select a business unit to continue
                            </p>
                        </div>

                        {/* Business Unit Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {businessUnits.map((unit) => {
                                const Icon = unit.icon;
                                const isDisabled = unit.status === 'Coming Soon';

                                return (
                                    <Link
                                        key={unit.id}
                                        href={unit.href}
                                        disabled={isDisabled}
                                        className={`
                                            relative bg-white rounded-2xl shadow-lg overflow-hidden
                                            transition-all duration-300 transform
                                            ${isDisabled 
                                                ? 'opacity-60 cursor-not-allowed' 
                                                : 'hover:shadow-2xl hover:-translate-y-2 cursor-pointer'
                                            }
                                        `}
                                    >
                                        {/* Gradient Header */}
                                        <div className={`bg-gradient-to-br ${unit.color} p-8 text-white relative`}>
                                            <div className="absolute top-4 right-4">
                                                {unit.status === 'Active' ? (
                                                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold">
                                                        Active
                                                    </span>
                                                ) : (
                                                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold">
                                                        Coming Soon
                                                    </span>
                                                )}
                                            </div>
                                            <Icon className="h-16 w-16 mb-4 opacity-90" />
                                            <h3 className="text-2xl font-bold">{unit.name}</h3>
                                        </div>

                                        {/* Card Body */}
                                        <div className="p-6">
                                            <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                                {unit.description}
                                            </p>
                                            
                                            {!isDisabled && (
                                                <div className="flex items-center text-blue-600 font-semibold text-sm">
                                                    <span>Access Dashboard</span>
                                                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                            )}
                                            
                                            {isDisabled && (
                                                <div className="text-gray-400 text-sm italic">
                                                    This module is under development
                                                </div>
                                            )}
                                        </div>

                                        {/* Hover Effect Border */}
                                        {!isDisabled && (
                                            <div className="absolute inset-0 border-2 border-transparent hover:border-blue-400 rounded-2xl pointer-events-none transition-colors duration-300" />
                                        )}
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Footer Info */}
                        <div className="mt-12 text-center">
                            <p className="text-sm text-gray-500">
                                Need help? Contact your system administrator
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
