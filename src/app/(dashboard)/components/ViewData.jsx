import React from 'react'
import Image from "next/image"
import {
  ChevronLeft,
  Pencil,
  Trash2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"

const ViewData = ({ listTitles, headerTitle, listData }) => {
  const data = listData[0] 
  return (
    <div className="mx-[30px] grid flex-1 mt-4 auto-rows-max gap-4">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" className="h-7 w-7">
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Back</span>
        </Button>
        <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
          {headerTitle}
        </h1>
        <div className="hidden items-center gap-2 md:ml-auto md:flex">
          <Button size="sm" className="flex gap-2">
            <Pencil className="h-4 w-4" />
            <span>Edit</span>
          </Button>
          <Button size="sm" className="flex gap-2">
            <Trash2 className="h-4 w-4" />
            <span>Delete</span>
          </Button>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
        <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
          <Card x-chunk="dashboard-07-chunk-0">
            <CardContent className="mt-6 p-10">
              <div className="grid gap-5">
                {listTitles.map((title, index) => (
                  <div className="flex items-center gap-1" key={index}>
                    <Label htmlFor={title} className="text-[16px] capitalize">{title}:</Label>
                    <h3 className="capitalize text-[14px]">{data[title]}</h3>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
          <Card className="overflow-hidden" x-chunk="dashboard-07-chunk-4">
            <CardHeader>
              <CardTitle>Images</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2">
                <div className="grid grid-cols-3 gap-2">
                  {data.images.map((image, index) => (
                    <button key={index}>
                      <Image
                        alt="Product image"
                        className="aspect-square w-full rounded-md object-cover"
                        height="84"
                        src={image}
                        width="84"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default ViewData
