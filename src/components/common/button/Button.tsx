import {ComponentProps, ReactNode} from "react";
import styles from './Button.module.scss'

interface IButton extends ComponentProps<"button"> {
    children: ReactNode
    cl?: string | undefined
    typeIcon?: 'search' | 'otherIcon' | 'arrow' | undefined
}

const Button: React.FC<IButton> = ({children, cl, typeIcon, ...restProps}): JSX.Element => {

    // eslint-disable-next-line init-declarations
    let classButton: string | undefined

    switch (typeIcon) {
        case "search":
            classButton = styles['button'] + ' ' + styles['searchButton']
            break
        case "otherIcon":
            classButton = styles['button'] + ' ' + styles['otherIcon']
            break
        case "arrow":
            classButton = styles['button'] + ' ' + styles['arrow']
            break
        default:
            classButton = styles['button']

    }

    return (
        <button className={styles['button'] + " " + classButton + ' ' + cl} {...restProps}>
            {children}
        </button>
    );
};

export default Button;