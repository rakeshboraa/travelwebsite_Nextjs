import ViewData from '@/app/(dashboard)/components/ViewData'
import React from 'react'

const page = () => {
    const listTitles = ['name', 'email', 'password', 'role', 'status', 'language', 'walletbalance','registrationdate', 'createdby',]
    const listData = [{
        name: "updating",
        email: 'demo description',
        password: 'new demo location',
        role: 'demo category',
        status: '324',
        language: 'yes',
        walletbalance: 'demos',
        registrationdate: 'dsah',
        createdby: 'ad'
    }]
    return (
        <div>
            <ViewData headerTitle="User Details" path='/users' listTitles={listTitles} listData={listData} />
        </div>
    )
}

export default page