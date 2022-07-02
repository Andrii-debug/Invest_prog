import React, {useState} from 'react';
import './Card.css'
import ModalWindow from '../UI/ModalWindow'

function Card(props) {

    const [available, setAvailable] = useState()
    const [stateModal, setStateModal] = useState()
    

    function openModalHandler() {
        setStateModal(true)
        
    }

    function closeModalHandler(data) {
        setStateModal(data)
    }

  return (
    <React.Fragment>
        {stateModal && ( <ModalWindow  sendAvailable={props.available} sendTitle={props.title} closeModalHandler={closeModalHandler}/> )}
    <div className='card_container'>
        <div className='card_informations'>
          
            <div className='info_block'/>
     
            <p className='loan_name'>
                   {props.title}
            </p>

            <p className='loan_details'>
                  ${props.available}
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