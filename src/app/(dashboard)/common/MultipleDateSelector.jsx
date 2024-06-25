import React from 'react';
import { CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import DatePicker from 'react-multi-date-picker';

const MultipleDateSelector = ({ index, dates, handlePackageChange }) => {
    
    return (
        <CardContent>
            <div className="grid gap-3 mt-3">
                <Label htmlFor={`package-dates-${index}`}>Dates</Label>
                <DatePicker
                    value={dates}
                    onChange={(value) => handlePackageChange(index, 'dates', value)}
                    multiple
                />
            </div>
        </CardContent>
    )
}

export default MultipleDateSelector