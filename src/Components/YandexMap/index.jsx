import React from "react"
import styles from './styles.module.scss'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

function YandexMap() {

    return (
        <YMaps>
            <div className={styles.wrapper}>
                <Map height="100%" width="100%" defaultState={{ center: [46.027830, 38.592226], zoom: 14 }}>
                    <Placemark geometry={[46.027830, 38.592226]}/>
                </Map>
            </div>
        </YMaps>
    )
}

export default YandexMap