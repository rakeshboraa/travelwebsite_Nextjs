'use client'
import React from 'react'
import ComboOfferForm from '../../components/ComboOfferForm'

const page = () => {
  const handleSave = (formData) => {
    console.log("Saving new combo offer:", formData);
  };

  return <ComboOfferForm onSave={handleSave} />;
}

export default page