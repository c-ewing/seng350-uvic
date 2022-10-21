import { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'

export default function CountrySelector() {
    const [value, setValue] = useState('')
    const options = useMemo(() => countryList().getData(), [])

    const changeHandler = value => {
        setValue(value)
        
        // Set the country in the profile stored locally
        var profile = JSON.parse(localStorage.getItem("profile"))
        profile.home_country = value
        localStorage.setItem("profile", JSON.stringify(profile))
    }

    return (
    <Select 
        options={options} 
        value={value} 
        onChange={changeHandler}
        placeholder='Select Home Country...'> 
    </Select>
    )
}