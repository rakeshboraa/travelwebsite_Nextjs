import Link from 'next/link'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import React from 'react'

const NavItem = ({ href, icon: Icon, label, active }) => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild >
                    <Link
                        href={href}
                        className={`flex h-9 w-auto items-center bg-white justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8 ${
                            active ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'
                        }`}
                    >
                        <Icon className="h-5 w-5" />
                    </Link>
                </TooltipTrigger>
                <TooltipContent side="right" className="w-full ">{label}</TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}

export default NavItem
