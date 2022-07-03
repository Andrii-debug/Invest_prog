import React, {useState} from 'react';
import './Card.css'
import ModalWindow from '../UI/ModalWindow'
import Invested from '../UI/Invested';


function Card(props) {

  
    const [available, setAvailable] = useState(props.available)
    const [stateModal, setStateModal] = useState()
    const [investedStatus, setInvestedStatus] = useState(false)
    const [remaining, setRemaining] = useState(props.remaining)

    

    function openModalHandler() {
        let month = 0
        let sec = remaining;
        let min = sec / 60;
        let hour = min / 60;
        let day = Math.ceil(hour / 24)
        for (let i = 0; i < day; i++) {
            if (day >= 30) {
                month++
                day = day - 30
            }
        }
       
        setRemaining({
            day: day,
            month: month
            
        })
       
        setStateModal(true)
    }



    function closeModalHandler(data) {
        setStateModal(data.closeModalStatus)
        setInvestedStatus(data.showInvestmentStatus)
        setAvailable(data.available)
        props.getTotal(data.getValues)
    }

  return (
    <React.Fragment>
        {stateModal && ( <ModalWindow remaining={remaining} sendAvailable={available} sendTitle={props.title} closeModalHandler={closeModalHandler}/> )}
    <div className='card_container'>
        <div className='card_informations'>
            {investedStatus && <Invested />}
            <div className='info_block'/>
     
            <p className='loan_name'>
                   {props.title}
            </p>

            <p className='loan_details'>
                  ${available}
            </p>
            <button className='accept_invest_btn' onClick={openModalHandler}>
                <div className='text_btn'>INVEST</div>
            </button>

         
        </div>

    </div>

    </React.Fragment>
  )



}

export default Card;