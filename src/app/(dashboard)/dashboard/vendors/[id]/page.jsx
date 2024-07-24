"use client"
import VendorForm from '@/app/(dashboard)/components/VendorForm';
import React from 'react'

const page = () => {
  const handleSave = (formData) => {
    console.log("Updating vendor:", formData);
  };

  return <VendorForm initialData={"initialData"} onSave={handleSave} isEditMode />;
}

export default page