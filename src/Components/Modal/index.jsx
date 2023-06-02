import React from "react"
import styles from './styles.module.scss'
import {Form} from '../'

function Modal({modal}) {

    return (
        <div className={styles.wrapper} onClick={() => modal(false)}>
            <div className={styles.container} onClick={e => e.stopPropagation()}>
                <Form modal={true} />
            </div>
        </div>
    )
}

export default Modal