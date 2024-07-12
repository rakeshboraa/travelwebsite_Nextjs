"use client"

import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import TableFilter from '../../common/TableFilter';
import ProductsButtons from '../../common/ProductsButtons';
import CommonFromHeader from '../../common/CommonFromHeader';
import { Table } from '@/components/ui/table';
import TableHeadDash from '../../common/TableHeadDash';
import TableBodyCommon from '../../common/TableBodyCommon';
import ConfirmationPopup from '../../common/ConfirmationPopup';
import MessageFrom from '../../common/MessageFrom';

const Page = () => {
    const [products, setProducts] = useState([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [messageType, setMessageType] = useState('');
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('all');
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        products: [],
        totalPrice: 0,
        discount: 0,
        startDate: '',
        endDate: '',
        isActive: true,
    });

    const fetchProducts = async () => {
        try {
            setLoading(true);
            const response = await fetch('/api/products');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error('Fetch error:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleDeleteClick = (product) => {
        setSelectedProduct(product);
        setIsPopupOpen(true);
    };

    const handleConfirmDelete = async () => {
        if (!selectedProduct) return;
        setIsLoading(true);
        try {
            const response = await fetch(`/api/products/${selectedProduct._id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            await fetchProducts();
            setIsPopupOpen(false);
            setSuccessMessage('Product deleted successfully.');
            setMessageType('success');
            setTimeout(() => setSuccessMessage(''), 3000);
        } catch (error) {
            console.error('Delete error:', error);
            setMessageType('error');
        } finally {
            setIsLoading(false);
        }
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    const closeMessage = () => {
        setSuccessMessage('');
    };

    const filteredProducts = products.filter(product => {
        if (activeTab === 'all') {
            return product.title.toLowerCase().includes(searchQuery.toLowerCase());
        } else {
            return product.status === activeTab && product.title.toLowerCase().includes(searchQuery.toLowerCase());
        }
    });

    const TabFilterList = ['all', 'active', 'inactive', 'draft', 'archived'];
    const TabHeaderList = ['Name', 'Status', 'Price', 'Total Sales', 'Created at'];

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('/api/combo-offers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    products: selectedProducts, // Include selectedProducts here
                }),
            });

            if (response.ok) {
                // Handle success
                setSuccessMessage('Combo offer saved successfully!');
                setMessageType('success');
                setFormData({
                    name: '',
                    description: '',
                    products: [],
                    totalPrice: 0,
                    discount: 0,
                    startDate: '',
                    endDate: '',
                    isActive: true,
                });
                setSelectedProducts([]);
                setTimeout(() => setSuccessMessage(''), 3000);
            } else {
                // Handle errors
                console.error('Failed to save combo offer');
                setMessageType('error');
            }
        } catch (error) {
            console.error('Error saving combo offer:', error);
            setMessageType('error');
        }
    };

    const handleChange = (event) => {
        const { id, value, type, checked } = event.target;

        setFormData(prevData => ({
            ...prevData,
            [id]: type === 'checkbox' ? checked : value,
        }));
    };

    return (
        <div className="grid mx-[40px] flex-1 auto-rows-max gap-4">
            <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
                <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                    <Card x-chunk="dashboard-07-chunk-2">
                        <CardHeader>
                            <CardTitle>Add Product for Offers</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
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
                                                <TableBodyCommon
                                                    addCheckbox={true}
                                                    title='products'
                                                    filteredProducts={filteredProducts}
                                                    handleDeleteClick={handleDeleteClick}
                                                    selectedProducts={selectedProducts}
                                                    setSelectedProducts={setSelectedProducts} // Add this prop
                                                />
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
                        </CardContent>
                    </Card>
                </div>
                <Card x-chunk="dashboard-07-chunk-0">
                    <CardHeader>
                        <CardTitle>Combo Details</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-6">
                            {/* Name Input */}
                            <div className="grid gap-3">
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    id="name"
                                    type="text"
                                    className="w-full"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            {/* Description Textarea */}
                            <div className="grid gap-3">
                                <Label htmlFor="description">Description</Label>
                                <Textarea
                                    id="description"
                                    className="min-h-32"
                                    value={formData.description}
                                    onChange={handleChange}
                                />
                            </div>
                            {/* Total Cost Input */}
                            <div className="grid gap-3">
                                <Label htmlFor="totalPrice">Total Cost</Label>
                                <Input
                                    id="totalPrice"
                                    type="number"
                                    className="w-full"
                                    value={formData.totalPrice}
                                    onChange={handleChange}
                                />
                            </div>
                            {/* Discount Input */}
                            <div className="grid gap-3">
                                <Label htmlFor="discount">Discount</Label>
                                <Input
                                    id="discount"
                                    type="number"
                                    className="w-full"
                                    value={formData.discount}
                                    onChange={handleChange}
                                />
                            </div>
                            {/* Start Date and End Date Inputs */}
                            <div className="gap-6 flex">
                                <div className="grid gap-3">
                                    <Label htmlFor="startDate">Start Date</Label>
                                    <Input
                                        id="startDate"
                                        type="date"
                                        className="w-full"
                                        value={formData.startDate}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="endDate">End Date</Label>
                                    <Input
                                        id="endDate"
                                        type="date"
                                        className="w-full"
                                        value={formData.endDate}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            {/* Active Checkbox */}
                            <div className="grid gap-3">
                                <div className="items-top flex space-x-2">
                                    <Checkbox
                                        id="isActive"
                                        checked={formData.isActive}
                                        onChange={handleChange}
                                    />
                                    <div className="grid gap-1.5 leading-none">
                                        <label
                                            htmlFor="isActive"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            Active
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Buttons */}
            <div className="flex items-center justify-center gap-2">
                <Button variant="outline" size="sm">
                    Discard
                </Button>
                <Button size="sm" onClick={handleSubmit}>
                    Save Combo Offer
                </Button>
            </div>
        </div>
    );
};

export default Page;
