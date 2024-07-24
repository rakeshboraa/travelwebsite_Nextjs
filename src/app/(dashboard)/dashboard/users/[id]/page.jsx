"use client"
import UserForm from '@/app/(dashboard)/components/UserForm';
import React from 'react'

const page = () => {
    const handleSave = (formData) => {
        // Logic to update the user
        console.log("Updating user:", formData);
      };
    
      return <UserForm initialData="{initialData}" onSave={handleSave} isEditMode />;
}

export default page