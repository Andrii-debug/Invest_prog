import styles from './Button.module.css'

function Button(props) {

    return (
        <button className={styles['accept_invest_btn']} onClick={props.openModalHandler}>
        <div className={styles['text_btn']}>INVEST</div>
        </button>
    )
}

export default Button;