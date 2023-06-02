import React from "react"
import styles from './styles.module.scss'
import plant1 from '../../images/plant1.png'
import plant2 from '../../images/plant2.png'
import plant3 from '../../images/plant3.png'
import plant4 from '../../images/plant4.png'
import description from '../../images/description.png'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'

function Application({modal}) {

    const tabletBottom = window.innerWidth <= 720

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Акции / Специальные предложения</h1>
            <div className={styles.container}>
                {tabletBottom ? 
                <Splide options={{width: '100%', pagination: false}}>
                    <SplideSlide options={{display: 'flex', justifyContent: 'center'}}>
                        <div className={styles.item}>
                            <img src={plant1} alt="plant1" className={styles.itemImg}/>
                            <div className={styles.itemName}>Сосна</div>
                            <div className={styles.itemBtn} onClick={() => modal(true)}>заказать</div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className={styles.item}>
                            <img src={plant2} alt="plant2" className={styles.itemImg}/>
                            <div className={styles.itemName}>Дерево</div>
                            <div className={styles.itemBtn} onClick={() => modal(true)}>заказать</div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className={styles.item}>
                            <img src={plant3} alt="plant3" className={styles.itemImg}/>
                            <div className={styles.itemName}>Дерево</div>
                            <div className={styles.itemBtn} onClick={() => modal(true)}>заказать</div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className={styles.item}>
                            <img src={plant4} alt="plant4" className={styles.itemImg}/>
                            <div className={styles.itemName}>Туя</div>
                            <div className={styles.itemBtn} onClick={() => modal(true)}>заказать</div>
                        </div>
                    </SplideSlide>
                </Splide>
                :
                <>
                    <div className={styles.item}>
                        <img src={plant1} alt="plant1" className={styles.itemImg}/>
                        <div className={styles.itemName}>Сосна</div>
                        <div className={styles.itemBtn} onClick={() => modal(true)}>заказать</div>
                    </div>
                    <div className={styles.item}>
                        <img src={plant2} alt="plant2" className={styles.itemImg}/>
                        <div className={styles.itemName}>Дерево</div>
                        <div className={styles.itemBtn} onClick={() => modal(true)}>заказать</div>
                    </div>
                    <div className={styles.item}>
                        <img src={plant3} alt="plant3" className={styles.itemImg}/>
                        <div className={styles.itemName}>Дерево</div>
                        <div className={styles.itemBtn} onClick={() => modal(true)}>заказать</div>
                    </div>
                    <div className={styles.item}>
                        <img src={plant4} alt="plant4" className={styles.itemImg}/>
                        <div className={styles.itemName}>Туя</div>
                        <div className={styles.itemBtn} onClick={() => modal(true)}>заказать</div>
                    </div>
                </>
                }
            </div>
            <img src={description} alt="description" className={styles.description}/>
        </div>
    )
}

export default Application