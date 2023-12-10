import styles from "./Menu.module.scss"
import Navigation from "@/components/common/nav/Navigation";

interface IMenu {
    close: () => void
}

const Menu: React.FC<IMenu> = ({close}) => {
    return (
        <div className={styles['menu']} onClick={close}>
            <Navigation type={"mobile"}/>
        </div>
    );
};

export default Menu;