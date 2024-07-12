import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from '@/components/ui/button'
const page = () => {
    return (
        <>
            <div className="flex  flex-col gap-4 w-full ">
                <div className="grid gap-4 lg:gap-8 ">
                    <div className="grid  items-start gap-4 lg:col-span-2 lg:gap-8">
                        <Card x-chunk="dashboard-07-chunk-0 ">
                            <CardHeader>
                                <h1 className="text-lg font-semibold md:text-2xl">Site Settings</h1>
                                <p>Brief description of the site settings.</p>
                            </CardHeader>
                            <CardContent className=" px-10 py-5 mb-4">
                                <div className="grid gap-6">
                                    <div className="grid gap-3">
                                        <Label htmlFor="title">Site Name</Label>
                                        <Input
                                            id="title"
                                            type="text"
                                            className="w-full"
                                        />
                                    </div>
                                    <div className="grid gap-3">
                                        <Label htmlFor="title">Site URL</Label>
                                        <Input
                                            id="title"
                                            type="text"
                                            className="w-full"
                                        />
                                    </div>
                                    <div className="grid gap-3">
                                        <Label htmlFor="title">Language</Label>
                                        <Select>
                                            <SelectTrigger
                                                id="category"
                                                aria-label="Select Language"
                                            >
                                                <SelectValue placeholder="Select Default Language" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="clothing">Clothing</SelectItem>
                                                <SelectItem value="electronics">
                                                    Electronics
                                                </SelectItem>
                                                <SelectItem value="accessories">
                                                    Accessories
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="grid gap-3">
                                        <Label htmlFor="title">Time Zone</Label>
                                        <Select>
                                            <SelectTrigger
                                                id="category"
                                                aria-label="Select timezone"
                                            >
                                                <SelectValue placeholder="Select Default Language" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="clothing">Clothing</SelectItem>
                                                <SelectItem value="electronics">
                                                    Electronics
                                                </SelectItem>
                                                <SelectItem value="accessories">
                                                    Accessories
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="grid gap-3">
                                        <Label htmlFor="title">Logo</Label>
                                        <Input
                                            id="title"
                                            type="file"
                                            className="w-full"
                                        />
                                    </div>
                                    <div className="grid gap-3">
                                        <Label htmlFor="title">Favicon</Label>
                                        <Input
                                            id="title"
                                            type="file"
                                            className="w-full"
                                        />
                                    </div>
                                    <div className='w-full mt-3'>
                                        <Button>
                                            Save Changes
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page
