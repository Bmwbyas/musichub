'use client'

import {useState} from "react";
import IconBurger from "../../../public/img/icon/burger.svg"
import styles from './BurgerMenu.module.scss'
import Menu from "@/components/burgerMenu/menu/Menu";
import Button from "@/components/common/button/Button";

const BurgerMenu = (): JSX.Element => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const open = (): void => setIsOpen(true)
    const close = (): void => setIsOpen(false)

    return (
        <>
            {!isOpen && <Button cl={styles['button']} typeIcon={"otherIcon"} onClick={open}>
                <IconBurger/>
            </Button>}
            {isOpen && <Menu close={close}/>}
        </>
    );
};

export default BurgerMenu;