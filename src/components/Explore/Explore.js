import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import SearchBar from './SearchBar';
import Categories from './Categories';

export default function Explore() {
    return (
        <div className="vh-100" style={{ backgroundColor: '#eee'}}>
            <MDBContainer className="container py-3 h-100">
                <MDBTypography className="mb-4 pb-2" tag="h1">Explore</MDBTypography>
                <SearchBar />
                <Categories />
            </MDBContainer>
        </div>
    );
}