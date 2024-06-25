import React  from 'react';
import { Upload } from 'lucide-react';
import { Label } from '@/components/ui/label'; // Adjust import path based on your project structure

const ImageUploader = ({ handleFileChange, filePreviews }) => {
    return (
        <div className="bg-white flex gap-7 p-6 rounded-lg shadow-lg">
            <Label
                htmlFor="imageUpload"
                className="flex aspect-square w-[50%] items-center justify-center rounded-md border border-dashed cursor-pointer"
            >
                <Upload className="h-4 w-4 text-muted-foreground" />
                <span className="sr-only">Upload</span>
                <input
                    type="file"
                    multiple
                    id="imageUpload"
                    onChange={handleFileChange}
                    className="hidden"
                />
            </Label>
            <div className="flex flex-wrap gap-4">
                {filePreviews?.map((imageUrl, index) => (
                    <img
                        key={index}
                        src={imageUrl}
                        alt={`Uploaded ${index + 1}`}
                        className="w-28 h-28 object-cover border border-gray-300 rounded-lg"
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageUploader;