import React, {useState} from 'react';
import'./PeopleInputForm.css';

const PeopleInputForm = (props) => {
    const formClass = 'form-wrapper ' + props.className;
    
    const[enteredPeople, setenteredPeople]=useState('0');

    const numberPeopleHandler = (event) =>{
        // event.preventDefault()
        setenteredPeople(event.target.value)
        // console.log(event.target.value)    
    };  

    const peopleData = {
        people: enteredPeople,
    };
    // console.log('enteredPeople', enteredPeople)
    props.onChangePeople(peopleData);
    
    return (
        <div className={formClass}>
            <form className='input-form'>
                <input onChange={numberPeopleHandler} type='number' value={enteredPeople} min='.1' step='0.01'/>
            </form> 
        </div>
        
        
    )
}

export default PeopleInputForm;
