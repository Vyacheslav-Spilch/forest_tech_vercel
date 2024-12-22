import { СooperatorInfo } from './types'
import Andreychuk from './../images/Andreychuk.jpg.png'
import Drokov from './../images/Drokov.jpg'
import Spilch from './../images/Spilch.jpg'
import Glovats from './../images/Glovats.jpg'
import Sosnin from './../images/Sosnin.jpg'



export const teamStore: СooperatorInfo[] = [
    {
        id: 1,
        fullName: "Андрейчук Юрий Николаевич",
        position: "Руководитель компании",
        experience: `Руководитель высшего уровня, в лесной отрасли с детства. Занимается организацией работ по заготовке и обороту древесины, строительству лесной инфраструктуры. Также, в сферу компетенций входит комплексный аудит лесных компаний. Имеет обширный опыт работы в регионах Приволжья, Дальнего Востока и Северо-Запада нашей страны. На текущий момент является генеральным директором ООО "К-Лес" - организации, занимающейся лесообеспечением ЦБК Кама`,
        image: Andreychuk
    },
    {
        id: 2,
        fullName: "Дроков Михаил Константинович",
        position: "Директор",
        experience: `Управленец лесным фондом и организацией использования лесов. Обширный опыт работы на госслужбе (Министерство промышленности и торговли Пермского края), а также в бизнес-структурах: ПЦБК, Капитал-3, ЦБК Кама. Обучался по программам дополнительного профессионального образования в Московской школе управления «СКОЛКОВО». На текущий момент замещает должность заместителя генерального директора ООО "К-Лес" - организации, занимающейся лесообеспечением ЦБК Кама"`,
        image: Drokov
    },
    {
        id: 3,
        fullName: "Спильчевский Владислав Олегович",
        position: "Заместитель директора",
        experience: `Минприроды Пермского края, Федеральное агентство лесного хозяйства, ООО "К-Лес".`,
        image: Spilch
    },
    {
        id: 4,
        fullName: "Главатских Оксана Геннадьевна",
        position: "Заместитель директора по правовым вопросам",
        experience: `Юрист высшего класса. В лесной сфере более 10 лет. Имела опыт работы в ПЦБК в должности начальника отдела судебно-претензионной работы, с 2024 года является заместителем генерального директора ООО "К-Лес" по правовым вопросам. Имеет богатый опыт в оказании юридической помощи по судебным делам.`,
        image: Glovats
    },
    {   
        id: 5,
        fullName: "Соснин Юрий",
        position: "Специалист по взаимодействию с органами государственной власти",
        experience: `Профессионал по взаимодействию с государственными органами. В лесной сфере 8 лет, являлся специалистом Центр космических технологий и услуг, занимался проектной деятельностью. На текущий момент занимает должность GR -менеджера ЦБК Кама`,
        image: Sosnin
    },
]