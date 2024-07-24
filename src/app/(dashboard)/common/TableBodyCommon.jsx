import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { TableBody, TableCell, TableRow } from '@/components/ui/table';
import { MoreHorizontal } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const tableConfig = {
    comboOffers: [
        { key: 'image', type: 'image' },
        { key: 'title', type: 'text' },
        { key: 'includedActivities', type: 'text' },
        { key: 'price', type: 'text' },
        { key: 'availability', type: 'text' },
        { key: 'inventory', type: 'text' }
    ],
    activities: [
        { key: 'image', type: 'image' },
        { key: 'title', type: 'text' },
        { key: 'location', type: 'text' },
        { key: 'price', type: 'text' },
        { key: 'availability', type: 'text' },
        { key: 'inventory', type: 'text' }
    ],
    vendors: [
        { key: 'name', type: 'text' },
        { key: 'company', type: 'text' },
        { key: 'email', type: 'text' },
        { key: 'phone', type: 'text' },
        { key: 'location', type: 'text' },
        { key: 'status', type: 'text' }
    ],
    salesOffers: [
        { key: 'title', type: 'text' },
        { key: 'description', type: 'text' },
        { key: 'discount', type: 'text' },
        { key: 'validDates', type: 'text' },
        { key: 'includedActivities', type: 'text' }
    ],
    bookings: [
        { key: 'bookingId', type: 'text' },
        { key: 'user', type: 'text' },
        { key: 'activity', type: 'text' },
        { key: 'date', type: 'text' },
        { key: 'participants', type: 'text' },
        { key: 'price', type: 'text' },
        { key: 'status', type: 'text' }
    ],
    users: [
        { key: 'name', type: 'text' },
        { key: 'email', type: 'text' },
        { key: 'role', type: 'text' },
        { key: 'status', type: 'text' },
        { key: 'registrationDate', type: 'text' }
    ],
    wallet: [
        { key: 'transactionID', type: 'text' },
        { key: 'user', type: 'text' },
        { key: 'type', type: 'text' },
        { key: 'amount', type: 'text' },
        { key: 'description', type: 'text' },
        { key: 'Date', type: 'text' }
    ],
    blogs: [
        { key: 'title', type: 'text' },
        { key: 'author', type: 'text' },
        { key: 'category', type: 'text' },
        { key: 'tags', type: 'text' },
        { key: 'publication_date', type: 'text' },
        { key: 'status', type: 'text' }
    ],
    category: [
        { key: 'name', type: 'text' },
        { key: 'description', type: 'text' },
        { key: 'slug', type: 'text' },
    ]
};
const TableBodyCommon = ({ filteredProducts, tableTitle, onDeleteClick }) => {
    const renderCellContent = (product, column) => {
        if (column.type === 'image') {
            return (
                <Image
                    alt="Product image"
                    className="aspect-square rounded-full object-cover"
                    height="64"
                    src={product[column.key]}
                    width="64"
                />
            );
        } else {
            return product[column.key];
        }
    };

    return (
        <>
            <TableBody className="h-[40vh]">
                {filteredProducts?.map((product) => (
                    <TableRow key={`${product._id}+1`} className="capitalize ">
                        {tableConfig[tableTitle]?.map((column) => (
                            <TableCell key={column.key} className="hidden  md:table-cell capitalize">
                                <Link href={`/dashboard/${tableTitle}/view/${product._id}`}>
                                    {renderCellContent(product, column)}
                                </Link>
                            </TableCell>
                        ))}
                        <TableCell>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button aria-haspopup="true" size="icon" variant="ghost">
                                        <MoreHorizontal className="h-4 w-4" />
                                        <span className="sr-only">Toggle menu</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                    <Link href={`/dashboard/${tableTitle}/${product._id}/update`}>
                                        <DropdownMenuItem>Edit</DropdownMenuItem>
                                    </Link>
                                    <DropdownMenuItem className="cursor-pointer" onClick={() => onDeleteClick(product._id)}>Delete</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>

        </>
    );
};

export default TableBodyCommon;
