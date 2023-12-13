import {ComponentProps, ReactNode} from "react";
import styles from './Button.module.scss'

interface IButton extends ComponentProps<"button"> {
    children: ReactNode
    cl?: string | undefined
    typeButton?: 'iconSearch' | 'iconButton' | 'iconArrow' | 'iconClose' | 'social' | 'clients'
}

const Button: React.FC<IButton> = ({children, cl, typeButton, ...restProps}): JSX.Element => {

    // eslint-disable-next-line init-declarations
    let classButton: string | undefined

    switch (typeButton) {
        case "iconSearch":
            classButton = styles['button'] + ' ' + styles['searchButton']
            break
        case "iconButton":
            classButton = styles['button'] + ' ' + styles['iconButton']
            break
        case "iconArrow":
            classButton = styles['button'] + ' ' + styles['arrow']
            break
        case "iconClose":
            classButton = styles['button'] + ' ' + styles['close']
            break
        case "social":
            classButton = styles['button'] + ' ' + styles['social']
            break
        case "clients":
            classButton = styles['button'] + ' ' + styles['clients']
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