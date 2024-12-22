import { MyMap } from './mapWithGeolocation/MyMap'
import s from './style.module.css'



export const Contacts = () => {

    return (
        <section className={s.container}>
            <div className={s.container_header}>
                <h3>Контактная информация</h3>
            </div>
            <div className={s.wrapper}>
                <main className={s.contacts_container}>
                    <div className={s.box_contact}>
                        <h5>Юридический адрес:</h5>
                        <span>614081, Пермский край, г.Пермь, ул.Кронштадтская, д. 47, кв. 78</span>
                    </div>
                    <div className={s.box_contact}>
                        <h5>Электронная почта:</h5>
                        <span><a href="mailto:wood_accounting@mail.ru">wood_accounting@mail.ru</a></span>
                    </div>
                    <div className={s.box_contact}>
                        <h5>Контактный телефон:</h5>
                        <span><a href="tel:+79504416207">+7 950 441-62-07</a></span>
                    </div>
                    <div className={s.box_social}>
                        <h5>Подписывайтесь на нас в социальных сетях </h5>
                        <div className={s.box_messangers}>
                            <a className={s.telegram} href="https://t.me/wood_accounting" target='_blank'>
                                <i className='bx bxl-telegram'></i>
                            </a>
                            <a className={s.vkontakte} href="https://vk.com/fgislkprm" target='_blank'>
                                <i className='bx bxl-vk'></i>
                            </a>
                        </div>
                    </div>
                </main>
                <main className={s.map_container}>
                    <MyMap />
                </main>
            </div>
        </section>
    )
}

