import s from './style.module.css'


export const addStylesLink = (isActive: boolean, device: string): string => {
    const styleDesctop = s.link
    const styleMobile = s.link_mobile
    if(isActive && (device === 'desc')) {
        return `${styleDesctop} ${s.active}`
    } 
    else if(isActive && (device === 'mobile')) {
        return `${styleMobile} ${s.active_mobile}`
    }
    return device === 'desc' ? styleDesctop : styleMobile
}