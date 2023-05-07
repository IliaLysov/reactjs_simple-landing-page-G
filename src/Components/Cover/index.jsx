import React from "react"
import styles from './styles.module.scss'
import coverLogo from '../../images/coverLogo.png'

function Cover() {

    return (
        <div className={styles.wrapper}>
            <img src={coverLogo} alt="cover" className={styles.logo} />
            <div className={styles.description}>ФЕРМА ДЕКОРАТИВНЫХ РАСТЕНИЙ</div>
        </div>
    )
}

export default Cover