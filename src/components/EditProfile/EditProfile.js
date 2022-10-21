import CountrySelector from './CountrySelector'
import DegreeSelector from './DegreeSelector'
import GroupButtons from './GroupButtons'
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function EditProfile() {
    let navigate = useNavigate(); 
    const routeChange = () => { 
    let path = `/Profile`; 
        navigate(path);
    }

    return (
        <>
            <h1>Edit Profile</h1>
            <p>Choose Your Home Country</p>
            <CountrySelector></CountrySelector>
            <DegreeSelector></DegreeSelector>
            <GroupButtons></GroupButtons>
            <p>
                <Button color="primary" className="px-4"
                onClick={routeChange}>
                    Save
                </Button>
            </p>
        </>
    )
}