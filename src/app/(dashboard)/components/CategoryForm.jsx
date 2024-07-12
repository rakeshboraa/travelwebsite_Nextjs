"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import ThumbnailUploader from "../common/ThumbnailUploader"
import MessageFrom from "../common/MessageFrom"
import FormHeader from '../common/FormHeader'

const CategoryForm = ({ product, mode, product_id }) => {
    const router = useRouter();
    const isEditMode = mode === 'edit';
    const [line1, setLine1] = useState(isEditMode ? product.title : '');
    const [thumbnailFile, setThumbnailFile] = useState(null);
    const [thumbnailPreview, setThumbnailPreview] = useState(isEditMode ? product.image : null);
    const [showMessage, setShowMessage] = useState(false);
    const [messageText, setMessageText] = useState('');
    const [messageType, setMessageType] = useState('');
    const [loading, setLoading] = useState(false);
    const [thumbnailPic, setThumbnailPic] = useState(isEditMode ? product.image : null);
  
    const handleThumbnailChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setThumbnailFile(file);
        setThumbnailPreview(URL.createObjectURL(file));
      }
    };
  
    useEffect(() => {
      if (!thumbnailFile) return;
      const uploadThumbnail = async () => {
        const data = new FormData();
        data.append('file', thumbnailFile);
        data.append('upload_preset', 'pzynf5m0');
        data.append('cloud_name', 'dvjkkdby1');
        try {
          const res = await fetch('https://api.cloudinary.com/v1_1/dvjkkdby1/image/upload', {
            method: 'POST',
            body: data,
          });
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          const responseData = await res.json();
          setThumbnailPic(responseData.url);
        } catch (err) {
          console.error('Error uploading to Cloudinary:', err);
        }
      };
      uploadThumbnail();
    }, [thumbnailFile]);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      const product = {
        title:  line1 ,
        image: thumbnailPic,
      };
  
      try {
        const response = await fetch(isEditMode ? `/api/categories/${product_id}` : '/api/categories', {
          method: isEditMode ? 'PUT' : 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(product),
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        setMessageText(isEditMode ? 'Product updated successfully!' : 'Product added successfully!');
        setMessageType('success');
        setShowMessage(true);
        setTimeout(() => {
          router.push('/dashboard/category');
        }, 1000);
      } catch (error) {
        setMessageText(isEditMode ? 'Failed to update product. Please try again.' : 'Failed to add product. Please try again.');
        setMessageType('error');
        setShowMessage(true);
      } finally {
        setLoading(false);
      }
    };
  
    const closeMessage = () => {
      setShowMessage(false);
      setMessageText('');
    };
  
    return (
      <div className="mx-[100px] grid flex-1 gap-4">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
            <div className="loader"></div>
          </div>
        )}
        {showMessage && <MessageFrom message={messageText} onClose={closeMessage} type={messageType} />}
        <FormHeader title='Add Categories' back={() => router.back()} handleButton={handleSubmit} />
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
            <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
              <Card>
                <ThumbnailUploader
                  thumbnailFile={thumbnailFile}
                  handleThumbnailChange={handleThumbnailChange}
                  thumbnailPreview={thumbnailPreview}
                  productImage={product?.thumbnail}
                  mode={mode}
                />
              </Card>
              <Card>
                <CardContent>
                  <div className="grid gap-6 sm:grid-cols-3 mt-4">
                    <div className="grid gap-3">
                      <Label htmlFor="line1">Add Category</Label>
                      <Input id="line1" type="text" className="w-full" value={line1} onChange={(e) => setLine1(e.target.value)} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </div>
    )
}

export default CategoryForm