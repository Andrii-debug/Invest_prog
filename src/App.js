import React, {useState} from 'react';
import './App.css';
import Card from './components/Card';
import TotalAmount from './components/TotalAmount';


function App(props) {

  const [data, setData] = useState(props.data)

  const [total, setTotal] = useState(0)

  function getTotal(data) {
    console.log(data);
    setTotal(data)
  }
  console.log(total);
  return (
    <div className="App">
      <div className='header_block'>
      <div className='header'>Current Loans</div>
      </div>
      <hr className='line'/>


      {data.loans.map(loan => (
      <Card
      remaining={loan.term_remaining}
      tranche={loan.tranche}
      key={loan.id}
      amount={loan.amount}
      available={loan.available}
      title={loan.title}
      getTotal={getTotal}
      />) )}
  

      <TotalAmount total={total} loans={data.loans}></TotalAmount>

      

 
     
    </div>
  );
}

export default App;
