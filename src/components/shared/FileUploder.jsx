import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import axios from 'axios';
import Caraouselmage from './Caraouselmage';

const FileUploader = ({ imageUrls, onFieldChange, setFiles }) => {
  const [loading, setLoading] = useState(false);

  const handleFileChange = async (event) => {
    const files = Array.from(event.target.files);
    setFiles(files);
    setLoading(true);
    try {
      const uploadedUrls = await Promise.all(
        files.map(async (file) => {
          const formData = new FormData();
          formData.append('file', file);
          formData.append('upload_preset', 'phzdvggz');
          const response = await axios.post('https://api.cloudinary.com/v1_1/dytpruv1e/image/upload', formData); // Replace with your Cloudinary cloud name
          return response.data.secure_url;
        })
      );
      onFieldChange(uploadedUrls);
    } catch (error) {
      console.error("Error uploading images:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-auto  bg-dark-3 flex flex-col items-center justify-center overflow-hidden rounded-xl">
      <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
        <Input
          type="file"
          multiple
          onChange={handleFileChange}
          className="hidden"
          id="file-input"
        />
        {loading ? (
          <div className="flex  h-72  py-7 items-center justify-center w-full ">
            <div className="loader"></div>
          </div>
        ) : imageUrls?.length > 0 ? (
          <div className="flex h-auto flex-wrap justify-center">
            {imageUrls.map((url, index) => (
              <Image
                key={index}
                src={url}
                alt={`image-${index}`}
                width={200}
                height={200}
                className="m-2 object-cover"
              />
            ))}
          </div>
        ) : (
          <div className="flex  h-72 justify-center flex-col items-center text-grey-500">
            <Image src="/assets/icons/upload.svg" width={77} height={77} alt="file upload" />
            <h3 className="mt-2 mb-2">Drag photos here</h3>
            <p className="mb-4">SVG, PNG, JPG</p>
            <Button
              type="button"
              className="rounded-full"
              onClick={() => document.getElementById('file-input').click()}
            >
              Select from computer
            </Button>
          </div>
        )}
      </label>
    </div>
  );
};

export default FileUploader;
