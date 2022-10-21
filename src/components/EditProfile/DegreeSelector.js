import { useState } from 'react'
import Select from 'react-select'

const DEGREES = [
    {value: 'SENG', label: 'Software Engineering'}, 
    {value: 'CENG', label: 'Computer Engineering'}, 
    {value: 'CSC', label: 'Computer Science'}]

export default function DegreeSelector() {
    const [value, setValue] = useState('')

    const changeHandler = value => {
        setValue(value)
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