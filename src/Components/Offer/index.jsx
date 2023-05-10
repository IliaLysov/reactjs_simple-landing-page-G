import React from "react"
import styles from './styles.module.scss'

function Offer() {

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Купить растения</h1>
            <div className={styles.container}>
                <div className={styles.orderBtn}>заказать онлайн</div>
                <form className={styles.form} onSubmit={e => {e.preventDefault(); console.log(e)}} >
                    <h2 className={styles.formTitle}>Связаться с нами</h2>
                    <div className={styles.horizon}>
                        <div className={styles.side}>
                            <div className={styles.inputWrapper}>
                                <label htmlFor="name">Имя</label>
                                <input type="text" id="name" name="name" placeholder="Александр"/>
                            </div>
                            <div className={styles.inputWrapper}>
                                <label htmlFor="phone">Номер телефона</label>
                                <input type="tel" id="phone" name="phone" placeholder="+79002688540"/>
                            </div>
                            <div className={styles.inputWrapper}>
                                <label htmlFor="comment">Комментарий</label>
                                <textarea rows="4" type="text" id="comment" name="comment" placeholder="..."/>
                            </div>
                        </div>
                        <div className={styles.side}>
                            <div className={styles.alignment}>
                                <input type="checkbox" id="alignment" name="alignment" className={styles.checkbox}/>
                                <label htmlFor="alignment">Даю согласие  на обработку персональных данных</label>
                            </div>
                            <input type="submit" value="ОТПРАВИТЬ ЗАЯВКУ" className={styles.submitBtn}/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Offer