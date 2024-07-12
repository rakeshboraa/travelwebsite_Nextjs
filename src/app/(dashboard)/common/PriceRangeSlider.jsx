import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import { Range, getTrackBackground } from 'react-range';
import { DropdownMenu,  DropdownMenuContent, DropdownMenuLabel,  DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ListFilter } from 'lucide-react';

const PriceRangeSlider = ({ min, max, step, onChange }) => {
    const [values, setValues] = useState([min, max]);
    const [showSlider, setShowSlider] = useState(false);

    const handleChange = (values) => {
        setValues(values);
        onChange(values);
    };

    const toggleSlider = () => {
        setShowSlider(!showSlider);
    };

    return (
        <>
            <DropdownMenu >
                <DropdownMenuTrigger asChild>
                    <Button onClick={toggleSlider} variant="outline" size="sm" className="h-8 gap-1">
                        <ListFilter className="h-3.5 w-3.5" />
                        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                            Filter by Price
                        </span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  
                        <Range
                            values={values}
                            step={step}
                            min={min}
                            max={max}
                            onChange={handleChange}
                            renderTrack={({ props, children }) => (
                                <div
                                    {...props}
                                    className="w-[100%] h-2  bg-gray-300 rounded"
                                    style={{
                                        background: getTrackBackground({
                                            values,
                                            colors: ['#3b82f6', '#3b82f6', '#d1d5db'],
                                            min,
                                            max,
                                        }),
                                    }}
                                >
                                    {children}
                                </div>
                            )}
                            renderThumb={({ props }) => (
                                <div
                                    {...props}
                                    className="w-4 h-4 bg-blue-500 hover:bg-blue-500 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                                />
                            )}
                        />
                        <div className="flex justify-between w-[100%] mt-2">
                            <span>${values[0]}</span>
                            <span>${values[1]}</span>
                        </div>
                </DropdownMenuContent>
            </DropdownMenu>

        </>
    );
};

export default PriceRangeSlider;
