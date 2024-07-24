"use client"
import BlogPostForm from '@/app/(dashboard)/components/BlogPostForm';
import React from 'react'

const page = () => {
    const handleSave = (formData) => {
        console.log("Updating blog post:", formData);
    };

    return <BlogPostForm initialData="{initialData}" onSave={handleSave} isEditMode />;
}

export default page