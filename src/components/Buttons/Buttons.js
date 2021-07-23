import React from 'react';
import './Buttons.css';
// import Card from './Card'
import Button from './Button';

const Buttons = () => {

    const buttons = [
        {   id:1,
            class: 'btn1',
            btn:'5%'
        },
        {   id:2,
            class: 'btn2',
            btn:'10%'
        },
        {   id:3,
            class: 'btn3',
            btn:'15%'
        },
        {   id:4,
            class: 'btn4',
            btn:'25%'
        },
        {   id:5,
            class: 'btn5',
            btn:'50%'
        },
        {   id:6,
            class: 'btn6',
            btn:'Custom'
        },
    ]

    
    // const dataTipHandler=(tip)=>{
    
    //     const tipAdded = {
    //         tipAdded:tip,
    //     }

    // props.onChangeData(tipAdded)
        
    // }

    return (
        <div className='btn-wrapper' >
            <div className='btn-header'>Select Tip %</div>
            <ul className='btn-list'>
                {buttons.map((button)=>{
                    
                    return <Button class={button.class} key={button.id} button={button.btn}/>
                    
                })}
            </ul>
        </div>
    )
    
}

export default Buttons;
