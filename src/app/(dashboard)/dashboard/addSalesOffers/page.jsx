"use client"
import SalesOfferForm from "../../components/SalesOfferForm";

const page = () => {
  const handleSave = (formData) => {
    console.log("Saving new sales offer:", formData);
  };

  return <SalesOfferForm onSave={handleSave} />;
}

export default page
