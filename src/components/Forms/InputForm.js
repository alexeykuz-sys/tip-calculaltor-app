import React, {useState, useEffect} from 'react';
import'./InputForm.css';

const InputForm = ({initialValue, onChangeValue, myClassName}) => {
    const[amountBill, setAmountBill]=useState(initialValue);
    useEffect(() => {
        setAmountBill(initialValue);
    }, [initialValue])
    const amountBillHandler = (event) =>{
        event.preventDefault();
        setAmountBill(event.target.value);
        onChangeValue(event.target.value);
    };
    return (
        <div className={'form-wrapper ' + myClassName}>
            <form className='input-form'>
                <input onChange={amountBillHandler} type='number' value={amountBill} min='.1' step='0.01'/>
            </form> 
        </div>
        
        
    )
}

export default InputForm;
