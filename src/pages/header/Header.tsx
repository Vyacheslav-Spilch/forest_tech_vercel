import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { NavLink } from 'react-router-dom';
import { Routers } from '../../app/routes/routers';
import './../../../global.css'
import s from './style.module.css'
import { addStylesLink } from './addStylesLink';
import logo from './../../assets/logo_header.jpg'

export const Header = () => {
    const [ open, setOpen ] = useState(false)


    
    
    return (
        <Box sx={{ flexGrow: 1 }}>
            <div className={`${s.wrapper_menu} ${open && s.wrapper_active}`}></div>
            <AppBar style={{ backgroundColor: 'rgba(30, 29, 29, 0.842)', zIndex: 10}} position="fixed" className={s.appBar}>
                <Toolbar className={s.toolBar}>
                    <div className={s.container_logo}> 
                        <img src={logo} className={s.logo_header} />
                        <div className={s.container_title}>
                            <h1>ООО Лесные технологии</h1>
                            <span>«Комплексные решения для лесного бизнеса»</span>
                        </div>
                    </div>
                    <div className={s.container_menu_desc}>
                        <NavLink className={({isActive}) => addStylesLink(isActive, 'desc')} to={Routers.MAIN}>Главная</NavLink>
                        <NavLink className={({isActive}) => addStylesLink(isActive, 'desc')} to={Routers.TEAM}>Команда</NavLink>
                        <NavLink className={({isActive}) => addStylesLink(isActive, 'desc')} to={Routers.SERVICES}>Услуги</NavLink>
                        <NavLink className={({isActive}) => addStylesLink(isActive, 'desc')} to={Routers.CLIENTS}>Наши заказчики</NavLink>
                        <NavLink className={({isActive}) => addStylesLink(isActive, 'desc')} to={Routers.CONTACTS}>Контакты</NavLink>
                        <NavLink className={({isActive}) => addStylesLink(isActive, 'desc')} to={Routers.REVIEWS}>Отзывы</NavLink>
                    </div>
                        <button onClick={() => setOpen(prev => !prev)} className={`material-symbols-outlined ${s.btn_menu_open}`}>menu</button>
                </Toolbar>
            </AppBar>
            <div className={`${s.side_menu} ${open && s.open}`}>
                <ul>
                    <button onClick={() => setOpen(false)} className={`material-symbols-outlined menu-btn_mobile ${s.menu_btn_close}`}>arrow_forward</button>
                    <NavLink onClick={() => setOpen(false)} className={({isActive}) => addStylesLink(isActive, 'mobile')} to={Routers.MAIN}>Главная</NavLink>
                    <NavLink onClick={() => setOpen(false)} className={({isActive}) => addStylesLink(isActive, 'mobile')} to={Routers.TEAM}>Команда</NavLink>
                    <NavLink onClick={() => setOpen(false)} className={({isActive}) => addStylesLink(isActive, 'mobile')} to={Routers.SERVICES}>Услуги</NavLink>
                    <NavLink onClick={() => setOpen(false)} className={({isActive}) => addStylesLink(isActive, 'mobile')} to={Routers.CLIENTS}>Наши заказчики</NavLink>
                    <NavLink onClick={() => setOpen(false)} className={({isActive}) => addStylesLink(isActive, 'mobile')} to={Routers.CONTACTS}>Контакты</NavLink>
                    <NavLink onClick={() => setOpen(false)} className={({isActive}) => addStylesLink(isActive, 'mobile')} to={Routers.REVIEWS}>Отзывы</NavLink>
                </ul>
            </div>
        </Box>
    )
}

