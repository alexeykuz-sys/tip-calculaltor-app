import React from 'react';
import '../Result/Calculation.css';
import Card from '../UI/Card';


const Calculation = ({bill, tip, people, reset}) => {
    
    return (
        <Card className='calcCard'>
            <div className='calcTip'>
                Tip amount
                <span className='tipTotal' >
                    ${(((bill * tip) / people)/100).toFixed(2)}
                </span>
            </div>
            <div className='calcTotal'>
                Total
                <span>
                    ${(bill/people + ((bill * tip) / people)/100).toFixed(2)}
                </span>
            </div>
            <button className='resetBtn' type='button' onClick={reset}>Reset</button>
        </Card>
    )
};

export default Calculation;