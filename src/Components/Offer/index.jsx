import React from "react"
import styles from './styles.module.scss'
// import emailjs from '@emailjs/browser'
import {Form} from '../'


function Offer() {


    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Купить растения</h1>
            <div className={styles.container}>
                <div className={styles.orderBtn}>заказать онлайн</div>
                <Form/>
            </div>
        </div>
    )
}

export default Offer