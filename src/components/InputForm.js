import React from 'react';
import'./InputForm.css';

const InputForm = (props) => {
    const formClass = 'form-wrapper ' + props.className;
    return (
        <div className={formClass}>
            <form className='input-form'>
                
                <input type='number' min='.1' step='0.01'/>
            </form> 
        </div>
        
        
    )
}

export default InputForm
