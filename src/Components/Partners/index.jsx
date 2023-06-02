import React from "react"
import styles from './styles.module.scss'
import hgLogo from '../../images/hgLogo.png'
import manLogo from '../../images/manLogo.png'
import gatLogo from '../../images/gatLogo.png'

function Partners({refLink}) {

    return (
        <div className={styles.wrapper} ref={refLink}>
            <h1 className={styles.title}>Партнеры</h1>
            <div className={styles.container}>
                <img src={hgLogo} alt="logo" className={styles.img}/>
                <img src={manLogo} alt="logo" className={styles.img}/>
                <img src={gatLogo} alt="logo" className={styles.img}/>
            </div>
        </div>
    )
}

export default Partners