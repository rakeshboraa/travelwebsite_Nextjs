"use client"
import CategoryForm from '@/app/(dashboard)/components/CategoryForm';
import React, { useEffect, useState } from 'react';

const Page = ({ params }) => {
  const { id } = params;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/categories/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        const productData = await response.json();
        setProduct(productData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
      <div className="loader"></div>
    </div>;

  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <CategoryForm product={product} product_id={id} mode="edit" />
    </div>
  );
};

export default Page;
