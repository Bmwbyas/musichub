import {useRef} from "react";
import ArrowRight from "../../../../public/img/icon/arrow-right.svg";
import Cross from '../../../../public/img/icon/cross.svg'
import Favorite from "../../../../public/img/icon/favofite.svg";
import styles from "./Menu.module.scss"
import Button from "@/components/common/button/Button";
import stylesButton from "@/components/common/button/Button.module.scss";
import Navigation from "@/components/common/nav/Navigation";
import useOnClickOutside from "@/utils/hooks/useOnClickOutside";

interface IMenu {
    close: () => void
    isOpen: boolean
}

const Menu: React.FC<IMenu> = ({close, isOpen}) => {

    const ref = useRef(null)

    useOnClickOutside(ref, close)

    const classMenu = !isOpen ? styles['menu'] : styles['menu'] + ' ' + styles['hidden']
    return (
        <div className={classMenu} ref={ref}>
            <Button cl={styles['closeButton']} typeButton={'iconClose'} onClick={close}>
                <Cross/>
            </Button>
            <div>
                <div className={styles['container']}>
                    <Button cl={styles['mobile']} typeButton={"iconButton"}><Favorite/></Button>
                    <Button cl={styles['mobile']} typeButton={"iconArrow"}>
                        <div className={stylesButton['textButtonArrow']}>Купить песню</div>
                        <div className={stylesButton['iconArrow']}><ArrowRight/></div>
                    </Button>
                </div>
                <Navigation close={close} type={"mobile"}/>
            </div>
            <div className={styles['contacts']}>
                <div className={styles['buttonContainer']}>
                    <Button typeButton={"social"}>TG</Button>
                    <Button typeButton={"social"}>INST</Button>
                </div>
                <div className={styles['text']}>
                    <p className={'b1-light'}>8 (999) 999 99 99 </p>
                </div>
                <p className={'b2-regular'}>Адрес адрес адрес адрес адрес</p>
            </div>
        </div>
    );
};

export default Menu;