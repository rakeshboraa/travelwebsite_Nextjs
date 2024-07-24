"use client"
import React from 'react'
import ComboOfferForm from '@/app/(dashboard)/components/ComboOfferForm';
const page = () => {
    const handleSave = (formData) => {
        console.log("Updating combo offer:", formData);
    };

    return <ComboOfferForm initialData={"s"} onSave={handleSave} isEditMode />;
}

export default page