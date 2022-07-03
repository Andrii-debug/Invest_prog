import React, {useState} from 'react';
import styles from './TotalAmount.module.css'


function TotalAmount({loans, total, amount}) {

    

    const invested = loans.reduce((accumulator, loan) => accumulator + parseFloat(loan.amount), 0)
    const [totalInvestment, setTotalInvestment] = useState(invested)
  

    return (
        <React.Fragment>
        <div className={styles['total_block']}> </div>
            <p className={styles.text}>Total amount available for investment:</p>
            <p className={styles['total_amount_text']}>${totalInvestment}</p>
        </React.Fragment>
    )
}


export default TotalAmount;