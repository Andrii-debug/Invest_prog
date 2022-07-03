import React, {useState} from 'react';
import './App.css';
import Card from './components/Card';
import TotalAmount from './components/TotalAmount';


function App(props) {

  const [data, setData] = useState(props.data)

  const [amount, setAmount] = useState(500000)
 
  return (
    <div className="App">
      <div className='header_block'>
      <div className='header'>Current Loans</div>
      </div>
      <hr className='line'/>


      {data.loans.map(loan => (
      <Card 
      tranche={loan.tranche}
      key={loan.id}
      amount={loan.amount}
      available={loan.available}
      title={loan.title}
      />) )}
  

      <TotalAmount total={amount} loans={data.loans}></TotalAmount>

      

 
     
    </div>
  );
}

export default App;
