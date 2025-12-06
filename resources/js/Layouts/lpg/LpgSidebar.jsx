import { Link } from '@inertiajs/react';
import { 
    HomeIcon, 
    CubeIcon,
    TruckIcon,
    ArrowPathIcon,
    ChartBarIcon,
    Cog6ToothIcon,
    ArrowLeftOnRectangleIcon
} from '@heroicons/react/24/outline';

export default function LpgSidebar() {
    const navigation = [
        { name: 'Dashboard', href: '/lpg/dashboard', icon: HomeIcon },
        { name: 'Monthly Orders', href: '/lpg/orders', icon: CubeIcon },
        { name: 'Deliveries', href: '/lpg/deliveries', icon: TruckIcon },
        { name: 'Depots', href: '/lpg/depots', icon: ArrowPathIcon },
        { name: 'Reports', href: '/lpg/reports', icon: ChartBarIcon },
        { name: 'Settings', href: '/lpg/settings', icon: Cog6ToothIcon },
    ];

    const currentPath = window.location.pathname;

    return (
        <aside className="w-64 bg-gradient-to-b from-purple-900 to-purple-800 text-white flex flex-col h-screen fixed left-0 top-0 shadow-xl">
            {/* Logo Section */}
            <div className="p-6 border-b border-purple-700">
                <Link href="/business-units" className="block group">
                    <div className="flex items-center gap-3 mb-2">
                        <img 
                            src="/images/totalenergies-logo.png" 
                            alt="TotalEnergies" 
                            className="h-8"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                            }}
                        />
                        <div style={{ display: 'none' }} className="bg-gradient-to-r from-red-600 to-blue-600 text-white px-3 py-1 rounded font-bold text-sm">
                            TotalEnergies
                        </div>
                    </div>
                    <h1 className="text-xl font-bold text-white">Lyra - LPG</h1>
                    <p className="text-xs text-purple-300 mt-1">LPG Management System</p>
                </Link>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
                {navigation.map((item) => {
                    const isActive = currentPath === item.href || currentPath.startsWith(item.href + '/');
                    const Icon = item.icon;

                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`
                                flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
                                ${isActive 
                                    ? 'bg-purple-700 text-white font-semibold shadow-lg' 
                                    : 'text-purple-200 hover:bg-purple-700/50 hover:text-white'
                                }
                            `}
                        >
                            <Icon className="h-5 w-5" />
                            <span className="text-sm">{item.name}</span>
                        </Link>
                    );
                })}
            </nav>

            {/* Back to Business Units & Logout */}
            <div className="p-4 border-t border-purple-700 space-y-2">
                <Link
                    href="/business-units"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-purple-200 hover:bg-purple-700/50 hover:text-white transition-colors text-sm"
                >
                    <ArrowLeftOnRectangleIcon className="h-5 w-5 transform rotate-180" />
                    <span>Change Business Unit</span>
                </Link>
                <Link
                    href="/logout"
                    method="post"
                    as="button"
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-purple-200 hover:bg-red-600 hover:text-white transition-colors text-sm"
                >
                    <ArrowLeftOnRectangleIcon className="h-5 w-5" />
                    <span>Logout</span>
                </Link>
            </div>
        </aside>
    );
}
