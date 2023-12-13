import React, {useContext} from "react";
import {SliderContext} from "../../Slider";
import styles from '../Slide.module.scss'
import {IContext} from "@/components/slider/types";

const Dot: React.FC<{ number: number }> = ({number}): JSX.Element => {
    const {goToSlide, slideNumber} = useContext(SliderContext) as IContext

    return (
        <div
            className={`${styles['dot']} ${slideNumber === number ? styles['selected'] : ""}`}
            onClick={() => goToSlide(number)}
        />
    );
}
export default Dot