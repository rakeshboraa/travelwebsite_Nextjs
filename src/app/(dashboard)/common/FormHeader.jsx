import { Button } from '@/components/ui/button'
import { ChevronLeft } from 'lucide-react'
import React from 'react'

const FormHeader = ({ handleButton, mode, handleDis, back,title }) => {
    return (
        <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" className="h-7 w-7" onClick={back}>
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Back</span>
            </Button>
            <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                {title}
            </h1>
            <div className="hidden items-center gap-2 md:ml-auto md:flex">
                <Button size="sm" onClick={handleDis}>
                    Discard
                </Button>
                <Button size="sm" onClick={handleButton}>{mode === "edit" ? 'Update Product' : 'Save Product'}</Button>
            </div>
        </div>
    )
}

export default FormHeader