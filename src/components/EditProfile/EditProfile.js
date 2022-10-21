import CountrySelector from './CountrySelector'
import DegreeSelector from './DegreeSelector'
import GroupButtons from './GroupButtons'
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const profileLayout = {
    "first_name": "",
    "last_name": "",
    "age": "",
    "gender": "",
    "home_country": "",
    "degree": "",
    "interests": []
}

export default function EditProfile() {
    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/Profile`;
        navigate(path);
    }

    // [TODO]:
    // Possibly add a check to see if there is a mismatch between the profile format(s)?
    if (localStorage.getItem("profile") === null) {
        localStorage.setItem("profile", JSON.stringify(profileLayout))
    }

    return (
        <>
            <h1>Edit Profile</h1>
            <p>Choose Your Home Country</p>
            <CountrySelector></CountrySelector>
            <DegreeSelector></DegreeSelector>
            <GroupButtons></GroupButtons>
            <p>
                <Button color="primary" className="px-4" style={{ padding: '0.25rem', margin: '0.2rem' }}
                    onClick={routeChange}>
                    Save
                </Button>
            </p>
        </>
    )
}