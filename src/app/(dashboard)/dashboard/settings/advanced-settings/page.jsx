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
import { Textarea } from '@/components/ui/textarea'
const page = () => {
  return (
    <>
      <div className="flex  flex-col gap-4 w-full ">
        <div className="grid gap-4 lg:gap-8 ">
          <div className="grid  items-start gap-4 lg:col-span-2 lg:gap-8">
            <Card x-chunk="dashboard-07-chunk-0 ">
              <CardHeader>
                <h1 className="text-lg font-semibold md:text-2xl">Advanced Settings</h1>
                <p> Brief description of Advanced settings.</p>
              </CardHeader>
              <CardContent className=" px-10 py-5 mb-4">
                <div className="grid   gap-16">
                  <div className='gap-4 flex flex-col'>
                    <div className='grid w-[60%] gap-2 grid-cols-4'>
                      <div className="flex items-center gap-2 ">
                        <Checkbox />
                        <Label htmlFor="title">Debug Mode</Label>
                      </div>
                      <div className="flex items-center gap-2 ">
                        <Checkbox />
                        <Label htmlFor="title">Maintenance Mode</Label>
                      </div>

                    </div>
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="Custom CSS">Custom CSS</Label>
                    <Textarea
                      id="Custom CSS"
                      className="min-h-32"
                    />
                  </div>
                  <div className="grid gap-3">
                  <Label htmlFor="Custom JavaScript">Custom JavaScript</Label>
                  <Textarea
                    id="Custom JavaScript"
                    className="min-h-32"
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
