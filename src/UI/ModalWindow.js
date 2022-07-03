import React, {useState} from 'react';
import styles from './ModalWindow.module.css'


function ModalWindow(props) {

    const [getValues, setGetValues] = useState()
    const [available, setAvailable] = useState(props.sendAvailable)
    

    const invested = props.data.reduce((accumulator, loan) => accumulator + parseFloat(loan.amount), 0)
    const [total, setTotal] = useState(invested)

 

    function close() {
      
        const data = {
            closeModalStatus: false,
            showInvestmentStatus: false,
            available: available,
            // getValues: 0
        }
        props.closeModalHandler(data)
    }
    
    function onHandlerInput(e) {
     setGetValues(e.target.value)

    }

    function calculateAvailable() {
       setAvailable(parseFloat(available) - parseFloat(getValues))
       setTotal(parseFloat(getValues) + parseFloat(total))
    }

    function onSubmitHandler(e) {
        e.preventDefault()
        


        const data = {
            closeModalStatus: false,
            showInvestmentStatus: true,
            available: available,
            // getValues: getValues,
            total: total
        }
        props.closeModalHandler(data)
         
    }
    return (
        <React.Fragment>
        <div className={styles['wrapper']}>
            <div className={styles['contentBlock']}>
                
                <div className={styles['close_modal']}>
                   <div className={styles.close} onClick={close}></div>
                    
                </div>

                <form className={styles['form_block']} onSubmit={onSubmitHandler}>
                    <div className={styles['header']}>Invest in Loan</div>

                    <div className={styles['loan_title']}>{props.sendTitle}</div>

                    <div className={styles['amount_available']}>Amount available: ${available}</div>

                    <div className={styles['loan_ends']}>Loan ends in: {props.remaining.month} month {props.remaining.day} days</div>
                   
                    
                    <label htmlFor='1' className={styles['investment_text']}>Investment amount</label>

                    <input  id='1' type='number' className={styles['input_investment']} onChange={onHandlerInput} />
                    

                    
                    
                    <button  type='submit' className={styles['accept_invest_btn']} onClick={calculateAvailable}>
                        <div className={styles['text_btn']}>INVEST</div>
                     </button>
                </form>


            </div>
                               

        </div>
        </React.Fragment>
    )
}
export default ModalWindow;