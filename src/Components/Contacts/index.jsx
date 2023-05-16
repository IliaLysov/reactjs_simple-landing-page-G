import React from "react"
import styles from './styles.module.scss'
import {YandexMap} from '../'
import Phone from '../../icons/phone.svg'
import Location from '../../icons/location.svg'
import Globe from '../../icons/globe.svg'
import Mail from '../../icons/mail.svg'


function Contacts({refLink}) {

    return (
        <div className={styles.wrapper} ref={refLink}>
            <h1 className={styles.title}>Контакты</h1>
            <div className={styles.container}>
                <div className={styles.map}>
                    <YandexMap />
                </div>
                <div className={styles.side}>
                    <div className={styles.item}>
                        <img src={Phone} alt="phone" className={styles.itemImg}/>
                        <div className={styles.itemName}>{'+7 (961) 533-23-33'}</div>
                    </div>
                    <div className={styles.item}>
                        <img src={Location} alt="location" className={styles.itemImg}/>
                        <div className={styles.itemName}>ст. Бриньковская, ул. Горького, 38</div>
                    </div>
                    <div className={styles.item}>
                        <img src={Globe} alt="globe" className={styles.itemImg}/>
                        <div className={styles.itemName}>hg-company.ru</div>
                    </div>
                    <div className={styles.item}>
                        <img src={Mail} alt="mail" className={styles.itemImg}/>
                        <div className={styles.itemName}>почта@gmail.com</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts