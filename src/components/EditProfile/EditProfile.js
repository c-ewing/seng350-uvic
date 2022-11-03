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
            <h1 className='p-4'>Edit Profile</h1>
            <p></p>
            <p className='p-2'><span style={{ color:'black', fontSize: 20}}>Choose Your Home Country</span></p>
            <div style={{width:'50%', marginLeft: 'auto', marginRight: 'auto'}}><CountrySelector></CountrySelector></div>
            <p className='p-4'></p> 
            <p><span style={{ color:'black', fontSize: 20}}>Choose Your Degree </span></p>
            <div style={{width:'50%', marginLeft: 'auto', marginRight: 'auto'}}><DegreeSelector></DegreeSelector></div>
            <p className='p-4'></p>
            <p><span style={{ color:'black', fontSize: 20}}>Select Your Interests</span></p>
            <div style={{width:'50%', marginLeft: 'auto', marginRight: 'auto'}}><GroupButtons></GroupButtons></div>
            <p className='p-4'></p>
            <p>
                <Button color="primary" className="px-4" style={{ padding: '0.25rem', margin: '0.2rem' }}
                    onClick={routeChange}>
                    Save
                </Button>
            </p>
        </>
    )
}