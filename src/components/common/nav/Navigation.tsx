import styles from "./Navigation.module.scss"
import {dataNav} from "@/components/common/nav/data";
import NavLink from "@/components/common/navlink/NavLink";

interface TNav {
    type: 'desc' | 'mobile'
    close?: (() => void) | undefined
}

const Navigation: React.FC<TNav> = ({type, close}): JSX.Element => {
    // eslint-disable-next-line init-declarations
    let classNav: string | undefined

    switch (type) {
        case "desc":
            classNav = styles['nav'] + ' ' + styles['desc']
            break
        case "mobile":
            classNav = styles['nav'] + ' ' + styles['mobile']
            break
        default:
            classNav = styles['nav']
    }
    return (
        <nav className={classNav}>
            {dataNav.map((el, index) => <NavLink key={index} close={close} href={el.href}>{el.text}</NavLink>)}
        </nav>
    );

};

export default Navigation;