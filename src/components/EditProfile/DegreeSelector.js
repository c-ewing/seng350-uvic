import { useState } from 'react'
import Select from 'react-select'
import React from "react"

const DEGREES = [
    { value: 'SENG', label: 'Software Engineering' },
    { value: 'CENG', label: 'Computer Engineering' },
    { value: 'CSC', label: 'Computer Science' }]


export default function DegreeSelector() {
    // Get the initial state:
    var init_value = DEGREES.find(o => o.value === JSON.parse(localStorage.getItem("profile")).degree.value) ?? ''
    const [value, setValue] = useState(init_value)

    const changeHandler = (value) => {
        setValue(value)

        // Set the degree in the profile stored locally
        var profile = JSON.parse(localStorage.getItem("profile"))
        profile.degree = value
        localStorage.setItem("profile", JSON.stringify(profile))
    }

    return (
        <Select
            options={DEGREES}
            value={value}
            onChange={changeHandler}
            placeholder='Select Degree...'>
        </Select>
    )
}