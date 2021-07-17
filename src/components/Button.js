import React from 'react';
import './Button.css';
import Card from './Card'

const Button = (props) => {
    return (
        <li>
            <Card className='button' id='btn1'>5%</Card>
            <Card className='button' id='btn2'>10%</Card>
            <Card className='button' id='btn3'>15%</Card>
            <Card className='button' id='btn4'>25%</Card>
            <Card className='button' id='btn5'>50%</Card>
            <Card className='button' id='btn5'>Custom</Card>
        </li>
    )
}

export default Button;