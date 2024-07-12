import Image from "next/image"
import {
  Check,
  ChevronLeft,
  TicketCheck,
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
          Add New Blog Post
        </h1>
        <div className="hidden items-center gap-2 md:ml-auto md:flex">
          <Button size="sm" className="items-center flex gap-2 ">
            <span>Save</span>
            <Check className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
        <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
          <Card x-chunk="dashboard-07-chunk-0">
            <CardContent className="mt-6">
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    type="text"
                    className="w-full"
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="Content">Content</Label>
                  <Textarea
                    id="Content"
                    className="min-h-32"
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="title">Author</Label>
                  <Input
                    id="title"
                    type="text"
                    className="w-full"
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="Author">Author</Label>
                  <Select>
                    <SelectTrigger
                      id="Author"
                      aria-label="Select Author"
                    >
                      <SelectValue placeholder="Select Author" />
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
                  <Label htmlFor="Category">Category</Label>
                  <Select>
                    <SelectTrigger
                      id="Category"
                      aria-label="Select Category"
                    >
                      <SelectValue placeholder="Select Category" />
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

                  <Label htmlFor="Category">Tags</Label>
                  <Select>
                    <SelectTrigger
                      id="Tags"
                      aria-label="Select Tags"
                    >
                      <SelectValue placeholder="Select Tags" />
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
                  <Label htmlFor="publicationdate">Publication Date</Label>
                  <Input
                    id="publicationdate"
                    type="text"
                    className="w-full"
                  />
                </div>
                <div className="grid gap-3">

                  <Label htmlFor="Status">Status</Label>
                  <Select>
                    <SelectTrigger
                      id="Status"
                      aria-label="Select Status"
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
                  <Label htmlFor="Meta Description">Meta Description</Label>
                  <Textarea
                    id="Meta Description"
                    className="min-h-32"
                  />
                </div>

                <div className="grid gap-3">
                  <Label htmlFor="Slug">Slug</Label>
                  <Input
                    id="Slug"
                    type="date"
                    className="w-full"
                  />
                </div>

              </div>
            </CardContent>
          </Card>

        </div>
        <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
          <Card
            className="overflow-hidden" x-chunk="dashboard-07-chunk-4"
          >
            <CardHeader>
              <CardTitle>Feature Image</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2">
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
    </div>

  )
}

export default page
