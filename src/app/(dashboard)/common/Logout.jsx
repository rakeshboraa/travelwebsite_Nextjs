"use client"
import React from 'react'
import { getAuth, signOut } from 'firebase/auth'
import { app } from '../../../../config'
import { useRouter } from 'next/navigation'
const Logout = () => {
    const auth = getAuth(app)
    const router = useRouter();
    const handleLogout = async () => {
        try {
            await signOut(auth)
            router.push('/')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <button onClick={handleLogout}>Logout</button>
    )
}

export default Logout