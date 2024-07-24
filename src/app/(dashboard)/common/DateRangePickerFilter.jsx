"use client";
import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ListFilter } from 'lucide-react';
import { formUrlQuery } from '@/lib/utils';

const DateRangeFilter = () => {
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [isVisible, setIsVisible] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();
    const handleSelect = (ranges) => {
        const { selection } = ranges;
        const startDate = selection.startDate ? new Date (selection.startDate.setHours(23, 59, 59, 999)).toISOString().split('T')[0] : null;

        const endDate = selection.endDate ? new Date(selection.endDate.setHours(23, 59, 59, 999)).toISOString().split('T')[0] : null;

        setState([selection]);

        const newParams = new URLSearchParams(searchParams.toString());
        if (startDate) newParams.set('startDate', startDate);
        if (endDate) newParams.set('endDate', endDate);
        const newUrl = formUrlQuery({
            params: newParams.toString(),
        });
        router.push(newUrl, { scroll: false });
    };
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button onClick={toggleVisibility} variant="outline" size="sm" className="h-8 gap-1">
                    <ListFilter className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Filter by date
                    </span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <div className="date-range-picker-wrapper relative flex flex-col p-4">
                    <DateRangePicker
                        className="bg-white z-10"
                        ranges={state}
                        onChange={handleSelect}
                        showSelectionPreview={true}
                        moveRangeOnFirstSelection={false}
                    />

                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default DateRangeFilter;
