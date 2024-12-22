import React, { useState } from 'react';

import s from './../style.module.css'

export const MyMap = () => {

    const [ isLoadingMap, setLoadingMap] = useState(true)
    const mapSrc = "https://yandex.ru/map-widget/v1/?um=constructor%3A53e1c98cc9532e5577020cd2460e2a8e0b63d557a8f2a530a48a2463a0a08131&amp;source=constructor"; // Пример URL карты

    const handleLoading = () => {
        setLoadingMap(false)
    }

    return (
            <div style={{ position: 'relative', width: '100%'}} className={s.box_iframe}>
                <a 
                    href="https://yandex.ru/maps/50/perm/?utm_medium=mapframe&utm_source=maps" 
                    style={{
                        color:"#eee", 
                        fontSize:"12px", 
                        position: "absolute", 
                        top:"0px"
                    }}>
                        Пермь
                </a>
                <a href="https://yandex.ru/maps/geo/kronshtadtskaya_ulitsa_47_podyezd_1/3260349337/?ll=56.200832%2C57.998624&utm_medium=mapframe&utm_source=maps&z=18.56" style={{color:"#eee", fontSize: "12px", position:"absolute", top:"14px"}}>Кронштадтская улица, 47, подъезд 1 — Яндекс Карты</a>
                <iframe 
                    src="https://yandex.ru/map-widget/v1/?ll=56.200832%2C57.998624&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxODQyMTQ5OTIxElXQoNC-0YHRgdC40Y8sINCf0LXRgNC80YwsINCa0YDQvtC90YjRgtCw0LTRgtGB0LrQsNGPINGD0LvQuNGG0LAsIDQ3LCDQv9C-0LTRitC10LfQtCAxIgoN7s1gQhWT_mdCMJn305IM&z=18.56" 
                    className={s.map}
                    width="100%" 
                    height="100%"  
                    onLoad={handleLoading}
                    style={{
                        position:"relative",  
                        borderRadius: '15px', 
                        border: '3px solid #00693e'
                    }}>
                </iframe>
            </div>     
    );
};











