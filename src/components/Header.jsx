import React from 'react'

const Header = () => {
    return (
        <nav class="bg-gray-800 p-4 flex justify-between items-center">
            <div class="text-white">
                <h1 class="text-xl font-bold">Admin Dashboard</h1>
            </div>
            <div class="text-white">
                <ul class="flex space-x-4">
                    <li><a href="#" class="hover:text-gray-300">Profile</a></li>
                    <li><a href="#" class="hover:text-gray-300">Settings</a></li>
                    <li><a href="#" class="hover:text-gray-300">Logout</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header