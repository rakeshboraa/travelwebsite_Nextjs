import ViewData from '@/app/(dashboard)/components/ViewData'
import React from 'react'

const page = () => {
    const listTitles = ['name', 'company_name', 'email', 'phone', 'location', 'status', 'category', 'discount', 'createdby',]

    const listData = [{
        name: "updating",
        company_name: 'demo description',
        email: 'newdemo@gmail.com',
        phone: '8533806489',
        location: 'vaishali colony , uttarakhand',
        status: 'yes',
        category: 'parks',
        discount: 'demos',
        createdby: 'dsah',
    }]

    return (
        <div>
            <ViewData headerTitle="Sales Offer Details" path="vendors" listTitles={listTitles} listData={listData} />
        </div>
    )
}

export default page