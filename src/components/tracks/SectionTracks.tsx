import styles from './Tracks.module.scss'
import HeadFilter from "@/components/tracks/components/HeadFilter";
import SideFilter from "@/components/tracks/components/SideFilter";
import Tracks from "@/components/tracks/components/Tracks";

const SectionTracks = (): JSX.Element => {
    return (
        <div className={styles['tracks']}>
            <HeadFilter/>
            <SideFilter/>
            <Tracks/>
        </div>
    );
};

export default SectionTracks;