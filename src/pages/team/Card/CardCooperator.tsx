import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import image from './../../../assets/cooperator.webp'
import s from './style.module.css'
import { СooperatorInfo } from './../store/types'



interface CardCooperatorProps {
    cooperator: СooperatorInfo
}

export const CardCooperator: React.FC<CardCooperatorProps> = ({ cooperator }) => {
    return (
        <section className={s.card_container}>
            <img src={cooperator.image || image} alt="" />
            <div className={s.container_info}>
                <h5>{cooperator.fullName}</h5>
                <ul>
                    {/* <li className={s.list_title}>{cooperator.position}</li> */}
                    <li>{cooperator.experience}</li>
                </ul>
            </div>
        </section>
    )
}
