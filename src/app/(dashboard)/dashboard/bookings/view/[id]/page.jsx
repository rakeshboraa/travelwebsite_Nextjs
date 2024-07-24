import ViewData from '@/app/(dashboard)/components/ViewData'
import React from 'react'

const page = () => {
    const listTitles = ['user', 'activity', 'date', 'categories', 'totalprice', 'status', 'notes', 'createdby',]
    const listData = [{
        user: "updating",
        activity: 'demo description',
        date: 'new demo location',
        categories: 'demo category',
        totalprice: '324',
        status: 'yes',
        notes: 'demos',
        createdby: 'dsah',
        createdby: 'ad'
    }]
    return (
        <div>
            <ViewData headerTitle="Booking Details" path='/bookings' listTitles={listTitles} listData={listData} />
        </div>
    )
}

export default page