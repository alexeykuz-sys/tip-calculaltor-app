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
    }
    console.log(inputData)
  }

  return (
    <Card className="card1">
      <BillInputForm className='top-form' onChangeData={changeDataHandler}/>
      <Buttons onChangeData={changeDataHandler}/> 
      <PeopleInputForm className='bottom-form' onChangeData={changeDataHandler}/>
      <Calculation />
    </Card>

  );
}

export default App;
