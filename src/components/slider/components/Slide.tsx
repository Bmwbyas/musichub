import React from "react";
import slyles from './Slide.module.scss'
import FirstSlideContent from "@/components/slider/components/firstSlideContent/FirstSlideContent";
import {ISlide} from "@/components/slider/types";

const Slide: React.FC<ISlide> = ({components, id}): JSX.Element => {
    return (
        <div className={slyles["slide"]}>
            {id === 0
                ? <FirstSlideContent/>
                : <div className={slyles["slideContent"]}>{components}</div>
            }
        </div>
    );
}
export default Slide