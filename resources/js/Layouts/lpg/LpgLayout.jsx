import LpgSidebar from './LpgSidebar';
import LpgHeader from './LpgHeader';

export default function LpgLayout({ children }) {
    return (
        <div className="flex h-screen overflow-hidden bg-gray-50">
            {/* Sidebar */}
            <LpgSidebar />

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col ml-64 overflow-hidden">
                {/* Header */}
                <LpgHeader />

                {/* Page Content */}
                <main className="flex-1 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}
