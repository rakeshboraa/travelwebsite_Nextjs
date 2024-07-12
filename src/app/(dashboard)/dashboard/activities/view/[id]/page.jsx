import ViewData from '@/app/(dashboard)/components/ViewData'
import React from 'react'

const page = () => {
  const listTitles = ['title', 'description', 'location', 'categories', 'price', 'availability', 'inventory', 'createdby',]
  const listData = [{
    title: "updating",
    description: 'demo description',
    location: 'new demo location',
    categories: 'demo category',
    price: '324',
    availability: 'yes',
    inventory: 'demos',
    createdby: 'dsah',
    images:['https://res.cloudinary.com/dvjkkdby1/image/upload/v1719502991/xyn0e49dnscl7mf5m8eb.png','https://res.cloudinary.com/dvjkkdby1/image/upload/v1719502991/xyn0e49dnscl7mf5m8eb.png','https://res.cloudinary.com/dvjkkdby1/image/upload/v1719502991/xyn0e49dnscl7mf5m8eb.png']
  }]
  return (
    <div>
      <ViewData headerTitle="Activity Details" listTitles={listTitles} listData={listData} />
    </div>
  )
}

export default page