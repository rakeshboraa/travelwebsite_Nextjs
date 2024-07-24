'use client'
import CategoryForm from "../../components/CategoryForm";

const page = () => {
  const handleSave = (formData) => {
    // Logic to save new category
    console.log("Saving new category:", formData);
  };

  return <CategoryForm onSave={handleSave} />;
};

export default page;
