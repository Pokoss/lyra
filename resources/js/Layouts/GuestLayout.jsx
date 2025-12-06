import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-red-600 via-red-400 to-blue-700 py-10 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md">
                <div className="flex flex-col items-center text-center mb-6">
                    <Link href="/">
                        <ApplicationLogo className="h-20 w-auto" />
                    </Link>
                    <h1 className="mt-3 text-2xl font-bold text-white tracking-tight">Lyra</h1>
                    <p className="text-sm text-white/85">Inventory management for Total Lubricants</p>
                </div>

                <div className="w-full overflow-hidden bg-white/95 backdrop-blur-sm px-6 py-6 shadow-lg sm:rounded-xl">
                    {children}
                </div>
            </div>
        </div>
    );
}
