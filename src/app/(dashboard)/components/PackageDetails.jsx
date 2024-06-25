import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const PackageDetails = ({ index, pkg, handlePackageChange }) => {
    return (
        <div className="grid gap-3">
            <div className="grid gap-3">
                <Label htmlFor={`package-title-${index}`}>Title</Label>
                <Input
                    id={`package-title-${index}`}
                    type="text"
                    className="w-full"
                    value={pkg.title}
                    onChange={(e) => handlePackageChange(index, 'title', e.target.value)}
                />
            </div>
            <div className="grid gap-3">
                <Label htmlFor={`package-price-${index}`}>Price</Label>
                <Input
                    id={`package-price-${index}`}
                    type="number"
                    className="w-full"
                    value={pkg.price}
                    onChange={(e) => handlePackageChange(index, 'price', e.target.value)}
                />
            </div>
            <div className="grid gap-3">
                <Label htmlFor={`package-description-${index}`}>Description</Label>
                <Textarea
                    id={`package-description-${index}`}
                    value={pkg.description}
                    onChange={(e) => handlePackageChange(index, 'description', e.target.value)}
                    className="min-h-32"
                />
            </div>
        </div>
    );
};

export default PackageDetails;
