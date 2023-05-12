import React from "react"
import styles from './styles.module.scss'
import hgLogo from '../../images/hgLogo.png'
import manLogo from '../../images/manLogo.png'
import gatLogo from '../../images/gatLogo.png'
import Footer from "../Footer"

function Partners() {

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Партнеры</h1>
            <div className={styles.container}>
                <img src={hgLogo} alt="logo" />
                <img src={manLogo} alt="logo" />
                <img src={gatLogo} alt="logo" />
            </div>
            <Footer/>
        </div>
    )
}

export default Partners