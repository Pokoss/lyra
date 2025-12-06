import AdminLayout from '@/Layouts/admin/AdminLayout';
import { Head } from '@inertiajs/react';
import { UserCircleIcon, LockClosedIcon, BellIcon, CogIcon } from '@heroicons/react/24/outline';

export default function Settings() {
    // UI-only mock user data
    const user = {
        name: 'Auma Judith',
        email: 'auma.judith@totalenergies.com',
        role: 'Inventory Manager',
        profilePhoto: null, // Using placeholder
    };

    return (
        <AdminLayout>
            <Head title="Settings — Lyra" />

            <div className="p-6 lg:p-10 max-w-5xl">
                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
                    <p className="text-sm text-gray-500 mt-1">Manage your account and preferences</p>
                </div>

                {/* User Profile Card */}
                <div className="bg-white rounded-lg shadow-sm p-6 border mb-6">
                    <div className="flex items-center gap-2 mb-4">
                        <UserCircleIcon className="h-5 w-5 text-gray-600" />
                        <h2 className="text-lg font-semibold text-gray-800">User Profile</h2>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6">
                        {/* Profile Photo */}
                        <div className="flex-shrink-0">
                            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-red-500 to-blue-600 flex items-center justify-center text-white text-3xl font-bold">
                                {user.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <button className="mt-3 text-xs text-blue-600 hover:underline">Change photo</button>
                        </div>

                        {/* Profile Info */}
                        <div className="flex-1 space-y-4">
                            <div>
                                <label className="block text-xs font-medium text-gray-600 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    defaultValue={user.name}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-gray-600 mb-1">Email Address</label>
                                <input
                                    type="email"
                                    defaultValue={user.email}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-gray-600 mb-1">Role</label>
                                <input
                                    type="text"
                                    defaultValue={user.role}
                                    disabled
                                    className="w-full px-4 py-2 border border-gray-300 bg-gray-50 rounded-md text-sm text-gray-600"
                                />
                            </div>
                            <button className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-md hover:bg-blue-700 transition-colors">
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>

                {/* Update Password */}
                <div className="bg-white rounded-lg shadow-sm p-6 border mb-6">
                    <div className="flex items-center gap-2 mb-4">
                        <LockClosedIcon className="h-5 w-5 text-gray-600" />
                        <h2 className="text-lg font-semibold text-gray-800">Update Password</h2>
                    </div>

                    <div className="space-y-4 max-w-md">
                        <div>
                            <label className="block text-xs font-medium text-gray-600 mb-1">Current Password</label>
                            <input
                                type="password"
                                placeholder="Enter current password"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-600 mb-1">New Password</label>
                            <input
                                type="password"
                                placeholder="Enter new password"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-600 mb-1">Confirm New Password</label>
                            <input
                                type="password"
                                placeholder="Confirm new password"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                        <button className="px-4 py-2 bg-red-700 text-white text-sm font-semibold rounded-md hover:bg-red-800 transition-colors">
                            Update Password
                        </button>
                    </div>
                </div>

                {/* Notification Preferences */}
                <div className="bg-white rounded-lg shadow-sm p-6 border mb-6">
                    <div className="flex items-center gap-2 mb-4">
                        <BellIcon className="h-5 w-5 text-gray-600" />
                        <h2 className="text-lg font-semibold text-gray-800">Notification Preferences</h2>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center justify-between py-3 border-b">
                            <div>
                                <div className="text-sm font-medium text-gray-800">Email Notifications</div>
                                <div className="text-xs text-gray-500 mt-1">Receive email updates for important events</div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" defaultChecked className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            </label>
                        </div>

                        <div className="flex items-center justify-between py-3 border-b">
                            <div>
                                <div className="text-sm font-medium text-gray-800">Low Stock Alerts</div>
                                <div className="text-xs text-gray-500 mt-1">Get notified when products are running low</div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" defaultChecked className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            </label>
                        </div>

                        <div className="flex items-center justify-between py-3 border-b">
                            <div>
                                <div className="text-sm font-medium text-gray-800">Order Updates</div>
                                <div className="text-xs text-gray-500 mt-1">Notifications for order status changes</div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" defaultChecked className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            </label>
                        </div>

                        <div className="flex items-center justify-between py-3 border-b">
                            <div>
                                <div className="text-sm font-medium text-gray-800">Replenishment Recommendations</div>
                                <div className="text-xs text-gray-500 mt-1">AI-powered stock replenishment suggestions</div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" defaultChecked className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            </label>
                        </div>

                        <div className="flex items-center justify-between py-3">
                            <div>
                                <div className="text-sm font-medium text-gray-800">Weekly Reports</div>
                                <div className="text-xs text-gray-500 mt-1">Receive weekly summary reports via email</div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            </label>
                        </div>
                    </div>
                </div>

                {/* System Settings */}
                <div className="bg-white rounded-lg shadow-sm p-6 border">
                    <div className="flex items-center gap-2 mb-4">
                        <CogIcon className="h-5 w-5 text-gray-600" />
                        <h2 className="text-lg font-semibold text-gray-800">System Settings</h2>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-xs font-medium text-gray-600 mb-1">Language</label>
                            <select className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                <option>English (US)</option>
                                <option>French</option>
                                <option>German</option>
                                <option>Spanish</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-600 mb-1">Time Zone</label>
                            <select className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                <option>UTC+0 (GMT)</option>
                                <option>UTC+1 (Paris)</option>
                                <option>UTC+2 (Athens)</option>
                                <option>UTC-5 (New York)</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-600 mb-1">Date Format</label>
                            <select className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                <option>DD/MM/YYYY</option>
                                <option>MM/DD/YYYY</option>
                                <option>YYYY-MM-DD</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
