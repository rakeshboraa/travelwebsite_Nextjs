import { TableHead, TableHeader, TableRow } from '@/components/ui/table'
import React from 'react'

const TableHeadDash = ({ TabHeaderList }) => {
    return (
        <TableHeader>
            <TableRow>
                {TabHeaderList.map((e,index) => (
                    <TableHead key={index}>{e}</TableHead>
                ))}
                <TableHead>
                    <span className="sr-only">Actions</span>
                </TableHead>
            </TableRow>
        </TableHeader>
    )
}

export default TableHeadDash