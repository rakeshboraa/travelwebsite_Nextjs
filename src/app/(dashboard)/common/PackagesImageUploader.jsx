import React, {  useState } from 'react';
import { Upload } from 'lucide-react';
import { Label } from '@/components/ui/label';

const PackageImageUploader = ({ index, handlePackagefileChange, filePackagesPreviews  }) => {
    const [fileIndex, setFileIndex] = useState(0);

    const handleFileChange = (e) => {
        handlePackagefileChange(index)(e);
        setFileIndex(fileIndex + 1);
    };

    return (
        <div className="bg-white flex gap-7 p-6 rounded-lg shadow-lg">
            <Label
                htmlFor={`imageUpload2-${index}`}
                className="flex aspect-square w-[50%] items-center justify-center rounded-md border border-dashed cursor-pointer"
            >
                <Upload className="h-4 w-4 text-muted-foreground" />
                <span className="sr-only">Upload</span>
                <input
                    type="file"
                    multiple
                    id={`imageUpload2-${index}`}
                    onChange={handleFileChange}
                    className="hidden"
                />
            </Label>

            <div className="flex flex-wrap gap-4">
                {filePackagesPreviews[index] &&
                    filePackagesPreviews[index].map((imageUrl, fileIndex) => (
                        <img
                            key={fileIndex}
                            src={imageUrl}
                            alt={`Uploaded ${fileIndex + 1}`}
                            className="w-28 h-28 object-cover border border-gray-300 rounded-lg"
                        />
                    ))}
            </div>
        </div>
    );
};

export default PackageImageUploader;
