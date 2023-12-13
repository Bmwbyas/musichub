import React, {useContext} from "react";
import {SliderContext} from "../Slider";
import Slide from "./Slide";
import styles from './Slide.module.scss'
import {IContext} from "@/components/slider/types";

const SlidesList = (): JSX.Element => {
    const {slideNumber, items} = useContext(SliderContext) as IContext

    return (
        <div
            className={styles["slideList"]}
            style={{transform: `translateX(-${slideNumber * 100}%)`}}
        >
            {items.map((slide, index) => (
                <Slide key={index} components={slide.components} id={slide.id}/>
            ))}
        </div>
    );
}
export default SlidesList