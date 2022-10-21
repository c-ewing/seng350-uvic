import { useState } from 'react'
import Select from 'react-select'

const DEGREES = [
    {value: 'SENG', label: 'Software Engineering'}, 
    {value: 'CENG', label: 'Computer Engineering'}, 
    {value: 'CSC', label: 'Computer Science'}]

export default function DegreeSelector() {
    const [value, setValue] = useState('')
    var placeholder = "Select Degree..."

    // TODO dyn reload: https://stackoverflow.com/questions/63994222/store-dropdown-selection-and-load-it-from-localstorage

    const loadHandler = value => {
        var profile = JSON.parse(localStorage.getItem("profile"))
        setValue(profile.degree)
    }

    const changeHandler = value => {
        setValue(value)

        // Set the country in the profile stored locally
        var profile = JSON.parse(localStorage.getItem("profile"))
        profile.degree = value
        localStorage.setItem("profile", JSON.stringify(profile))
    }

    return (
    <Select 
        options={DEGREES} 
        value={value} 
        onChange={changeHandler}
        onLoad={loadHandler}
        placeholder={placeholder}> 
    </Select>
    )
}