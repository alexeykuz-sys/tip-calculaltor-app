import React, {useState} from 'react';
import'./InputForm.css';

const InputForm = (props) => {
    const formClass = 'form-wrapper ' + props.className;
    
    const[input, setInput]=useState('');

    const inputHandler = (event) =>{
        setInput(event.target.value)
        console.log(event.target.value)    
    };



    return (
        <div className={formClass}>
            <form onChange={inputHandler} className='input-form'>
                <input type='number' value={input} min='.1' step='0.01'/>
            </form> 
        </div>
        
        
    )
}

export default InputForm
