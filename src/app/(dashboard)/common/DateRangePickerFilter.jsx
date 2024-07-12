// components/DateRangePickerFilter.js
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ListFilter } from 'lucide-react';

const DateRangePickerFilter = ({ onDateRangeChange }) => {
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [isVisible, setIsVisible] = useState(false);

    const handleSelect = (ranges) => {
        setState([ranges.selection]);
        onDateRangeChange(ranges.selection);
        setIsVisible(false); 
    };

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <>
            <DropdownMenu >
                <DropdownMenuTrigger asChild>
                    <Button onClick={toggleVisibility} variant="outline" size="sm" className="h-8 gap-1">
                        <ListFilter className="h-3.5 w-3.5" />
                        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                            Filter by date
                        </span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                   
                        <div className="date-range-picker-wrapper relative flex flex-col ">
                                <DateRangePicker
                                    className=' bg-white z-10 '
                                    ranges={state}
                                    onChange={handleSelect}
                                />
                        </div>
                </DropdownMenuContent>
            </DropdownMenu>

        </>
    );
};

export default DateRangePickerFilter;
