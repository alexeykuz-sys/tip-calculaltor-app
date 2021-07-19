import React from 'react';
import './Buttons.css';
// import Card from './Card'
import Button from './Button';

const Buttons = (props) => {
    
    const dataTipHandler=(tip)=>{
    

    props.onChangeData(tip)
        
    }

    return (
        <div className='btn-wrapper' >
            <div className='btn-header'>Select Tip %</div>
                <Button onTipChange={dataTipHandler}/>
        </div>
    )
    
}

export default Buttons;
