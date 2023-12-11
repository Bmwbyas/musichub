import styles from './SubTitle.module.scss'

interface ISubTitle {
    text: string
    cl?: string | undefined
}

const SubTitle: React.FC<ISubTitle> = ({text, cl}): JSX.Element => {
    return (
        <p className={styles['subTitle'] + ' ' + cl}>
            <span>[</span> {text} <span>]</span>
        </p>
    );
};

export default SubTitle;