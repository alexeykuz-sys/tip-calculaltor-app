import React,{useState} from 'react';
import './App.css';
import Buttons from './components/Buttons/Buttons';
import Card from './components/UI/Card';
import InputForm from './components/Forms/InputForm';
import Calculation from './components/Result/Calculation';

function App() {
  const [amount, setAmount] = useState('0');
  const [tip, setTip] = useState('0');
  const [people, setPeople] = useState('1');
  
  
  const reset=()=>{
    setAmount('');
    setPeople('');
    setTip('')
  }
  
  const changeBillHandler = (billData) =>{
      setAmount(billData);
  }

  const changePeopleHandler = (peopleData) =>{
    setPeople(peopleData);
}

const changeTipHandler = (tipData) =>{
  setTip(tipData.tip);
}

  return (
    <Card className="card1">
      <div className='input-wrapper'>
        <InputForm myClassName='top-form' onChangeValue={changeBillHandler} initialValue={amount}/>
        <Buttons onChangeData={changeTipHandler}/> 
        <InputForm myClassName='bottom-form' onChangeValue={changePeopleHandler} initialValue={people}/>
      </div>
      <div className='result-wrapper'>
        <Calculation bill={parseFloat(amount)} tip={parseInt(tip)} people={parseInt(people)} reset={reset}/>
      </div>

    </Card>

  );
}

export default App;
