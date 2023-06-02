import React from "react"
import styles from './styles.module.scss'
import MenuImg from '../../icons/menu.svg'

function Header(props) {
    const {refs, setMenu} = props

    const {aboutSection, catalogSection, contactsSection, partnersSection, coverSection} = refs

    const scroll = (section => {
        section.current.scrollIntoView({ behavior: 'smooth' })
    })

    return (
        <div className={styles.wrapper}>
            <div className={styles.menu} onClick={() => setMenu(true)}>
                <img src={MenuImg} alt="menu" className={styles.menuIcon}/>
            </div>
            <div className={styles.side}>
                <div className={styles.nav} onClick={() => scroll(aboutSection)}>О КОМПАНИИ</div>
                <div className={styles.nav} onClick={() => scroll(contactsSection)}>КОНТАКТЫ</div>
                <div className={styles.nav} onClick={() => scroll(partnersSection)}>ПАРТНЕРЫ</div>
            </div>
            <div className={styles.logo} onClick={() => scroll(coverSection)}>GARDENER</div>
            <div className={styles.side}>
                <div className={styles.nav} onClick={() => scroll(catalogSection)}>КАТАЛОГ РАСТЕНИЙ</div>
                <a href="https://disk.yandex.ru/d/Zx1MxzObhLGEfw" className={styles.nav}>ПРАЙС-ЛИСТ</a>
                <a href="tel:+79615332333" className={[styles.nav, styles.link].join(' ')}>{'+7 (961) 533-23-33'}</a>
            </div>
        </div>
    )
}

export default Header