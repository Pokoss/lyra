import React, { useState, useRef, useEffect } from 'react';
import { Link } from '@inertiajs/react';

function AdminSidebar({ sidebarOpen, setSidebarOpen }) {
  const [openMenu, setOpenMenu] = useState(null);
  const trigger = useRef(null);
  const sidebar = useRef(null);

  // Toggle accordion menu
  const toggleMenu = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  // Close sidebar when clicking outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  }, [sidebarOpen]);

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div className="lg:w-64">
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden transition-opacity duration-200 ${
          sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      />

      {/* Sidebar */}
      <div
        id="admin-sidebar"
        ref={sidebar}
        className={`fixed z-40 left-0 top-0 h-screen w-64 flex-shrink-0 transform bg-gradient-to-b from-red-700 via-red-500 to-blue-800 text-white shadow-xl overflow-y-auto no-scrollbar transition-transform duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:relative lg:top-auto lg:left-auto`}
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between px-4 py-5 border-b border-red-700">
            <div className="flex items-center space-x-2">
              <img src="/images/assets/logo_totalenergies.png" className="w-10 h-auto rounded-sm" alt="Lyra - TotalEnergies" />
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight">Lyra</span>
                <span className="text-xs text-blue-100/80">Inventory • Total Lubricants</span>
              </div>
            </div>

          {/* Close button for mobile */}
          <button
            ref={trigger}
            onClick={() => setSidebarOpen(false)}
            className="p-1 rounded-lg text-purple-300 hover:text-white lg:hidden"
            aria-label="Close sidebar"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-4 px-2">
          <ul className="space-y-1">

            {/* Dashboard */}
            <li>
                <Link
                href="/dashboard"
                className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-gray-200 hover:bg-purple-700 hover:text-white transition-all duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                  Dashboard
              </Link>
            </li>

            {/* Inventory */}
            <li>
              <Link
                href="/inventory/overview"
                className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-gray-100 hover:bg-red-600 hover:text-white transition-all duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M16 3v4M8 3v4m-5 4h18" />
                </svg>
                Inventory
              </Link>
            </li>

            {/* Warehouses */}
            <li>
              <Link
                href="/warehouses"
                className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-gray-100 hover:bg-red-600 hover:text-white transition-all duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Warehouses
              </Link>
            </li>
            

            {/* (removed company/admin links) */}

            {/* (removed admin level links) */}

            {/* (removed admin level links) */}

            {/* Orders */}
            <li>
              <Link
                href="/orders"
                className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-gray-100 hover:bg-red-600 hover:text-white transition-all duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18M3 7h18M3 21h18M9 7v14" />
                </svg>
                Orders
              </Link>
            </li>

            {/* Replenishment */}
            <li>
              <Link
                href="/replenishment"
                className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-gray-100 hover:bg-red-600 hover:text-white transition-all duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
                Replenishment
              </Link>
            </li>

            {/* (removed admin-only links) */}

            {/* Reports */}
            <li>
              <Link
                href="/reports"
                className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-gray-100 hover:bg-blue-600 hover:text-white transition-all duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-6m6 6V9M3 21h18" />
                </svg>
                Reports
              </Link>
            </li>

            {/* (removed additional admin-only config menus) */}

            {/* (removed analytics + other admin links) */}

            <li>
              <Link
                href="/settings"
                className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-gray-100 hover:bg-blue-600 hover:text-white transition-all duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2" />
                </svg>
                Settings
              </Link>
            </li>

            {/* Divider */}
            <li className="pt-4">
              <div className="border-t border-red-700"></div>
            </li>

            {/* Back to Business Units */}
            <li>
                <Link
                href="/business-units"
                className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-gray-200 hover:bg-red-700 hover:text-white transition-all duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Change Business Unit
              </Link>
            </li>

            {/* Logout */}
            <li>
                <Link
                href="/logout"
                method="post"
                as="button"
                className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-gray-200 hover:bg-red-700 hover:text-white transition-all duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Logout
              </Link>
            </li>

          </ul>
        </nav>
      </div>
    </div>
  );
}

export default AdminSidebar;
