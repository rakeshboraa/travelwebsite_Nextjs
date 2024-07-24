import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import { getallCategories } from '@/lib/actions/category.action'

const MultiSelectDropdown = ({ value, onChangeHandler }) => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const getCategories = async () => {
            const categoryList = await getallCategories()
            categoryList && setCategories(categoryList)
        }
        getCategories()
    }, [])

    const handleChange = (selectedOptions) => {
        const selectedValues = selectedOptions ? selectedOptions.map(option => option.value) : []
        onChangeHandler(selectedValues)
    }

    const categoryOptions = categories.map(category => ({
        value: category._id,
        label: category.name
    }))

    return (
        <div>
            <Select
                isMulti
                value={categoryOptions.filter(option => value.includes(option.value))}
                onChange={handleChange}
                options={categoryOptions}
                placeholder="Select categories"
            />
        </div>
    )
}

export default MultiSelectDropdown
