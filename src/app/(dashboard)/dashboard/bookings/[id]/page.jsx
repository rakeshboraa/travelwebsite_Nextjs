"use client"
import BookingForm from '@/app/(dashboard)/components/BookingForm';
import React from 'react'

const page = () => {
    const handleSave = (formData) => {
        // Logic to update the booking
        console.log("Updating booking:", formData);
    };

    return <BookingForm initialData="initialData" onSave={handleSave} isEditMode />;
}

export default page