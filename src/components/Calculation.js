import React from 'react';
import './Calculation.css';
import Card from './UI/Card';
// import Button from './Buttons/Button';

const Calculation = (props) => {

    const changeDataHandler = (tip)=>{
        console.log(tip)
    }

    return (
        <Card className='calcCard' onChangeData={changeDataHandler} >
            <div className='calcTip'>Tip amount<span className='tipTotal' >$</span></div>
            <div className='calcTotal'>Total<span >$</span></div>
            <Card className='resetBtn'>Reset</Card>
        </Card>
    )
};

export default Calculation;