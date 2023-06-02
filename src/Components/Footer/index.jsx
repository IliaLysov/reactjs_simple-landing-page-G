import React from "react"
import styles from './styles.module.scss'
import gardenerLogo from '../../images/gardenerLogo.png'
import telegram from '../../icons/telegram.svg'
import vk from '../../icons/vk.svg'

function Footer() {

    return (
        <div className={styles.wrapper}>
            <div className={styles.horizon}>
                <img src={gardenerLogo} alt="logo" className={styles.logo}/>
                <div className={styles.description}>ферма декоративных растений</div>
            </div>
            <div className={styles.contacts}>
                <div className={styles.contact}>{'Тел: +7 (961) 533-23-33'}</div>
                <div className={styles.contact}>АдресЖ ст.Бриньковская, ул. Горького, 38</div>
            </div>
            <div className={styles.contacts}>
                <div className={styles.contact}>hg-company.ru</div>
                <div className={styles.contact}>почта@gmail.com</div>
            </div>
            <div className={styles.socials}>
                <a href="https://t.me/home_and_garden_company" className={styles.link}>
                    <img src={telegram} alt="telegram" className={styles.social}/>
                </a>
                <a href="https://vk.com/hg_company" className={styles.link}>
                    <img src={vk} alt="vk" className={styles.social}/>
                </a>
            </div>
        </div>
    )
}

export default Footer