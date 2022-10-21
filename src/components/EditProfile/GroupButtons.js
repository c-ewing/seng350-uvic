import { useState } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ITEMS = ['Entertainment', 'Politics', 'Tech', 'Fitness', 'Food', 'Science', 'Travel', 'Health', 'Comedy', 'Music', 'TV', 'Movies', 'Art', 'Sports', 'Video Games', 'Writing']


export default function GroupButtons() {

    return (
        <>
            {ITEMS.map(item => <CustomButton value={item}>{item}</CustomButton>)}
        </>
    );
};

function CustomButton({value, children, ...props}) {
    var clicked = [];
    var clickState = false;
    var index;
    if (localStorage.getItem('is-clicked')) {
        clicked = JSON.parse(localStorage.getItem('is-clicked'));
    }
    if (clicked.some(e => e.button === value)) {
        index = clicked.findIndex((obj => obj.button === value));
        clickState = clicked[index].clicked;
    }
    else {
        const buttonVar = {button: value, clicked: clickState}
        clicked.push(buttonVar)
        JSON.parse(localStorage.setItem('is-clicked', JSON.stringify(clicked)))
    }

    const [toggleVariant, setVariant] = useState(clickState);
    const variant = toggleVariant ? "primary": "outline-primary";
    
    const toggleButton = () => { 
        var clicked = []
        if (localStorage.getItem('is-clicked')) {
            clicked = JSON.parse(localStorage.getItem('is-clicked'))
        }
        
        var clickedButton = {
            button: value, 
            clicked: !toggleVariant
        }
        if (clicked.some(e => e.button === value)) {
            index = clicked.findIndex((obj => obj.button === value));
            clicked[index].clicked = !toggleVariant
        }
        else {
            clicked.push(clickedButton)
        }

        localStorage.setItem('is-clicked', JSON.stringify(clicked));
        setVariant(!toggleVariant);
    };

    return (
        <>
            <Button 
                style={{padding:'0.25rem', margin:'0.2rem'}} 
                {...props} 
                onClick={toggleButton} 
                variant={variant}>
                    {children}
            </Button>{'  '}
        </>
    )
}