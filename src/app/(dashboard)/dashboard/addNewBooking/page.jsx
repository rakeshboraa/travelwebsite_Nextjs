'use client'
import React from 'react'
import BookingForm from '../../components/BookingForm';

const page = () => {
    const handleSave = (formData) => {
        // Logic to save new booking
        console.log("Saving new booking:", formData);
    };

    return <BookingForm onSave={handleSave} />;
}

export default page