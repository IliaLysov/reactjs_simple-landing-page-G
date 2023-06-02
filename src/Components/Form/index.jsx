import React, {useRef, useState} from "react"
import styles from './styles.module.scss'
import emailjs from '@emailjs/browser'

function Form({modal}) {
    const form = useRef();
    const [formStatus, setFormStatus] = useState('form')

    const sendEmail = (e) => {
        e.preventDefault();
        setFormStatus('loading')

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
        .then((result) => {
            setFormStatus(result.text)
            console.log(result);
        }, (error) => {
            alert(error.text)
            setFormStatus('form')
            console.log(error);
        });
    };

    return (
        <div className={styles.wrapper}>
            {formStatus === 'form' &&
                <form className={styles.form} ref={form} onSubmit={sendEmail}>
                    {!modal && <h2 className={styles.formTitle}>Связаться с нами</h2>}
                    <div className={modal ? styles.vertical : styles.horizon}>
                        <div className={[styles.side, modal && styles.modal].join(' ')}>
                            <div className={styles.inputWrapper}>
                                <label htmlFor="name">Имя</label>
                                <input type="text" id="name" name="name" placeholder="Александр" required/>
                            </div>
                            <div className={styles.inputWrapper}>
                                <label htmlFor="phone">Номер телефона</label>
                                <input type="tel" id="phone" name="phone" placeholder="+79162587835" required/>
                            </div>
                            <div className={styles.inputWrapper}>
                                <label htmlFor="comment">Комментарий</label>
                                <textarea rows="4" type="text" id="comment" name="comment" placeholder="..."/>
                            </div>
                        </div>
                        <div className={[styles.side, modal && styles.modal].join(' ')}>
                            <div className={styles.alignment}>
                                <input type="checkbox" id={modal ? 'alignmentModal' : 'alignment'} name='alignment' className={styles.checkbox} required/>
                                <label htmlFor={modal ? 'alignmentModal' : 'alignment'}>Даю согласие  на обработку персональных данных</label>
                            </div>
                            <input type="submit" value="ОТПРАВИТЬ ЗАЯВКУ" className={styles.submitBtn}/>
                        </div>
                    </div>
                </form>
            }
            {formStatus === 'loading' &&
                <div className={styles.loading}>Отправка...</div>
            }
            {formStatus === 'OK' &&
                <div className={styles.result}>Заявка успешно отправлена</div>
            }
        </div>
    )
}

export default Form