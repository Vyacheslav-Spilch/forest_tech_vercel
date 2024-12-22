import s from './style.module.css'
import ins from './images/ИПКЛХ.jpg'
import cir from './images/ЦИР.png'
import urga from './images/Югор.jpg'
import kovrov from  './images/Ковров.jpg'
import zelen from './images/Зеленодольский.jpg'
import delline from './images/Дел.jpg'
import gkforest from './images/GK.jpg'

export const Clients = () => {
    return (
        <section className={s.container}>
            <div className={s.container_header}>
                <h3>Наши заказчики</h3>
            </div>
            <main className={s.container_clients}>
                <div className={s.card_client}> 
                    <img src={urga} alt="АО «Югорский лесопромышленный холдинг»" />
                    <div className={s.info_client}>
                        <h3 className={s.gradient_text}>АО «Югорский лесопромышленный холдинг»</h3>
                        <p>
                            - ведущий участник рынка лесной и деревообрабатывающей промышленности России. 
                        </p>
                    </div>
                </div>
                <div className={s.card_client}> 
                    <img src={kovrov} alt="ОАО «Ковровский лесокомбинат»" />
                    <div className={s.info_client}>
                        <h3 className={s.gradient_text}>ОАО «Ковровский лесокомбинат»</h3>
                        <p>- является поставщиком сырья для крупнейших деревоперерабатывающих предприятий Центрального федерального округа.
                        </p>
                    </div>
                </div>
                <div className={s.card_client}> 
                    <img src={zelen} alt="ГБУ «Зеленодольский опытный лесхоз»" />
                    <div className={s.info_client}>
                        <h3 className={s.gradient_text}>ГБУ «Зеленодольский опытный лесхоз»</h3>
                        <p>- учреждение занимается лесным хозяйством, научными исследованиями и практическими разработками в области лесоводства.
                        </p>
                    </div>
                </div>
                <div className={s.card_client}> 
                    <img src={cir} alt="Ц.И.Р «Деловое образование" />
                    <div className={s.info_client}>
                        <h3 className={s.gradient_text}>Ц.И.Р «Деловое образование»</h3>
                        <p>- компания, специализирующаяся на предоставлении высококачественных деловых решений для бизнеса.</p>
                    </div>
                </div>
                <div className={s.card_client}> 
                    <img src={delline} alt="ГК «Деловые Линии»" />
                    <div className={s.info_client}>
                        <h3 className={s.gradient_text}>ГК «Деловые Линии»</h3>
                        <p>- группа компаний «Деловые Линии» является одной из крупнейших транспортно-логистических компаний России.
                        </p>
                    </div>
                </div>
                <div className={s.card_client}> 
                    <img src={ins} alt="«Институт повышения квалификации работников лесного хозяйства» (ФАУ ДПО ИПКЛХ)" />
                    <div className={s.info_client}>
                        <h3 className={s.gradient_text}>«ФАУ ДПО ИПКЛХ»</h3>
                        <p>- один из ведущих российских образовательных центров, повышении квалификации и профессиональной переподготовке работников лесного хозяйства.
                        </p>
                    </div>
                </div>
                <div className={s.card_client}> 
                    <img src={gkforest} alt="ООО «ГК-Форест»" />
                    <div className={s.info_client}>
                        <h3 className={s.gradient_text}>ООО «ГК-Форест»</h3>
                        <p>- динамично развивающаяся компания, специализирующаяся на лесопереработке и производстве продукции из древесины. 
                        </p>
                    </div>
                </div>
            </main>
        </section>
    )
}

