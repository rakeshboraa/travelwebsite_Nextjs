import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

const NavItem = ({ href, icon: Icon, label, showLabel }) => {
    const pathname = usePathname()
    const isActive = pathname === href

    return (
        <Link
            href={href}
            className={`flex items-center rounded-lg transition-colors duration-300 
                ${isActive ? 'bg-gray-200 font-semibold text-gray-900' : 'text-gray-600 hover:bg-gray-100 hover:shadow-md'} 
                ${showLabel ? 'py-2 px-4' : 'py-2 px-3'}
                w-full`}
        >
            <Icon className="h-5 w-5" />
            {showLabel && (
                <span className={`ml-3 text-sm ${isActive ? 'text-gray-900' : 'text-gray-700'}`}>
                    {label}
                </span>
            )}
        </Link>
    )
}

export default NavItem
