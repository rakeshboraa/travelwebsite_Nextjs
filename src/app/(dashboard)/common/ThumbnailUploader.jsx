import React from 'react';
import { Upload } from 'lucide-react';
import { Label } from '@/components/ui/label';

const ThumbnailUploader = ({
    thumbnailFile,
    handleThumbnailChange,
    thumbnailPreview,
    mode,
    productImage
}) => {
    return (
        <div className="bg-white flex gap-7 p-6 rounded-lg shadow-lg">
            <Label
                htmlFor="thumbnail"
                className="flex aspect-square w-[30%] h-[200px] items-center justify-center rounded-md border border-dashed cursor-pointer"
            >
                <Upload className="h-4 w-4 text-muted-foreground" />
                <span className="sr-only">Upload</span>
                <input
                    type="file"
                    id="thumbnail"
                    onChange={handleThumbnailChange}
                    className="hidden"
                />
            </Label>
            <div className="flex flex-wrap gap-4">
                {/* Display thumbnail preview when uploading a new image */}
                {thumbnailPreview && (
                    <img
                        src={thumbnailPreview}
                        alt="Uploaded Thumbnail"
                        className="w-full h-[200px] object-cover border border-gray-300 rounded-lg"
                    />
                )}
                {!thumbnailPreview && (
                   ""
                )}
            </div>
        </div>
    );
};

export default ThumbnailUploader;
