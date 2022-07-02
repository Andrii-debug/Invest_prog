import React, {useState} from 'react';
import styles from './ModalWindow.module.css'


function ModalWindow(props) {

    const [getValues, setGetValues] = useState()
    
 
    const [available, setAvailable] = useState(parseFloat(props.sendAvailable))

    function onHandlerInput(e) {
     setGetValues(e.target.value)  
        
    }

    function calculateAvailable() {
       setAvailable(props.sendAvailable - getValues)
     
    }

    function onSubmitHandler(e) {
        e.preventDefault()
        props.closeModalHandler(false)
        console.log(getValues);
       
    }

    return (
        <React.Fragment>
        <div className={styles['wrapper']}>
            <div className={styles['contentBlock']}>
                
                <div className={styles['close_modal']}>
                   {/* <span className={styles['close_modal']>/</span>
                   <span className={styles['close_modal']>\</span> */}
                    
                </div>

                <form className={styles['form_block']} onSubmit={onSubmitHandler}>
                    <div className={styles['header']}>Invest in Loan</div>

                    <div className={styles['loan_title']}>{props.sendTitle}</div>

                    <div className={styles['amount_available']}>Amount available: ${available}</div>

                    <div className={styles['loan_ends']}>Loan ends in: 1 month 10 days</div>

                    <div className={styles['investment_text']}>Investment amount</div>
                    
                    
                    <input type='number' className={styles['input_investment']} onChange={onHandlerInput} />
                    

                    
                    
                    <button className={styles['accept_invest_btn']} onClick={calculateAvailable}>
                        <div type='submit' className={styles['text_btn']}>INVEST</div>
                     </button>
                </form>


            </div>
                               

        </div>
        </React.Fragment>
    )
}
export default ModalWindow;