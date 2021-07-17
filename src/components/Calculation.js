import React from 'react';
import './Calculation.css';
import Card from './UI/Card';

const Calculation = () => {

    return (
        <Card className='calcCard'>
            <div className='calcTip'>Tip amount<span>$22</span></div>
            <div className='calcTotal'>Total<span>$35</span></div>
            <Card className='resetBtn'>Reset</Card>
        </Card>
    )
};

export default Calculation;