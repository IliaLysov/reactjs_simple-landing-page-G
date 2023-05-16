import React from "react"
import styles from './styles.module.scss'

function Header(props) {
    const {setSection} = props



    return (
        <div className={styles.wrapper}>
            <div className={styles.side}>
                <div className={styles.nav} onClick={() => setSection('about')}>О КОМПАНИИ</div>
                <div className={styles.nav} onClick={() => setSection('contacts')}>КОНТАКТЫ</div>
                <div className={styles.nav} onClick={() => setSection('partners')}>ПАРТНЕРЫ</div>
            </div>
            <div className={styles.logo} onClick={() => setSection('cover')}>GARDENER</div>
            <div className={styles.side}>
                <div className={styles.nav} onClick={() => setSection('catalog')}>КАТАЛОГ РАСТЕНИЙ</div>
                <div className={styles.nav}>ПРАЙС-ЛИСТ</div>
                <a href="tel:+79615332333" className={[styles.nav, styles.link].join(' ')}>{'+7 (961) 533-23-33'}</a>
            </div>
        </div>
    )
}

export default Header