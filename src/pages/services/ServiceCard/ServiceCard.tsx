import { ServicesValue } from '../store/types'
import s from './style.module.css'

export const ServiceCard = ({title, number, items} : {title: string, number: number, items: ServicesValue[]}) => {


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