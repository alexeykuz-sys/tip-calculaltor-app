import React from 'react';
import './Button.css';
import Card from '../UI/Card'


const Button = (props) => {

    const clickHandler = (event)=>{
        let tip = event.target.innerHTML;
        console.log(tip)
        props.onTipChange(tip)
    }

    return (<li className='btn-list'onClick={clickHandler}>
        
            <Card className='button btn1' >5%</Card>
            <Card className='button btn2'>10%</Card>
            <Card className='button btn3'>15%</Card>
            <Card className='button btn4'>25%</Card>
            <Card className='button btn5'>50%</Card>
            <Card className='button btn6'>Custom</Card>
        </li>
    )
}

export default Button;