import React, {useState} from 'react';
import'./BillInputForm.css';

const BillInputForm = (props) => {
    const formClass = 'form-wrapper ' + props.className;
    
    const[amountBill, setAmountBill]=useState('');

    const amountBillHandler = (event) =>{
        setAmountBill(event.target.value)
        console.log(event.target.value)    
    };

    const billSubmitHandler = (event) =>{
        const billData = {
            bill: amountBill,
        };
        props.onChangeData(billData);
    }

    return (
        <div className={formClass}>
            <form onKeyDown={billSubmitHandler} className='input-form'>
                <input onChange={amountBillHandler} type='number' value={amountBill} min='.1' step='0.01'/>
            </form> 
        </div>
        
        
    )
}

export default BillInputForm;
