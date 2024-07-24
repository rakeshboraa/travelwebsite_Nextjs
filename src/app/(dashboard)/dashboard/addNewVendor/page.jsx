"use client"
import VendorForm from "../../components/VendorForm";

const page = () => {
  const handleSave = (formData) => {
    // Logic to save new vendor
    console.log("Saving new vendor:", formData);
  };

  return <VendorForm onSave={handleSave} />;
};


export default page
