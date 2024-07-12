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
          <div className="grid  items-start gap-4 lg:col-span-2 lg:gap-8">
            <Card x-chunk="dashboard-07-chunk-0 ">
              <CardHeader>
                <h1 className="text-lg font-semibold md:text-2xl">Notification Settings</h1>
                <p> Brief description of notification settings.</p>
              </CardHeader>
              <CardContent className=" px-10 py-5 mb-4">
                <div className="grid   gap-16">
                  <div className='gap-4 flex flex-col'>
                    <div className='grid w-[60%] gap-2 grid-cols-4'>
                      <div className="flex items-center gap-2 ">
                        <Checkbox />
                        <Label htmlFor="title">Email Notifications</Label>
                      </div>
                      <div className="flex items-center gap-2 ">
                        <Checkbox />
                        <Label htmlFor="title">SMS Notifications</Label>
                      </div>
                      <div className="flex items-center gap-2 ">
                        <Checkbox />
                        <Label htmlFor="title">Push Notifications</Label>
                      </div>
                     
                    </div>
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="title">Notification Frequency</Label>
                    <Select>
                      <SelectTrigger
                        id="category"
                        aria-label="Select Notification Frequency"
                      >
                        <SelectValue placeholder="Select  Notification Frequency" />
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
