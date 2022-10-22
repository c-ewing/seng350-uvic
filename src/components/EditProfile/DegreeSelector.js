import { useState } from 'react'
import Select from 'react-select'
import React from "react"

const DEGREES = [
    { value: 'SENG', label: 'Software Engineering' },
    { value: 'CENG', label: 'Computer Engineering' },
    { value: 'CSC', label: 'Computer Science' },
    { value: 'ATW', label: 'Academic and Technical Writing' },  
    { value: 'ASL', label: 'American Sign Language' },  
    { value: 'A', label: 'Anthropology' },
    { value: 'ART', label: 'Art' },
    { value: 'ARTE', label: 'Art Education' },
    { value: 'AHVS', label: 'Art History& Visual Studies' },
    { value: 'AST', label: 'Astronomy' },
    { value: 'BIOC', label: 'Biochemistry' },
    { value: 'BIOCM', label: 'Biochemistry and Microbiology' },
    { value: 'BIO', label: 'Biology' },
    { value: 'BIOE', label: 'Biomedical Engineering' },
    { value: 'BUS', label: 'Business' },

    { value: 'CS', label: 'Canadian Studies' },
    { value: 'CHEM', label: 'Chemistry' },
{ value: 'CYC', label: 'Child and Youth Care' },
{ value: 'CE', label: 'Civil Engineering' },
{ value: 'COM', label: 'Commerce' },
{ value: 'CD', label: 'Community Development' },
{ value: 'CSC', label: 'Computer Science' },
{ value: 'CW', label: 'Creative Writing' },
{ value: 'CH', label: 'Cultural HEritage' },
{ value: 'CSPT', label: 'Cultural,Social & Political T' },
{ value: 'CI', label: 'Curriculum adn Instruction' },

{ value: 'DR', label: 'Dispute Resolution' },

{ value: 'EOS', label: 'Earth and Ocean Sciences' },
{ value: 'ECO', label: 'Economics' },
{ value: 'EPLS', label: 'Ed Psyc and Leadership Studies' },
{ value: 'ECE', label: 'Electrical and Computer Engineering' },
{ value: 'E', label: 'Engineering' },
{ value: 'ENG', label: 'English' },
{ value: 'ESB', label: 'Entrepreneurship and Small Bus' },
{ value: 'ER', label: 'Environmental Restoration' },
{ value: 'ES', label: 'Environmental Studies' },
{ value: 'EUS', label: 'European Studies' },
{ value: 'ESPHE', label: 'Exercise Sc,Phys & Health Ed' },

{ value: 'FA', label: 'Fine Arts' },
{ value: 'FB', label: 'Forest BIology' },
{ value: 'F', label: 'French' },

{ value: 'GS', label: 'Gender Studies' },
{ value: 'G', label: 'Geography' },
{ value: 'GS', label: 'Germanic Studies' },
{ value: 'GDS', label: 'Global Development Studies' },
{ value: 'GRS', label: 'Graduate Studies' },
{ value: 'GR', label: ' Greek' },
{ value: 'GNRS', label: 'Greek and Roman Studies' },

{ value: 'HIS', label: 'Health Information Science' },
{ value: 'HCS', label: 'Health Community Services' },
{ value: 'HIST', label: ' History ' },
{ value: 'HUM', label: 'Humanities' },
{ value: 'M', label: 'Math' },
{ value: 'MIB', label: 'Microbiology' }]


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