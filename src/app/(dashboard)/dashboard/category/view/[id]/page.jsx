import ViewData from '@/app/(dashboard)/components/ViewData'
import React from 'react'

const page = () => {
    const listTitles = ['name', 'description', 'slug',]
    const listData = [{
        name: "updating",
        description: 'demo description',
        slug: 'new demo location',
    }]
    return (
        <div>
            <ViewData headerTitle="Category Details" path='/category' listTitles={listTitles} listData={listData} />
        </div>
    )
}

export default page