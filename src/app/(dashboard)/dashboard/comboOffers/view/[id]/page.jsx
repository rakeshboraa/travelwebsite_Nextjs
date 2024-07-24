import ViewData from '@/app/(dashboard)/components/ViewData'
import React from 'react'

const page = () => {
  const listTitles = ['title', 'description', 'Included_Activities', 'Category', 'price', 'availability', 'inventory', 'createdby',]
  const listData = [{
    title: "updating",
    description: 'demo description',
    Included_Activities: 'new demo location',
    Category: 'demo category',
    price: '324',
    availability: 'yes',
    inventory: 'demos',
    createdby: 'fannatic',
    images:['https://res.cloudinary.com/dvjkkdby1/image/upload/v1719502991/xyn0e49dnscl7mf5m8eb.png','https://res.cloudinary.com/dvjkkdby1/image/upload/v1719502991/xyn0e49dnscl7mf5m8eb.png','https://res.cloudinary.com/dvjkkdby1/image/upload/v1719502991/xyn0e49dnscl7mf5m8eb.png']
  }]
  return (
    <div>
      <ViewData headerTitle="Combo Offer Details" listTitles={listTitles} listData={listData} />
    </div>
  )
}

export default page