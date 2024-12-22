import './../../../global.css'
import { ServiceCardList } from './ServiceCardList/ServiceCardList'
import s from  './style.module.css'


export const Services = () => {
    
    return (
        <section className={s.container}>
            <div className={s.container_header}>
                <h3>Услуги компании</h3>
            </div>
            <ServiceCardList />
        </section>
    )
}

