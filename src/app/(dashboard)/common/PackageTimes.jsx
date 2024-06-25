import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const PackageTimes = ({ index, times, handlePackageChange, handleAddTime }) => {
    return (
        <div className="grid gap-3">
            {times.map((timePair, timeIndex) => (
                <div key={timeIndex} className=" gap-3 flex ">
                    <div>
                        <Label htmlFor={`package-times-start-${index}-${timeIndex}`}>Start Time</Label>
                        <Input
                            id={`package-times-start-${index}-${timeIndex}`}
                            type="time"
                            className="w-full"
                            value={timePair.startTime}
                            onChange={(e) => handlePackageChange(index, 'times', times.map((time, idx) => idx === timeIndex ? [e.target.value, time.endTime] : [time.startTime, time.endTime]))}
                        />
                    </div>
                    <div>
                        <Label htmlFor={`package-times-end-${index}-${timeIndex}`}>End Time</Label>
                        <Input
                            id={`package-times-end-${index}-${timeIndex}`}
                            type="time"
                            className="w-full"
                            value={timePair.endTime}
                            onChange={(e) => handlePackageChange(index, 'times', times.map((time, idx) => idx === timeIndex ? [time.startTime, e.target.value] : [time.startTime, time.endTime]))}
                        />
                    </div>
                </div>
            ))}
            <Button variant="outline" size="sm" type="button" onClick={() => handleAddTime(index)}>Add Times</Button>
        </div>
    );
};

export default PackageTimes;
