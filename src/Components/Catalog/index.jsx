import React from "react"
import styles from './styles.module.scss'
import catalogPreview from '../../images/catalogPreview.jpg'
import catalogItem1 from '../../images/catalogItem1.jpg'
import catalogItem2 from '../../images/catalogItem2.jpg'
import catalogItem3 from '../../images/catalogItem3.jpg'
import catalogItem4 from '../../images/catalogItem4.jpg'
import catalogItem5 from '../../images/catalogItem5.jpg'
import catalogItem6 from '../../images/catalogItem6.jpg'

function Catalog({modal}) {

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Каталог растений</h1>
            <div className={styles.catalog}>
                <img src={catalogPreview} alt="catalogPreview" className={styles.preview}/>
                <div className={styles.items}>
                    <div className={styles.itemsSide}>
                        <div className={styles.item}>
                            <img src={catalogItem1} alt="catalogItem1" className={styles.itemImg}/>
                            <div className={styles.itemName}>Декоративные</div>
                            <div className={styles.itemBtn} onClick={() => modal(true)}>заказать</div>
                        </div>
                        <div className={styles.item}>
                            <img src={catalogItem2} alt="catalogItem2" className={styles.itemImg}/>
                            <div className={styles.itemName}>Плодовые</div>
                            <div className={styles.itemBtn} onClick={() => modal(true)}>заказать</div>
                        </div>
                        <div className={styles.item}>
                            <img src={catalogItem3} alt="catalogItem3" className={styles.itemImg}/>
                            <div className={styles.itemName}>Цветы</div>
                            <div className={styles.itemBtn} onClick={() => modal(true)}>заказать</div>
                        </div>
                    </div>
                    <div className={styles.itemsSide}>
                        <div className={styles.item}>
                            <img src={catalogItem4} alt="catalogItem4" className={styles.itemImg}/>
                            <div className={styles.itemName}>Вьющиеся</div>
                            <div className={styles.itemBtn} onClick={() => modal(true)}>заказать</div>
                        </div>
                        <div className={styles.item}>
                            <img src={catalogItem5} alt="catalogItem5" className={styles.itemImg}/>
                            <div className={styles.itemName}>Газон</div>
                            <div className={styles.itemBtn} onClick={() => modal(true)}>заказать</div>
                        </div>
                        <div className={styles.item}>
                            <img src={catalogItem6} alt="catalogItem6" className={styles.itemImg}/>
                            <div className={styles.itemName}>Весь ассортимент</div>
                            <div className={styles.itemBtn} onClick={() => modal(true)}>заказать</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Catalog