import { TableHead, TableHeader, TableRow } from '@/components/ui/table'
import React from 'react'

const TableHeadDash = ({TabHeaderList}) => {
    return (
        <TableHeader>
            <TableRow>
                {/* <TableHead className="hidden w-[100px] sm:table-cell">
                    <span className="sr-only">Image</span>
                </TableHead> */}
                {TabHeaderList.map((e) => (
                    <TableHead >{e}</TableHead>
                ))}
                <TableHead>
                    <span className="sr-only">Actions</span>
                </TableHead>
            </TableRow>
        </TableHeader>
    )
}

export default TableHeadDash