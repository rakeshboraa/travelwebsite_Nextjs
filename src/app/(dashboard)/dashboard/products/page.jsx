'use client'
import Image from "next/image"
import Link from "next/link"
import { MoreHorizontal } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import React, { useEffect, useState } from 'react'
import FilterFirst from "../../common/FilterFirst"
import CommonFromHeader from "../../common/CommonFromHeader"
import MessageFrom from "../../common/MessageFrom"

const Loader = () => (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div className="loader"></div>
  </div>
)

const ConfirmationPopup = ({ isOpen, onClose, onConfirm, isLoading }) => {
  if (!isOpen) return null
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Confirm Deletion</h2>
        <p className="mb-6">Are you sure you want to delete this product?</p>
        <div className="flex justify-end space-x-4">
          <Button onClick={onClose} variant="secondary" disabled={isLoading}>Cancel</Button>
          <Button onClick={onConfirm} variant="destructive" disabled={isLoading}>
            {isLoading ? 'Deleting...' : 'Delete'}
          </Button>
        </div>
      </div>
    </div>
  )
}

const Page = () => {

  const [products, setProducts] = useState([])
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [messageType, setMessageType] = useState('');
  const [loading, setLoading] = useState(true)

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

  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      {loading && <Loader />}
      {successMessage && <MessageFrom message={successMessage} onClose={closeMessage} type={messageType} />}
      <div className="flex items-center">
        <FilterFirst />
      </div>
      <Card>
        <CommonFromHeader />
        <CardContent>
          {products.length === 0 && !loading ? (
            <div className="text-center p-4">No products are available.</div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="hidden w-[100px] sm:table-cell">
                    <span className="sr-only">Image</span>
                  </TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="hidden md:table-cell">Price</TableHead>
                  <TableHead className="hidden md:table-cell">Total Sales</TableHead>
                  <TableHead className="hidden md:table-cell">Created at</TableHead>
                  <TableHead>
                    <span className="sr-only">Actions</span>
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {products.map((product) => (
                  <TableRow key={product._id}>
                    <TableCell className="hidden sm:table-cell">
                      <Image
                        alt="Product image"
                        className="aspect-square rounded-full object-cover"
                        height="64"
                        src={product.thumbnail}
                        width="64"
                      />
                    </TableCell>
                    <TableCell className="font-medium">{product.title}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{product.status}</Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">{`${product.price}`}</TableCell>
                    <TableCell className="hidden md:table-cell">25</TableCell>
                    <TableCell className="hidden md:table-cell">2023-07-12 10:42 AM</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button aria-haspopup="true" size="icon" variant="ghost">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Toggle menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <Link href={`/dashboard/products/${product._id}`}>
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                          </Link>
                          <DropdownMenuItem onClick={() => handleDeleteClick(product)}>
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
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

export default Page
