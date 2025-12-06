import React from 'react'
import { Link } from '@inertiajs/react'

function AdminHeader({ sidebarOpen, setSidebarOpen }) {
  return (
  <header className="sticky top-0 z-30 bg-gradient-to-r from-red-600 via-red-500 to-blue-800 border-b border-red-700">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">

          {/* Header: Left side */}
          <div className="flex items-center">
          
            {/* Hamburger button */}
            <button
              className="text-purple-200 hover:text-white lg:hidden"
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="5" width="16" height="2" />
                <rect x="4" y="11" width="16" height="2" />
                <rect x="4" y="17" width="16" height="2" />
              </svg>
            </button>
           
            <div className="flex items-center ml-3">
              <img src="/images/assets/logo_totalenergies.png" alt="Lyra" className="w-7 h-auto mr-2" />
              <p className='text-white font-bold text-lg'>Admin Panel</p>
            </div>
          
          </div>

          {/* Header: Right side */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-xs text-white">LY</div>
            </div>
          </div>

        </div>
      </div>
    </header>
    )
}

export default AdminHeader
