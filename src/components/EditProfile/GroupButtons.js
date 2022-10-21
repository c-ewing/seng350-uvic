import { useState } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ITEMS = ['Photography', 'Cooking', 'Gardening', 'Volunteering', 'Yoga', 'Painting', 'Musical Instruments', 'Singing', 'Hiking', 'Baking', 'Camping', 'Reading', 'Animals', 'Drawing', 'Entertainment', 'Politics', 'Tech', 'Fitness', 'Food', 'Science', 'Travel', 'Health', 'Comedy', 'Music', 'TV', 'Movies', 'Art', 'Sports', 'Ice Skating', 'Skateboarding', 'Fishing', 'Board Games', 'Brewery', 'Video Games', 'Writing']


export default function GroupButtons() {

    return (
        <>
            {ITEMS.map(item => <CustomButton value={item}>{item}</CustomButton>)}
        </>
    );
};

function CustomButton({value, children, ...props}) {
    var clicked = localStorage.getItem('is-clicked') ? JSON.parse(localStorage.getItem('is-clicked')): [];
    var clickState = false;
   
    if (clicked.includes(value)) {
        clickState = true;
    }

    const [toggleVariant, setVariant] = useState(clickState);
    const variant = toggleVariant ? "primary": "outline-primary";
    
    const toggleButton = () => { 
        var clicked = localStorage.getItem('is-clicked') ? JSON.parse(localStorage.getItem('is-clicked')): [];
        console.log(clicked)
        
        if (clicked.includes(value)) {
            const index = clicked.indexOf(value);
            if (index > -1) {
                clicked.splice(index, 1);
            }
        }
        else {
            clicked.push(value)
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