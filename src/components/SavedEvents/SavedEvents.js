import React from 'react';
import {
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';

const interval = 10000;

const sectionStyle = {
    zIndex: 0
}

const containerStyle = {
    marginBottom: 40
}


export default function SavedEvents() {
    return (
        <div style={containerStyle} className='container'>
            <div style={sectionStyle} className='section section-1'>
                <h1>Event Section 1</h1>
                <MDBCarousel showIndicators showControls style={sectionStyle} interval={interval}>
                    <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={1}
                    src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg'
                    alt='...'
                    >
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </MDBCarouselItem>
                    <MDBCarouselItem
                        className='w-100 d-block'
                        itemId={2}
                        src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg'
                        alt='...'
                    >
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </MDBCarouselItem>
                    <MDBCarouselItem
                        className='w-100 d-block'
                        itemId={3}
                        src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg'
                        alt='...'
                    >
                        <h5>Third slide label</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </MDBCarouselItem>
                </MDBCarousel>
            </div>
            <div className='section section-2'>
                <h1>Event Section 2</h1>
                <MDBCarousel showIndicators showControls style={sectionStyle} interval={interval}>
                <MDBCarouselItem
                className='w-100 d-block'
                itemId={1}
                src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg'
                alt='...'
                >
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </MDBCarouselItem>

                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={2}
                    src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg'
                    alt='...'
                >
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </MDBCarouselItem>
            
                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={3}
                    src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg'
                    alt='...'
                >
                    <h5>Third slide label</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </MDBCarouselItem>
                </MDBCarousel>
            </div>
            <div className='section section-3'>
                <h1>Event Section 3</h1>
                <MDBCarousel showIndicators showControls style={sectionStyle} interval={interval}>
                <MDBCarouselItem
                className='w-100 d-block'
                itemId={1}
                src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg'
                alt='...'
                >
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </MDBCarouselItem>

                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={2}
                    src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg'
                    alt='...'
                >
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </MDBCarouselItem>
            
                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={3}
                    src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg'
                    alt='...'
                >
                    <h5>Third slide label</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </MDBCarouselItem>
                </MDBCarousel>
            </div>
            <div className='section section-4'>
                <h1>Event Section 4</h1>
                <MDBCarousel showIndicators showControls style={sectionStyle} interval={interval}>
                <MDBCarouselItem
                className='w-100 d-block'
                itemId={1}
                src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg'
                alt='...'
                >
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </MDBCarouselItem>

                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={2}
                    src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg'
                    alt='...'
                >
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </MDBCarouselItem>
            
                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={3}
                    src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg'
                    alt='...'
                >
                    <h5>Third slide label</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </MDBCarouselItem>
                </MDBCarousel>
            </div>
        </div>
        
    );
}