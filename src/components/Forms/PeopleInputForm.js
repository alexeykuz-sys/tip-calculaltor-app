import React, {useState} from 'react';
import'./PeopleInputForm.css';

const PeopleInputForm = (props) => {
    const formClass = 'form-wrapper ' + props.className;
    
    const[enteredPeople, setenteredPeople]=useState('');

    const numberPeopleHandler = (event) =>{
        setenteredPeople(event.target.value)
        console.log(event.target.value)    
    };

    const formSubmitHandler = (event) =>{
        const peopleData = {
            people: enteredPeople,
        };
        props.onChangeData(peopleData);
    }

    return (
        <div className={formClass}>
            <form onKeyDown={formSubmitHandler} className='input-form'>
                <input onChange={numberPeopleHandler} type='number' value={enteredPeople} min='.1' step='0.01'/>
            </form> 
        </div>
        
        
    )
}

export default PeopleInputForm;
