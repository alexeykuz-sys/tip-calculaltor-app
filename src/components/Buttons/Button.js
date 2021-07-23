import React from 'react';
import './Button.css';
import Card from '../UI/Card'


const Button = (props,key) => {
    console.log(key)
    const btnClass= `button + btn+props.id`;
    return (
        
        <div>
            <Card className={btnClass}>{props.button}</Card>
        </div>
    )
}

export default Button;