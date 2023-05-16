import React from "react"
import styles from './styles.module.scss'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import aboutImg1 from '../../images/aboutImg1.jpg'
import aboutImg2 from '../../images/aboutImg2.jpg'
import aboutImg3 from '../../images/aboutImg3.jpg'
import aboutImg4 from '../../images/aboutImg4.jpg'
import aboutImg5 from '../../images/aboutImg5.jpg'
import aboutImg6 from '../../images/aboutImg6.jpg'
import '@splidejs/react-splide/css'

function About({refLink}) {

    return (
        <div className={styles.wrapper} ref={refLink}>
            <h1 className={styles.title}>О питомнике</h1>
            <div className={styles.container}>
                <div className={styles.images}>
                    <Splide>
                        <SplideSlide>
                            <img src={aboutImg1} alt="about1" className={styles.image}/>
                        </SplideSlide>
                        <SplideSlide>
                            <img src={aboutImg2} alt="about2" className={styles.image}/>
                        </SplideSlide>
                        <SplideSlide>
                            <img src={aboutImg3} alt="about3" className={styles.image}/>
                        </SplideSlide>
                        <SplideSlide>
                            <img src={aboutImg4} alt="about4" className={styles.image}/>
                        </SplideSlide>
                        <SplideSlide>
                            <img src={aboutImg5} alt="about5" className={styles.image}/>
                        </SplideSlide>
                        <SplideSlide>
                            <img src={aboutImg6} alt="about6" className={styles.image}/>
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