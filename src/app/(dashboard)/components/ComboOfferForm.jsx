'use client'
import Image from "next/image";
import { ChevronLeft, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const ComboOfferForm = ({ initialData = {}, onSave, isEditMode = false }) => {
    const [formData, setFormData] = useState({
        title: initialData.title || "",
        description: initialData.description || "",
        activity: initialData.activity || "",
        category: initialData.category || "",
        price: initialData.price || "",
        availability: initialData.availability || "",
        inventory: initialData.inventory || "",
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));
    };

    const handleSelectChange = (id, value) => {
        setFormData((prevData) => ({ ...prevData, [id]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="mx-[30px] grid flex-1 mt-4 auto-rows-max gap-4">
            <div className="flex items-center gap-4">
                <Button variant="outline" size="icon" className="h-7 w-7">
                    <ChevronLeft className="h-4 w-4" />
                    <span className="sr-only">Back</span>
                </Button>
                <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                    {isEditMode ? "Edit Combo Offer" : "Add Combo Offer"}
                </h1>
                <div className="hidden items-center gap-2 md:ml-auto md:flex">
                    <Button type="submit" size="sm">Save</Button>
                </div>
            </div>
            <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
                <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                    <Card>
                        <CardContent className="mt-6">
                            <div className="grid gap-6">
                                <div className="grid gap-3">
                                    <Label htmlFor="title">Title</Label>
                                    <Input
                                        id="title"
                                        type="text"
                                        value={formData.title}
                                        onChange={handleChange}
                                        className="w-full"
                                    />
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="description">Description</Label>
                                    <Textarea
                                        id="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        className="min-h-32"
                                    />
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="activity">Included Activities</Label>
                                    <Select
                                        value={formData.activity}
                                        onValueChange={(value) => handleSelectChange("activity", value)}
                                    >
                                        <SelectTrigger id="activity" aria-label="Select Activity">
                                            <SelectValue placeholder="Select Activity" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="clothing">Clothing</SelectItem>
                                            <SelectItem value="electronics">Electronics</SelectItem>
                                            <SelectItem value="accessories">Accessories</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="category">Category</Label>
                                    <Select
                                        value={formData.category}
                                        onValueChange={(value) => handleSelectChange("category", value)}
                                    >
                                        <SelectTrigger id="category" aria-label="Select category">
                                            <SelectValue placeholder="Select category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="clothing">Clothing</SelectItem>
                                            <SelectItem value="electronics">Electronics</SelectItem>
                                            <SelectItem value="accessories">Accessories</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="price">Price</Label>
                                    <Input
                                        id="price"
                                        type="text"
                                        value={formData.price}
                                        onChange={handleChange}
                                        className="w-full"
                                    />
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="availability">Availability</Label>
                                    <Input
                                        id="availability"
                                        type="date"
                                        value={formData.availability}
                                        onChange={handleChange}
                                        className="w-full"
                                    />
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="inventory">Inventory (optional)</Label>
                                    <Input
                                        id="inventory"
                                        type="text"
                                        value={formData.inventory}
                                        onChange={handleChange}
                                        className="w-full"
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                    <Card className="overflow-hidden">
                        <CardHeader>
                            <CardTitle>Images Upload</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-2">
                                <Image
                                    alt="Product image"
                                    className="aspect-square w-full rounded-md object-cover"
                                    height="300"
                                    src={initialData.mainImage || "/placeholder.svg"}
                                    width="300"
                                />
                                <div className="grid grid-cols-3 gap-2">
                                    <button>
                                        <Image
                                            alt="Product image"
                                            className="aspect-square w-full rounded-md object-cover"
                                            height="84"
                                            src="/placeholder.svg"
                                            width="84"
                                        />
                                    </button>
                                    <button>
                                        <Image
                                            alt="Product image"
                                            className="aspect-square w-full rounded-md object-cover"
                                            height="84"
                                            src="/placeholder.svg"
                                            width="84"
                                        />
                                    </button>
                                    <button className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed">
                                        <Upload className="h-4 w-4 text-muted-foreground" />
                                        <span className="sr-only">Upload</span>
                                    </button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </form>
    );
};

export default ComboOfferForm;
