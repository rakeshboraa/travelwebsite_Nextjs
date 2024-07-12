"use client"

import { Card, CardContent } from "@/components/ui/card"
import React, { useEffect, useState } from 'react'
import CommonFromHeader from "../../common/CommonFromHeader"
import MessageFrom from "../../common/MessageFrom"
import ProductsButtons from "../../common/ProductsButtons"
import ConfirmationPopup from "../../common/ConfirmationPopup"
import TableFilter from "../../common/TableFilter"
import TableHeadDash from "../../common/TableHeadDash"
import TableBodyCommon from "../../common/TableBodyCommon"
import { Table } from "@/components/ui/table"
import { Input } from "@/components/ui/input"

const Loader = () => (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div className="loader"></div>
  </div>
)

const Page = () => {

  const [products, setProducts] = useState([])
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [messageType, setMessageType] = useState('');
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('all')
  const [searchQuery, setSearchQuery] = useState('');

  const fetchProducts = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/products')
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await response.json()
      setProducts(data)
    } catch (error) {
      console.error('Fetch error:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const handleDeleteClick = (product) => {
    setSelectedProduct(product)
    setIsPopupOpen(true)
  }

  const handleConfirmDelete = async () => {
    if (!selectedProduct) return
    setIsLoading(true)
    try {
      const response = await fetch(`/api/products/${selectedProduct._id}`, {
        method: 'DELETE',
      })
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      await fetchProducts()
      setIsPopupOpen(false)
      setSuccessMessage('Product deleted successfully.')
      setMessageType('success');
      setTimeout(() => setSuccessMessage(''), 3000)
    } catch (error) {
      console.error('Delete error:', error)
      setMessageType('error');
    } finally {
      setIsLoading(false)
    }
  }

  const handleClosePopup = () => {
    setIsPopupOpen(false)
  }

  const closeMessage = () => {
    setSuccessMessage('');
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    if (activeTab === 'all') {
      return matchesSearch;
    } else {
      return product.status === activeTab && matchesSearch;
    }
  });

  const TabFilterList = ['all', 'active', 'inactive', 'draft', 'archived']
  const TabHeaderList = ['Name', 'Status', 'Price', 'Total Sales', 'Created at']

  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      {loading && <Loader />}
      {successMessage && <MessageFrom message={successMessage} onClose={closeMessage} type={messageType} />}

      <div className="flex items-center">
        <TableFilter TabFilterList={TabFilterList} activeTab={activeTab} setActiveTab={setActiveTab} />
        <ProductsButtons title="Add Product" path='/addProducts' />
      </div>

        <Input
          type="text"
          placeholder="Search products"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="mb-4 p-2 border border-gray-300 rounded"
        />
      <Card>
        <CommonFromHeader title='Products' description='Manage Your Products' />
        <CardContent>
          {filteredProducts.length === 0 && !loading ? (
            <div className="text-center p-4">No products are available.</div>
          ) : (
            <Table>
              <TableHeadDash TabHeaderList={TabHeaderList} />
              <TableBodyCommon title='products' filteredProducts={filteredProducts} handleDeleteClick={handleDeleteClick} />
            </Table>
          )}
        </CardContent>
      </Card>
      <ConfirmationPopup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        onConfirm={handleConfirmDelete}
        isLoading={isLoading}
      />
      
    </main>
  )
}

export default Page;
