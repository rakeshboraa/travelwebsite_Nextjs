"use client"
import { Button } from "@/components/ui/button"
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { formUrlQuery } from "@/lib/utils"
import { useRouter, useSearchParams } from "next/navigation"

import React from 'react'

const PaginationCommon = ({ currentPage, totalPages }) => {
    const router = useRouter()
    const searchParams = useSearchParams()

    const onClick = (page) => {
        const newUrl = formUrlQuery({
            params: searchParams.toString(),
            key: 'page',
            value: page.toString(),
        })

        router.push(newUrl, { scroll: false })
    }

    const renderPaginationItems = () => {
        const items = []
        for (let i = 1; i <= totalPages; i++) {
            items.push(
                <PaginationItem key={i}>
                    <PaginationLink
                        href="#"
                        isActive={Number(currentPage) === i}
                        onClick={() => onClick(i)}
                    >
                        {i}
                    </PaginationLink>
                </PaginationItem>
            )
        }
        return items
    }

    return (
        <Pagination className="mt-3">
            {totalPages > 1 && (
                <PaginationContent>
                    <PaginationItem>
                        <Button
                            onClick={() => onClick(Number(currentPage) - 1)}
                            disabled={Number(currentPage) <= 1}
                        >
                            Previous
                        </Button>
                    </PaginationItem>
                    {/* {renderPaginationItems()}.... */}
                    <PaginationItem>
                        <Button
                            onClick={() => onClick(Number(currentPage) + 1)}
                            disabled={Number(currentPage) >= totalPages}
                        >
                            Next
                        </Button>
                    </PaginationItem>
                </PaginationContent>
            )}
        </Pagination>
    )
}

export default PaginationCommon
