import React from "react"
import styles from './styles.module.scss'

function Header() {

    return (
        <div className={styles.wrapper}>
            <div className={styles.side}>
                <div className={styles.nav}>О КОМПАНИИ</div>
                <div className={styles.nav}>КОНТАКТЫ</div>
                <div className={styles.nav}>ПАРТНЕРЫ</div>
            </div>
            <div className={styles.logo}>GARDENER</div>
            <div className={styles.side}>
                <div className={styles.nav}>КАТАЛОГ РАСТЕНИЙ</div>
                <div className={styles.nav}>ПРАЙС-ЛИСТ</div>
                <div className={styles.nav}>{'+7 (961) 533-23-33'}</div>
            </div>
        </div>
    )
}

export default Header