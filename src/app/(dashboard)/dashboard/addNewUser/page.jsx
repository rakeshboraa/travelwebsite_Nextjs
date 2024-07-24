"use client"
import React from 'react'
import UserForm from '../../components/UserForm';

const page = () => {
  const handleSave = (formData) => {
    // Logic to save new user
    console.log("Saving new user:", formData);
  };

  return <UserForm onSave={handleSave} />;
}

export default page