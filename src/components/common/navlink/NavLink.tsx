import Link from "next/link";
import {ReactNode} from "react";
import styles from './NavLink.module.scss'

interface TNavLink {
    cl?: string
    close?: (() => void) | undefined
    href: string
    children: ReactNode
}

const NavLink: React.FC<TNavLink> = ({href, cl, close, children}): JSX.Element => {
    return (
        <Link className={styles['link'] + ' ' + cl} href={href} onClick={close}>
            {children}
        </Link>
    );
};

export default NavLink;