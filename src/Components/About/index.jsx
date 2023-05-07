import React from "react"
import styles from './styles.module.scss'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import aboutImg1 from '../../images/aboutImg1.jpg'
import '@splidejs/react-splide/css'

function About() {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>О питомнике</h1>
            <div className={styles.container}>
                <div className={styles.images}>
                    <Splide>
                        <SplideSlide>
                            <img src={aboutImg1} alt="about1" className={styles.image}/>
                        </SplideSlide>
                        <SplideSlide>
                            <img src={aboutImg1} alt="about1" className={styles.image}/>
                        </SplideSlide>
                    </Splide>
                </div>
                <div className={styles.side}>
                    <div className={styles.achievements}>
                        <div className={styles.achieve}>Более 1000 высаженных растений</div>
                        <div className={styles.achieve}>Более 100 довольных клиентов</div>
                        <div className={styles.achieve}>Более 300 видов в наличии</div>
                    </div>
                    <p className={styles.description}>GARDENER - Питомник декоративных растений, плодовых деревьев, кустарников и газонной травы, который находится в станице Бриньковская Краснодарского края. Питомник существует с 2007 года и на сегодняшний день насчитывает более 1000 видов растений. Собственное производство позволяет предложить посадочный материал, адаптированный к климату, а также конкурентоспособные цены, при этом качество растений соответствует европейским стандартам.</p>
                </div>
            </div>
        </div>
    )
}

export default About