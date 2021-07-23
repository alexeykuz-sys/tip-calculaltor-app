import React from 'react';
import './Button.css';
import Card from '../UI/Card'


const Button = (props) => {
    
    const btnClass= `button ${props.class}`;
    return (
        
        <div>
            <Card className={btnClass}>{props.button}</Card>
        </div>
    )
}

export default Button;