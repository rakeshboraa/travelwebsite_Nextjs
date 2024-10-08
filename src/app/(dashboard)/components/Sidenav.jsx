"use client"
import React, { useState } from 'react'
import { Home, Rss, Package, TableProperties, Settings, LucideActivity, DollarSign, TicketCheck, Users, TicketPercentIcon, BadgePercent, } from "lucide-react"
import SideNavItems from '../common/SideNavItems'

const navItems = [
    {
        href: "/dashboard",
        icon: Home,
        label: "Dashboard",
        active: true
    },
    {
        href: "/dashboard/activities",
        icon: LucideActivity,
        label: "Activities",
        active: true
    },
    {
        href: "/dashboard/comboOffers",
        icon: BadgePercent,
        label: "Combo Offers",
        active: true
    },
    {
        href: "/dashboard/salesOffers",
        icon: TicketPercentIcon,
        label: "Sales Offers",
        active: true
    },
    {
        href: "/dashboard/vendors",
        icon: DollarSign,
        label: "Vendors",
        active: true
    },
    {
        href: "/dashboard/bookings",
        icon: TicketCheck,
        label: "Bookings",
        active: true
    },
    {
        href: "/dashboard/users",
        icon: Users,
        label: "Users",
        active: true
    },
    {
        href: "/dashboard/blogs",
        icon: Rss,
        label: "Blogs",
        active: true
    },
    {
        href: "/dashboard/category",
        icon: TableProperties,
        label: "Categories",
        active: true
    },

]

const footerNavItems = [
    {
        href: "/dashboard/settings",
        icon: Settings,
        label: "Settings",
        active: true
    }
]

const Sidenav = () => {
    const [hoveredIndex, setHoveredIndex] = useState(false);

    const handleMouseEnter = (index) => {
        setHoveredIndex(true);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(false);
    };

    return (
        <div className='w-full h-full flex items-center' onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}>
            <SideNavItems showLabel={hoveredIndex}  navItems={navItems} footerNavItems={footerNavItems} />
        </div>
    )
}

export default Sidenav

