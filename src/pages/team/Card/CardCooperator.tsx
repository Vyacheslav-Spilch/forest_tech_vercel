import * as React from 'react';
import s from './style.module.css'
import { СooperatorInfo } from './../store/types'



interface CardCooperatorProps {
    cooperator: СooperatorInfo
}

export const CardCooperator: React.FC<CardCooperatorProps> = ({ cooperator }) => {
    return (
        <section className={s.card_container}>
            <img src={cooperator.image} alt="" />
            <div className={s.container_info}>
                <h5>{cooperator.fullName}</h5>
                <ul>
                    <li>{cooperator.experience}</li>
                </ul>
            </div>
        </section>
    )
}
