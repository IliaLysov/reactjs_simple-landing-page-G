import React from "react"
import styles from './styles.module.scss'
import cross from '../../icons/cross.svg'
import telegram from '../../icons/telegram.svg'
import vk from '../../icons/vk.svg'

function Menu(props) {
    const {refs, setMenu} = props

    const {aboutSection, catalogSection, contactsSection, partnersSection, coverSection} = refs

    const scroll = (section => {
        section.current.scrollIntoView({ behavior: 'smooth' })
    })

    return(
        <div className={styles.wrapper}>
            <div className={styles.top}>
                <p className={styles.title}>МЕНЮ</p>
                <div className={styles.close} onClick={() => setMenu(false)}>
                    <img src={cross} alt="close" />
                </div>
            </div>
            <div className={styles.navigation}>
                <div className={styles.nav} onClick={() => {scroll(coverSection); setMenu(false)}}>Главная</div>
                <div className={styles.nav} onClick={() => {scroll(aboutSection); setMenu(false)}}>О компании</div>
                <div className={styles.nav} onClick={() => {scroll(catalogSection); setMenu(false)}}>Каталог растений</div>
                <a href="https://disk.yandex.ru/d/Zx1MxzObhLGEfw" className={styles.nav}>Прайс-лист</a>
                <div className={styles.nav} onClick={() => {scroll(partnersSection); setMenu(false)}}>Партнеры</div>
                <div className={styles.nav} onClick={() => {scroll(contactsSection); setMenu(false)}}>Контакты</div>
            </div>
            <a href="tel:+79615332333" className={styles.phone}>{'+7 (961) 533-23-33'}</a>
            <div className={styles.socials}>
                <img src={telegram} alt="telegram" className={styles.social}/>
                <img src={vk} alt="vk" className={styles.social}/>
            </div>
            <div className={styles.name} onClick={() => {scroll(coverSection); setMenu(false)}}>GARDENER</div>
            <div className={styles.description}>ФЕРМА ДЕКОРАТИВНЫХ РАСТЕНИЙ</div>
        </div>
    )
}

export default Menu