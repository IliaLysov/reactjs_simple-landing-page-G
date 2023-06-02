import React, {useState} from "react"
import styles from './styles.module.scss'
import catalogPreview from '../../images/catalogPreview.jpg'
import catalogItem1 from '../../images/catalogItem1.jpg'
import catalogItem2 from '../../images/catalogItem2.jpg'
import catalogItem3 from '../../images/catalogItem3.jpg'
import catalogItem4 from '../../images/catalogItem4.jpg'
import catalogItem5 from '../../images/catalogItem5.jpg'
import catalogItem6 from '../../images/catalogItem6.jpg'
import arrow from '../../icons/arrow.svg'

function Catalog({modal, refLink}) {
    const [active, setActive] = useState(0)

    const tabletBottom = window.innerWidth <= 720

    const item = (img, name, index) => (
        <div className={styles.item}>
            <img src={img} alt="img" className={[styles.itemImg, active === index && styles.active].join(' ')}/>
            <div className={styles.itemBlock} onClick={() => setActive(prev => prev === index ? 0 : index)}>
                <div className={styles.itemName}>{name}</div>
                {tabletBottom && <img src={arrow} alt="arrow" className={[styles.arrow, active === index && styles.active].join(' ')}/>}
            </div>
            <div className={[styles.btnWrapper, active === index && styles.active].join(' ')}>
                <div className={styles.itemBtn} onClick={() => modal(true)}>заказать</div>
            </div>
        </div>
    )

    return (
        <div className={styles.wrapper} ref={refLink}>
            <h1 className={styles.title}>Каталог растений</h1>
            <div className={styles.catalog}>
                {!tabletBottom && <img src={catalogPreview} alt="catalogPreview" className={styles.preview}/>}
                <div className={styles.items}>
                    <div className={styles.itemsSide}>
                        {item(catalogItem1, 'Декоративные', 1)}
                        {item(catalogItem2, 'Плодовые', 2)}
                        {item(catalogItem3, 'Цветы', 3)}
                    </div>
                    <div className={styles.itemsSide}>
                        {item(catalogItem4, 'Вьющиеся', 4)}
                        {item(catalogItem5, 'Газон', 5)}
                        {item(catalogItem6, 'Весь ассортимент', 6)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Catalog