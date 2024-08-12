import React from 'react';
import NavItem from './NavItem';

const SideNavItems = ({ navItems, footerNavItems, showLabel }) => {
   
    return (
        <div className='h-screen justify-between flex flex-col' >
            <nav className="w-full  flex flex-col items-center gap-4 px-2 sm:py-5" >
                {navItems.map((item, index) => (
                    <NavItem
                        showLabel={showLabel}
                        key={index}
                        href={item.href}
                        icon={item.icon}
                        label={item.label}
                    />
                ))}
            </nav>
            <nav className="flex flex-col items-center  mb-[7rem] px-2">
                {footerNavItems.map((item, index) => (
                    <NavItem
                        showLabel={showLabel}
                        key={index}
                        href={item.href}
                        icon={item.icon}
                        label={item.label}
                    />
                ))}
            </nav>
        </div>
    );
};

export default SideNavItems;
