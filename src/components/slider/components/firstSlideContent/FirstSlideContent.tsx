import Image from "next/image";
import Karnaval from "../../../../../public/img/artist/carnaulova.png";
import Mavrin from "../../../../../public/img/artist/carnaulova.png";
import styles from './FirstSlideContent.module.scss'
import Button from "@/components/common/button/Button";
import {clients} from "@/components/slider/components/firstSlideContent/data";

const FirstSlideContent = (): JSX.Element => {
    return (
        <div className={styles['container']}>
            <div className={styles['headerDesc']}>
                <Button typeButton={"clients"}>
                    <Image src={Karnaval} alt={'karnaval'} width={34} height={34}/>
                    <p className='b2-regular'>Валя Карнавал</p>
                </Button>
                <h3 className='h3-regular'>Наши клиенты</h3>
                <Button typeButton={"clients"}>
                    <Image src={Mavrin} alt={'marvin'} width={34} height={34}/>
                    <p className='b2-regular'>Миша Марвин</p>
                </Button>
            </div>
            <div className={styles['headerMobile']}>
                <h3 className='h3-regular'>Наши клиенты</h3>
            </div>

            <div className={styles['clientContainer']}>{clients.map((cl, index) => <Button key={index}
                                                                                           typeButton={"clients"}>
                <Image src={cl.img} alt={cl.name} width={34} height={34}/>
                <p className='b2-regular'>{cl.name}</p>
            </Button>)}
            </div>
        </div>
    );
};

export default FirstSlideContent;