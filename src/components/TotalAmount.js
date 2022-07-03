import React, {useState} from 'react';
import styles from './TotalAmount.module.css'


function TotalAmount(props) {

    const invested = props.loans.reduce((accumulator, loan) => accumulator + parseFloat(loan.amount), 0)

    return (
        <React.Fragment>
        <div className={styles['total_block']}> </div>
            <p className={styles.text}>Total amount available for investment:</p>
            <p className={styles['total_amount_text']}>${invested + parseFloat(props.total)}</p>
        </React.Fragment>
    )
}


export default TotalAmount;