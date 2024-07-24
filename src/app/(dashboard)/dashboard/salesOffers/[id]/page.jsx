"use client"
import SalesOfferForm from '@/app/(dashboard)/components/SalesOfferForm';
import React from 'react'

const page = () => {
    const handleSave = (formData) => {
        console.log("Updating sales offer:", formData);
    };

    return <SalesOfferForm initialData={"initialData"} onSave={handleSave} isEditMode />;
}

export default page