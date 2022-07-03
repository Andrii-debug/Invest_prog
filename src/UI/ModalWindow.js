import React, {useState} from 'react';
import styles from './ModalWindow.module.css'


function ModalWindow(props) {

    const [getValues, setGetValues] = useState('')
    const [available, setAvailable] = useState(props.sendAvailable)
   
    
    
    function onHandlerInput(e) {
     setGetValues(e.target.value)

    }

    function calculateAvailable() {
        if (getValues > available) {
            return
        } 
       setAvailable(parseFloat(available) - parseFloat(getValues))
        
    }

    function onSubmitHandler(e) {
        e.preventDefault()
        if (getValues > available) {
            return
        } 
        const data = {
            closeModalStatus: true,
            showInvestmentStatus: true,
            available: available,
            getValues: getValues
        }
        props.closeModalHandler(data)
        setGetValues('')    
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

                    <div className={styles['loan_ends']}>Loan ends in: {props.remaining.month} month {props.remaining.day} days</div>

                    <div className={styles['investment_text']}>Investment amount</div>
                    
                    
                    <input type='number' className={styles['input_investment']} onChange={onHandlerInput} value={getValues} />
                    

                    
                    
                    <button className={styles['accept_invest_btn']} onClick={calculateAvailable}>
                        <div className={styles['text_btn']}>INVEST</div>
                     </button>
                </form>


            </div>
                               

        </div>
        </React.Fragment>
    )
}
export default ModalWindow;