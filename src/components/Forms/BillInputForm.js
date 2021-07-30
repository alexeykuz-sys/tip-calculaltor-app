import React, {useState} from 'react';
import'./BillInputForm.css';

const BillInputForm = (props) => {
    const formClass = 'form-wrapper ' + props.className;
    
    const[amountBill, setAmountBill]=useState('0');

    const amountBillHandler = (event) =>{
        event.preventDefault()
        setAmountBill(event.target.value)
        // console.log(event.target.value)    
    };

    
        const billData = {
            bill: amountBill,
        }
        props.onChangeBill(billData);
        console.log(billData)

    return (
        <div className={formClass}>
            <form className='input-form'>
                <input onChange={amountBillHandler} type='number' value={amountBill} min='.1' step='0.01'/>
            </form> 
        </div>
        
        
    )
}

export default BillInputForm;
