import React, { useState } from 'react'
import { ServicesValue } from '../store/types'
import s from './style.module.css'
// import './../../../global.css'

export const ServiceCard = ({title, number, items} : {title: string, number: number, items: ServicesValue[]}) => {
    const [note, setNote] = useState(true)


    return (
        <div className={s.container_card}>
            <header className={s.service_header}>
                <div className={s.service_number}>
                    <span>{number}</span>
                </div>
                <div className={s.service_title}>
                    <h4>{title}</h4>
                </div>
            </header>

            {items.map((item, index) => (
                <div key={index} className={s.card_content}>
                    <div className={s.card_service}>
                        <header className={s.header_card}>
                            <h5>Вид услуги</h5>
                        </header>
                        <div className={s.container_text}>
                            <p>{item.serviceName}</p>
                            {item.serviceDetails && 
                                <ul>
                                    {item.serviceDetails.map((detail, index) =>  (
                                        <li key={index}>{detail}</li>
                                    ))}
                                </ul>
                            }
                        </div>
                    </div>
                    <div className={item.serviceNote ? s.card_price : s.card_price_fullWidth}>
                        <header className={s.header_card}>
                            <h5>Стоимость</h5>
                        </header>
                        <div className={s.container_price}>
                            <span>{item.servicePrice}</span>                            
                        </div>
                    </div>
                    {item.serviceNote && 
                        <div className={s.card_note}>
                            <header className={s.header_card}>
                                <h5>Примечание *</h5>
                            </header>
                            <div className={s.container_note}>
                                <span>{item.serviceNote}</span>
                            </div>
                        </div>
                    }
                </div>
            ))}
        </div>
    )
}
{/* <div className={s.card_service}>
                        <header className={s.header_card}>
                            <h5>Вид услуги</h5>
                        </header>
                        {items.map((item, index) => (
                            <div key={index} className={s.container_text}>
                                <p>{item.serviceName}</p>
                            </div>
                        ))}
                    </div>

                    <div className={item.serviceNote ? s.card_price : s.card_price_fullWidth}>
                        <header className={s.header_card}>
                            <h5>Стоимость</h5>
                        </header>
                        {items.map((item, index) => (
                            <div key={index} className={s.container_price}>
                                <span>{item.servicePrice}</span>
                            </div>
                        ))}
                    </div>

                    {item.serviceNote && 
                        <div className={s.card_note}>
                            <header className={s.header_card}>
                                <h5>Примечание *</h5>
                            </header>
                            <div className={s.container_node}>
                                <span>{item.serviceNote}</span>
                            </div>
                        </div>
                    } */}



{/* <div className={s.card_content}>
                <div className={s.card_service}>
                    <header className={s.header_card}>
                        <h5>Вид услуги</h5>
                    </header>
                    <div className={s.container_text}>
                        <p>Анализ работы заказчика в ЛесЕГАИС (c 1 января 2025  -  в ФГИС ЛК). 
                            Оценка корректности оформления электронных сопроводительных документов на транспортировку древесины, 
                            сделок с древесиной, соблюдения норм  воспроизводимости и норм дебаланса,
                            соблюдение требований к складам древесины и объектам лесопереработки, подача отчетов 
                            по объектам учета. Заключение по итогам аудита.
                        </p>
                    </div>
                </div>
                <div className={note ? s.card_price : s.card_price_fullWidth}>
                    <header className={s.header_card}>
                        <h5>Стоимость</h5>
                    </header>
                    <div className={s.container_price}>
                        <span>От 10000 до 50000 рублей *</span>
                    </div>
                </div>
                {note && 
                    <div className={s.card_note}>
                        <header className={s.header_card}>
                            <h5>Примечание *</h5>
                        </header>
                        <div className={s.container_node}>
                            <span>оценивается исходя из оборота компании за календарный год</span>
                        </div>
                    </div>
                }
            </div> */}