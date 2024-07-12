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
                                <h1 className="text-lg font-semibold md:text-2xl">API Keys</h1>
                                <p>Brief description of the API Keys.</p>
                            </CardHeader>
                            <CardContent className="px-10 py-5 mb-4">
                                <div className="grid gap-6">
                                    <div className="grid gap-3">
                                        <Label htmlFor="title">API Key List</Label>
                                        <ul className='gap-2 flex flex-col list-disc pl-5'>
                                            <li className='text-[12px]'>AIzaSyDaGmWKa4JsXZ-HjGw7ISLn_3namBGewQe</li>
                                            <li className='text-[12px]'>AIzaSyDaGmWKa4JsXZ-HjGw7ISLn_3namBGewQe</li>
                                            <li className='text-[12px]'>AIzaSyDaGmWKa4JsXZ-HjGw7ISLn_3namBGewQe</li>
                                            <li className='text-[12px]'>AIzaSyDaGmWKa4JsXZ-HjGw7ISLn_3namBGewQe</li>
                                            <li className='text-[12px]'>AIzaSyDaGmWKa4JsXZ-HjGw7ISLn_3namBGewQe</li>
                                        </ul>
                                    </div>
                                    <div className="grid gap-3">
                                        <Label htmlFor="title">Add New API Key</Label>
                                        <Input
                                            id="title"
                                            type="text"
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
