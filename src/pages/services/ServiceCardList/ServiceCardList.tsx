import React from 'react'
import { ServiceCard } from '../ServiceCard/ServiceCard'
import { serviceList } from '../store/servicesList'
import s from './style.module.css'

export const ServiceCardList = () => {
    const [ services ] = React.useState(serviceList)
    

    return (
        <div className={s.container_list}>
            <ServiceCard 
                title="Аудит компании" 
                number={1} 
                items={services.audit}
            />
            <ServiceCard 
                title="Обучение сотрудников организации" 
                number={2} 
                items={services.education}
            />
            <ServiceCard 
                title="Сопровождение организации в ФГИС ЛК" 
                number={3} 
                items={services.accompaniment}
            />
            <ServiceCard 
                title="Оказание юридических услуг (консультация и составление правовых документов)" 
                number={4} 
                items={services.legal_consultation}
            />
            <ServiceCard 
                title="Оказание юридических услуг (оказание юридической помощи по судебным делам)" 
                number={5} 
                items={services.legal_assistance}
            />
        </div>
    )
}

