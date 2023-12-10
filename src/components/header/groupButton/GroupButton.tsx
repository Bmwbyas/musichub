import React, {ReactNode} from "react";
import styles from './GroupButton.module.scss'

interface IGroupButton {
    children: ReactNode
    cl?: string | undefined
}

const GroupButton: React.FC<IGroupButton> = ({children, cl}): JSX.Element => {
    return (
        <div className={styles['container'] + ' ' + cl}>
            {children}
        </div>
    );
};

export default GroupButton;