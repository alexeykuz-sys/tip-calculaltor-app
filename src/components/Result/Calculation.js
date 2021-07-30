import React from 'react';
import '../Result/Calculation.css';
import Card from '../UI/Card';

const Calculation = (props) => {

    // const [tipPP, setTipPP]=useState('');
    // const [totalPP, setTotalPP] = useState('0');
        
    //     const calcHandler =(e)=>{
    //         setTipPP(((props.bill * props.tip) / props.people)/100);
    //         setTotalPP(props.bill/props.people + tipPP)
    //         console.log('ert')
    //     }

    //     useEffect(() => {
            
    //     }, [tipPP, totalPP]);
        

    return (
        <Card className='calcCard'>
            <div className='calcTip' >Tip amount<span className='tipTotal' >${((props.bill * props.tip) / props.people)/100}</span></div>
            <div className='calcTotal'>Total<span>${props.bill/props.people + ((props.bill * props.tip) / props.people)/100}</span></div>
            <Card className='resetBtn'>Reset</Card>
        </Card>
    )
};

export default Calculation;