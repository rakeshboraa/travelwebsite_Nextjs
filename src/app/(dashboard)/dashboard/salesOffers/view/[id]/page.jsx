import ViewData from '@/app/(dashboard)/components/ViewData'
import React from 'react'

const page = () => {
  const listTitles = ['title', 'description', 'discount',  'start_date', 'end_date', 'included_activities','category', 'createdby',]
  const listData = [{
    title: "updating",
    description: 'demo description',
    discount: 'new demo location',
    start_date: '03/06/199',
    end_date: '27/9/2001',
    included_activities: 'yes',
    category: 'demos',
    createdby: 'dsah',
  }]
  return (
    <div>
      <ViewData headerTitle="Sales Offer Details" listTitles={listTitles} listData={listData} />
    </div>
  )
}

export default page