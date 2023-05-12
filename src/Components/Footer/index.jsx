import React from "react"
import styles from './styles.module.scss'
import gardenerLogo from '../../images/gardenerLogo.png'
import telegram from '../../icons/telegram.svg'
import vk from '../../icons/vk.svg'

function Footer() {

    return (
        <div className={styles.wrapper}>
            <img src={gardenerLogo} alt="logo" />
            <div className={styles.description}>ферма декоративных растений</div>
            <div className={styles.contacts}>
                <div className={styles.contact}>{'Тел: +7 (961) 533-23-33'}</div>
                <div className={styles.contact}>АдресЖ ст.Бриньковская, ул. Горького, 38</div>
            </div>
            <div className={styles.contacts}>
                <div className={styles.contact}>hg-company.ru</div>
                <div className={styles.contact}>почта@gmail.com</div>
            </div>
            <div className={styles.socials}>
                <img src={telegram} alt="telegram" className={styles.social}/>
                <img src={vk} alt="vk" className={styles.social}/>
            </div>
        </div>
    )
}

export default Footer