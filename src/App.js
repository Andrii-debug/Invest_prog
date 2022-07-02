import React, {useState} from 'react';
import './App.css';
import Card from './components/Card';
import TotalAmount from './components/TotalAmount';
import ModalWindow from './UI/ModalWindow'

function App(props) {

  const [data, setData] = useState(props.data)
  // console.log(data.loans.available);

  

  const [amount, setAmount] = useState(500000)


  // function openModal(data) {
  //   setStateModal(data)
 
  // }


 
 
 
  return (
    <div className="App">
      <div className='header_block'>
      <div className='header'>Current Loans</div>
      </div>
      <hr className='line'/>

      {/* {stateModal && (
        // data.loans.map(loan => <ModalWindow available={loan.available}/>)
        <ModalWindow available={data.available} />
      )} */}

      {/* <ModalWindow /> */}
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
