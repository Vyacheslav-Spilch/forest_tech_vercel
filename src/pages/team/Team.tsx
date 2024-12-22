import { CardCooperator } from "./Card/CardCooperator"
import { teamStore } from "./store/teamStore"
import s from './style.module.css'


export const Team = () => {
    return (
        <section className={s.container}>
            <div className={s.container_header}>
                <h3>Сотрудники компании</h3>
            </div>
            {teamStore.map((cooperator) => (
                <CardCooperator key={cooperator.id} cooperator={cooperator}/>
            ))}
        </section>
    )
}

