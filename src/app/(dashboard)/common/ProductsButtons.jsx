import { Button } from "@/components/ui/button"
import { File, PlusCircle } from "lucide-react"
import Link from "next/link"
import CommonFromHeader from "./CommonFromHeader"

const ProductsButtons = ({ title, path, ButtonTitle }) => {
    return (
        <div className="ml-auto flex justify-between w-full items-center gap-2">
            <CommonFromHeader title={title} />
            <Button size="sm" className="h-8 gap-1">
                <PlusCircle className="h-3.5 w-3.5" />
                <Link href={`/dashboard/${path}`} className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    {ButtonTitle}
                </Link>
            </Button>
        </div>
    )
}

export default ProductsButtons