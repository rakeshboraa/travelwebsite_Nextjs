import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

const CommonFromHeader = ({ title, description }) => {
    return (
        <CardHeader>
            <CardTitle>Products</CardTitle>
            <CardDescription>
                Manage your products and view their sales performance.
            </CardDescription>
        </CardHeader>
    )
}

export default CommonFromHeader