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
import { Checkbox } from '@/components/ui/checkbox'
const page = () => {
  return (
    <>
      <div className="flex  flex-col gap-4 w-full ">
        <div className="grid gap-4 lg:gap-8 ">
          <div className="grid   items-start gap-4 lg:col-span-2 lg:gap-8">
            <Card x-chunk="dashboard-07-chunk-0  ">
              <CardHeader>
                <h1 className="text-lg font-semibold md:text-2xl ">User Roles and Permissions</h1>
                <p>Brief description of user roles and permissions</p>
              </CardHeader>
              <CardContent className="px-10 py-5 mb-4 ">
                <div className="grid  gap-20">
                  <div className='gap-4 flex flex-col'>
                    <Label htmlFor="title" className="text-[20px] font-semibold">Roles</Label>
                    <div className='grid w-[60%] gap-2 grid-cols-4'>
                      <div className="flex items-center gap-2 ">
                        <Checkbox />
                        <Label htmlFor="title">Admin</Label>
                      </div>
                      <div className="flex items-center gap-2 ">
                        <Checkbox />
                        <Label htmlFor="title">Manager</Label>
                      </div>
                      <div className="flex items-center gap-2 ">
                        <Checkbox />
                        <Label htmlFor="title">Vendor</Label>
                      </div>
                      <div className="flex items-center gap-2 ">
                        <Checkbox />
                        <Label htmlFor="title">Customer</Label>
                      </div>
                    </div>
                  </div>
                  <div className='gap-4 flex flex-col'>
                    <Label htmlFor="title" className="text-[20px] font-semibold">Permission Settings</Label>
                    <div className='grid w-[60%] gap-2 grid-cols-4'>
                      <div className="flex items-center gap-2 ">
                        <Checkbox />
                        <Label htmlFor="title">View</Label>
                      </div>
                      <div className="flex items-center gap-2 ">
                        <Checkbox />
                        <Label htmlFor="title">Edit</Label>
                      </div>
                      <div className="flex items-center gap-2 ">
                        <Checkbox />
                        <Label htmlFor="title">Delete</Label>
                      </div>
                      <div className="flex items-center gap-2 ">
                        <Checkbox />
                        <Label htmlFor="title">Add</Label>
                      </div>
                    </div>
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
