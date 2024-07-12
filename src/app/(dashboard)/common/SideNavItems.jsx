import React from 'react'
import NavItem from '../common/NavItem'

const SideNavItems = ({ navItems, footerNavItems }) => {
    return (
        <aside className="fixed h-screen start-0 left-0 z-10 hidden w-14 flex-col border-r bg-background transition-all duration-300 sm:flex">
            <nav className="flex flex-col items-center gap-4 px-2 sm:py-5 " >
                {navItems.map((item, index) => (
                    <NavItem
                        key={index}
                        href={item.href}
                        icon={item.icon}
                        label={item.label}
                        active={item.active}
                    />
                ))}
            </nav>
            <nav className="flex flex-col items-center  mt-[340px] gap-4 px-2 ">
                {footerNavItems.map((item, index) => (
                    <NavItem
                        key={index}
                        href={item.href}
                        icon={item.icon}
                        label={item.label}
                        active={item.active}
                    />
                ))}
            </nav>
        </aside>
    )
}

export default SideNavItems
