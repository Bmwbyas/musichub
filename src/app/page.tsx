import styles from './page.module.scss'
import SubTitle from "@/components/common/subTitle/SubTitle";
import Slider from "@/components/slider/Slider";
import SectionTracks from "@/components/tracks/SectionTracks";


export default function Home(): JSX.Element {


    return (
        <main className={styles['main']}>
            <h1 className={styles['h1']}>МАРКЕТПЛЕЙС ПЕСЕН </h1>
            <SubTitle cl={styles['subTitle']} text={'аудиоальбом ваших эмоций'}/>
            <Slider/>
            <h2 className={styles['h2']}>НАЙДИТЕ ТУ САМУЮ ПЕСНЮ, КОТОРАЯ СТАНЕТ ЧАСТИЧКОЙ ВАС</h2>
            <SectionTracks/>
        </main>
    )
}
