import React,{useState} from 'react';
import './App.css';
import Buttons from './components/Buttons/Buttons';
import Card from './components/UI/Card';
import BillInputForm from './components/Forms/BillInputForm';
import PeopleInputForm from './components/Forms/PeopleInputForm';
import Calculation from './components/Result/Calculation';

function App() {
  const [amount, setAmount] = useState('');
  const [tip, setTip] = useState('0');
  const [people, setPeople] = useState('0');
  
  console.log(amount)
  const changeBillHandler = (billData) =>{
      setAmount(parseFloat(billData.bill));
  }

  const changePeopleHandler = (peopleData) =>{
    setPeople(parseFloat(peopleData.people));
}

const changeTipHandler = (tipData) =>{
  setTip(parseFloat(tipData.tip));
}

  return (
    <Card className="card1">
      <div className='input-wrapper'>
        <BillInputForm className='top-form' onChangeBill={changeBillHandler} />
        <Buttons onChangeData={changeTipHandler}/> 
        <PeopleInputForm className='bottom-form' onChangePeople = {changePeopleHandler}/>
      </div>
      <div className='result-wrapper'>
        <Calculation bill={amount} tip={tip} people={people}/>
      </div>

    </Card>

  );
}

export default App;
