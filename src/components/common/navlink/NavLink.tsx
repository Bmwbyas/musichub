import Link from "next/link";
import {ReactNode} from "react";
import styles from './NavLink.module.scss'

interface TNavLink {
    cl?: string
    href: string
    children: ReactNode
}

const NavLink: React.FC<TNavLink> = ({href, cl, children}): JSX.Element => {
    return (
        <Link className={styles['link'] + ' ' + cl} href={href}>
            {children}
        </Link>
    );
};

export default NavLink;