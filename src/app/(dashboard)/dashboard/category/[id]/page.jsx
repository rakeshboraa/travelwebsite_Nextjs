'use client'
import CategoryForm from "@/app/(dashboard)/components/CategoryForm";

const page = ({ initialData }) => {
  const handleSave = (formData) => {
    // Logic to update existing category
    console.log("Updating category:", formData);
  };

  return <CategoryForm initialData="" onSave={handleSave} isEditMode />;
};

export default page;
