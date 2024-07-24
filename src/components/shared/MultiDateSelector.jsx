import React, { useState, useEffect } from 'react';
import DatePicker from "react-multi-date-picker";

const MultiDateSelector = ({ value, onChangeHandler }) => {
    const [selectedDatesCount, setSelectedDatesCount] = useState(value.length);

    const handleDateChange = (dates) => {
        const formattedDates = dates.map(date => date.format('YYYY-MM-DD'));
        onChangeHandler(formattedDates);
        setSelectedDatesCount(formattedDates.length);
    };

    // Ensure the value is converted to date objects that DatePicker can understand
    const dateValues = value.map(date => new Date(date));

    useEffect(() => {
        setSelectedDatesCount(value.length);
    }, [value]);

    return (
        <div className="w-full gap-2 flex  flex-col">
            <DatePicker
                value={dateValues}
                onChange={handleDateChange}
                multiple
                placeholder="Select dates"
                format="YYYY-MM-DD"
                inputClass="custom-input"
            />
            <p className="selected-dates-count">Selected slots: {selectedDatesCount}</p>
        </div>
    );
}

export default MultiDateSelector;
