import './App.css';
import Buttons from './components/Buttons/Buttons';
import Card from './components/UI/Card';
import BillInputForm from './components/Forms/BillInputForm';
import PeopleInputForm from './components/Forms/PeopleInputForm';
import Calculation from './components/Calculation';

function App() {

  const changeDataHandler = (enteredData) =>{
    const inputData = {
      ...enteredData,
    };
    console.log(inputData.tip)
    console.log(parseFloat(inputData.bill))
    console.log(inputData.people)
    let tipAmount = parseInt(inputData.bill )
    console.log(tipAmount)
  }

  return (
    <Card className="card1">
      <div className='input-wrapper'>
        <BillInputForm className='top-form' onChangeData={changeDataHandler}/>
        <Buttons onChangeData={changeDataHandler}/> 
        <PeopleInputForm className='bottom-form' onChangeData={changeDataHandler}/>
      </div>
      <div className='result-wrapper'>
        <Calculation/>
      </div>

    </Card>

  );
}

export default App;
