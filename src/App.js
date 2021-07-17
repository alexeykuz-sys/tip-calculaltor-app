import './App.css';
import Buttons from './components/Buttons/Buttons';
import Card from './components/UI/Card';
import InputForm from './components/Forms/InputForm';
import Calculation from './components/Calculation';

function App() {
  return (
    <Card className="card1">
      <InputForm className='top-form'/>
      <Buttons /> 
      <InputForm className='bottom-form'/>
      <Calculation/>
    </Card>

  );
}

export default App;
