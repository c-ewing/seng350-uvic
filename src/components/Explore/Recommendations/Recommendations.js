import { MDBTypography, MDBContainer } from 'mdb-react-ui-kit';
import { useEffect, useState } from 'react';

export default function Recommendations () {
    const profile = localStorage.getItem('profile') ? JSON.parse(localStorage.getItem('profile')) : [];
    const arrInterests = profile.interests ? profile.interests: [];
    const interests = arrInterests.join();
    const [data, setData] = useState([]);
    console.log(interests)

    useEffect(() => {
        // fetch data
        const dataFetch = async () => {
        const data = await (
            await fetch(
                `http://localhost:3000/search/${interests}`
                )
            ).json();

            // set state when the data received
            setData(data);
        };

        dataFetch();
    }, [interests]);

    console.log(data);

    return (
        <div className="vh-100" style={{ backgroundColor: '#eee'}}>
            <MDBContainer className="container py-3 h-100">
                <MDBTypography className="mb-4 pb-2" tag="h1">Recommendations</MDBTypography>
            </MDBContainer>
        </div>
    )
}