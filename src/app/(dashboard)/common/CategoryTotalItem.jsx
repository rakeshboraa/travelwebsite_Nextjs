"use client"
import { TableCell } from '@/components/ui/table'
import React, { useEffect, useState } from 'react'

const CategoryTotalItem = ({productTotal}) => {

    const [categoryCount, setcategoryCount] = useState('')
    
    const fetchCategoryCount = async (categoryId) => {
        try {
            const response = await fetch(`/api/products?category=${categoryId}`)
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            const data = await response.json()
            setcategoryCount(data)
        } catch (error) {
            console.error('Fetch error:', error)
        } finally {
        }
    }
   
    useEffect(() => {
        fetchCategoryCount(productTotal)
    }, [])

    return (
        <TableCell className="font-medium">{categoryCount.count || 0}</TableCell>
    )
}

export default CategoryTotalItem


