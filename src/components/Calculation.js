import React, {useState} from 'react';
import './Calculation.css';
import Card from './UI/Card';
// import Button from './Buttons/Button';

const Calculation = (props) => {

    const [tip, setTip]=useState('tip')

    const changeDataHandler = (data)=>{
        setTip(props.data)

    }

    return (
        <Card className='calcCard'>
            <div className='calcTip' >Tip amount<span className='tipTotal' onTipChange={changeDataHandler}>${tip}</span></div>
            <div className='calcTotal'>Total<span >$</span></div>
            <Card className='resetBtn'>Reset</Card>
        </Card>
    )
};

export default Calculation;