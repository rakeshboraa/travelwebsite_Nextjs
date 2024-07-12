import Image from "next/image"
import {
  ChevronLeft,
  Upload,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
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
import { Textarea } from "@/components/ui/textarea"

const page = () => {
  return (
    <div className="mx-[30px] grid flex-1 mt-4 auto-rows-max gap-4">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" className="h-7 w-7">
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Back</span>
        </Button>
        <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
          Add New User
        </h1>
        <div className="hidden items-center gap-2 md:ml-auto md:flex">
          <Button size="sm">Save</Button>
        </div>
      </div>
      <div className="grid gap-4  lg:gap-8">
        <div className="grid auto-rows-max  items-start gap-4 lg:col-span-2 lg:gap-8">
          <Card x-chunk="dashboard-07-chunk-0 ">
            <CardContent className="mt-6 p-10">
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="title">Name</Label>
                  <Input
                    id="title"
                    type="text"
                    className="w-full"
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="title">Email</Label>
                  <Input
                    id="title"
                    type="text"
                    className="w-full"
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="title">Password</Label>
                  <Input
                    id="title"
                    type="password"
                    className="w-full"
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="location">Role</Label>
                  <Select>
                    <SelectTrigger
                      id="category"
                      aria-label="Select Role "
                    >
                      <SelectValue placeholder="Select Role" />
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
                  <Label htmlFor="location">Status</Label>
                  <Select>
                    <SelectTrigger
                      id="category"
                      aria-label="Select Status "
                    >
                      <SelectValue placeholder="Select Status" />
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
                  <Label htmlFor="location">Language</Label>
                  <Select>
                    <SelectTrigger
                      id="category"
                      aria-label="Select Language "
                    >
                      <SelectValue placeholder="Select Language" />
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
                  <Label htmlFor="title">Wallet Balance</Label>
                  <Input
                    id="title"
                    type="Number"
                    className="w-full"
                  />
                </div>
                <div className="gap-3 flex">
                  <Label htmlFor="title">Registration Date :</Label>
                  <Label htmlFor="title">03/06/1999</Label>
                </div>
                <div className="gap-3 flex">
                  <Label htmlFor="title">Created By :</Label>
                  <Label htmlFor="title">john doe</Label>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>

  )
}

export default page
