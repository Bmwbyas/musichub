import Link from "next/link";
import ArrowRight from "../../../public/img/icon/arrow-right.svg";
import Favorite from "../../../public/img/icon/favofite.svg";
import Search from "../../../public/img/icon/search.svg";
import styles from './Header.module.scss'
import BurgerMenu from "@/components/burgerMenu/BurgerMenu";
import Button from "@/components/common/button/Button";
import stylesButton from "@/components/common/button/Button.module.scss";
import Navigation from "@/components/common/nav/Navigation";
import GroupButton from "@/components/header/groupButton/GroupButton";

const Header = (): JSX.Element => {
    return (
        <header className={styles['header']}>

            <Link href={'/'} className={styles['logo']}/>

            <Navigation type={"desc"}/>

            <GroupButton>
                <Button cl={styles['mobile']} typeButton={"iconButton"}><Favorite/></Button>
                <BurgerMenu/>
                <Button typeButton={"iconSearch"}><Search/></Button>
                <Button cl={styles['mobile']} typeButton={"iconArrow"}>
                    <div className={stylesButton['textButtonArrow']}>Купить песню</div>
                    <div className={stylesButton['iconArrow']}><ArrowRight/></div>
                </Button>
            </GroupButton>

        </header>
    );
};

export default Header;