import { Link } from '@inertiajs/react';
import { BellIcon, UserCircleIcon } from '@heroicons/react/24/outline';

export default function LpgHeader() {
    return (
        <header className="bg-white border-b border-gray-200 shadow-sm h-16 flex items-center justify-between px-6">
            {/* Page Title / Breadcrumb Area */}
            <div className="flex-1">
                <div className="text-sm text-gray-500">
                    LPG Management System
                </div>
            </div>

            {/* Right Side: Notifications + User */}
            <div className="flex items-center gap-4">
                {/* Notifications */}
                <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                    <BellIcon className="h-6 w-6" />
                    <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
                </button>

                {/* User Profile */}
                <Link
                    href="/lpg/settings"
                    className="flex items-center gap-3 pl-4 border-l border-gray-200 hover:bg-gray-50 rounded-lg transition-colors p-2"
                >
                    <div className="text-right">
                        <div className="text-sm font-semibold text-gray-700">Auma Judith</div>
                        <div className="text-xs text-gray-500">LPG Manager</div>
                    </div>
                    <UserCircleIcon className="h-9 w-9 text-purple-600" />
                </Link>
            </div>
        </header>
    );
}
