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
            <Button cl={styles['button']} disabled={isOpen} typeButton={"iconButton"} onClick={open}>
                <IconBurger/>
            </Button>
            <Menu isOpen={isOpen} close={close}/>
        </>
    );
};

export default BurgerMenu;