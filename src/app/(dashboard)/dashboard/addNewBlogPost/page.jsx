"use client"
import React from 'react'
import BlogPostForm from '../../components/BlogPostForm';

const page = () => {
  const handleSave = (formData) => {
    // Logic to save new blog post
    console.log("Saving new blog post:", formData);
  };

  return <BlogPostForm onSave={handleSave} />;
}

export default page