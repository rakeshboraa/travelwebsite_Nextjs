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
                    Add New Category
                </h1>
            </div>
            <div className="grid gap-4  lg:gap-8">
                <div className="grid auto-rows-max  items-start gap-4 lg:col-span-2 lg:gap-8">
                    <Card x-chunk="dashboard-07-chunk-0 ">
                        <CardContent className="mt-6 p-10">
                            <div className="grid gap-6">
                                <div className="grid gap-3">
                                    <Label htmlFor="Name">Name</Label>
                                    <Input
                                        id="Name"
                                        type="number"
                                        className="w-full"
                                    />
                                </div>


                                <div className="grid gap-3">
                                    <Label htmlFor="description">Description</Label>
                                    <Textarea
                                        id="description"
                                        className="min-h-32"
                                    />
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="Slug">Slug</Label>
                                    <Input
                                        id="Slug"
                                        type="text"
                                        className="w-full"
                                    />
                                </div>
                                <div className="">
                                    <Button size="sm">Save Changes</Button>
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
