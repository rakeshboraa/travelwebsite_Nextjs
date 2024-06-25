import React from 'react';
import { CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const ProductDetails = ({
    title,
    description,
    price,
    details,
    setTitle,
    setDescription,
    setPrice,
    setDetails,
}) => {
    return (
        <CardContent>
            <div className="grid gap-6">
                <div className="grid gap-3">
                    <Label htmlFor="title">Title</Label>
                    <Input
                        id="title"
                        type="text"
                        className="w-full"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="grid gap-3">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="min-h-32"
                    />
                </div>
                <div className="grid gap-3">
                    <Label htmlFor="price">Price</Label>
                    <Input
                        id="price"
                        type="number"
                        className="w-full"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div className="grid gap-3">
                    <Label htmlFor="details">Details</Label>
                    <Textarea
                        id="details"
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                        className="min-h-32"
                    />
                </div>
            </div>
            <div className="flex items-center justify-center gap-2 md:hidden mt-4">
                <Button variant="outline" size="sm" type="button">
                    Discard
                </Button>
                <Button size="sm" type="submit">Save Product</Button>
            </div>
        </CardContent>
    );
};

export default ProductDetails;
