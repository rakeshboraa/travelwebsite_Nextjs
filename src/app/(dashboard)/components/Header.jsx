import React from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell, Globe, LogOut, Settings } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
    return (
        <div className=" z-10 sticky top-0 flex justify-between items-center p-4 bg-white shadow-md border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-800">Dashboard Home</h1>
            <div className="flex space-x-10 items-center">
                <div className="flex items-center text-gray-700 hover:text-gray-900 p-2 rounded-lg transition-colors duration-300">
                    <img src="https://img.freepik.com/premium-photo/there-is-cat-that-is-sitting-ledge-chinese-garden-generative-ai_900396-35755.jpg?w=826" alt="User Profile" className="w-12 h-12 rounded-full mr-3 border-2 border-gray-300 shadow-sm" />
                    <div className="text-left">
                        <span className="block font-semibold">UserName</span>
                        <span className="block text-sm text-gray-500">Role</span>
                    </div>
                </div>
                <div className="text-gray-700 hover:text-gray-900 relative">
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <div className='flex items-center gap-2'>
                                <Globe className="w-6 h-6" />
                                <span>Language</span>
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel className="font-semibold text-gray-800">Select Language</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="hover:bg-gray-200">En</DropdownMenuItem>
                            <DropdownMenuItem className="hover:bg-gray-200">Hi</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <div className="text-gray-700 hover:text-gray-900 relative">
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <div className='flex items-center gap-2'>
                                <Bell className="w-6 h-6" />
                                <span>Notifications</span>
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem className="hover:bg-gray-200">En</DropdownMenuItem>
                            <DropdownMenuItem className="hover:bg-gray-200">Hi</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <Link href="/dashboard/settings" className="text-gray-700 hover:text-gray-900 relative">
                    <div className='flex items-center gap-2'>
                        <Settings className="w-6 h-6" />
                        <span>Settings</span>
                    </div>
                </Link>
                <div className="text-gray-700 hover:text-gray-900 relative">
                    <div className='flex items-center gap-2'>
                        <LogOut className="w-6 h-6" />
                        <span>Logout</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
