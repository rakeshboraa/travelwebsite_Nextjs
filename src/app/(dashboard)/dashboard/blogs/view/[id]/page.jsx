import ViewData from '@/app/(dashboard)/components/ViewData'
import React from 'react'

const page = () => {
    const listTitles = ['title', 'author', 'category', 'tags', 'content', 'publicationdate', 'status', 'image', 'metadescription','slug']

    const listData = [{
        title: "updating",
        author: 'demo description',
        category: 'new demo location',
        tags: 'demo category',
        content: '324',
        publicationdate: 'yes',
        status: 'demos',
        image: 'dsah',
        metadescription: 'ad',
        slug: 'ad',
    }]

    return (
        <div>
            <ViewData headerTitle="Blogs Details" path='/blogs' listTitles={listTitles} listData={listData} />
        </div>
    )
}

export default page