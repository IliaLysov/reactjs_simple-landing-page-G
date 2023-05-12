import React from "react"
import styles from './styles.module.scss'

function Form({modal}) {

    return (
        <div className={styles.wrapper} onClick={() => modal(false)}>
            <div className={styles.container} onClick={e => e.stopPropagation()}>
            
            </div>
        </div>
    )
}

export default Form