"use client";
import React, { useState } from 'react';
import { Select, SelectContent, SelectTrigger, SelectValue } from '../ui/select';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { formUrlQuery } from '@/lib/utils';
import { useRouter, useSearchParams } from 'next/navigation';

const PriceFilter = ({ max, min }) => {
    const [sliderValue, setSliderValue] = useState([min, max]);
    const router = useRouter();
    const searchParams = useSearchParams();
    
    const handleRangeChange = (value) => {
        setSliderValue(value);
        // Only update the URL without changing the local state
        const newParams = new URLSearchParams(searchParams.toString());
        newParams.set('minPrice', value[0]);
        newParams.set('maxPrice', value[1]);
        const newUrl = formUrlQuery({
            params: newParams.toString(),
        });
        router.push(newUrl, { scroll: false });
    };

    return (
        <div className="w-[60%]">
            <Select>
                <SelectTrigger className="select-field">
                    <SelectValue placeholder="Filter By Price" />
                </SelectTrigger>
                <SelectContent>
                    <div className="p-4">
                        <div className="flex justify-between mb-2">
                            <span>{`$${sliderValue[0]}`}</span>
                            <span>{`$${sliderValue[1]}`}</span>
                        </div>
                        <Slider
                            className="custom-slider"
                            range
                            min={min}
                            max={max}
                            value={sliderValue}
                            onChange={handleRangeChange}
                        />
                        <div className="mt-2 text-center">{`Price range: $${sliderValue[0]} - $${sliderValue[1]}`}</div>
                    </div>
                </SelectContent>
            </Select>
        </div>
    );
};

export default PriceFilter;
