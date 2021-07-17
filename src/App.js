import './App.css';
import Buttons from './components/Buttons';
import Card from './components/Card';
import InputForm from './components/InputForm';

function App() {
  return (
    <Card className="card1">
      <InputForm className='top-form'/>
      <Buttons /> 
      <InputForm className='bottom-form'/>
    </Card>

  );
}

export default App
