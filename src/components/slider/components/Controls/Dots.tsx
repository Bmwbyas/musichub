import React, {ReactElement, useContext} from "react";
import {SliderContext} from "../../Slider";
import styles from '../Slide.module.scss'
import Dot from "./Dot";
import {IContext} from "@/components/slider/types";

export default function Dots(): JSX.Element {
    const {slidesCount} = useContext(SliderContext) as IContext

    const renderDots = (): ReactElement[] => {
        const dots = [];
        for (let i = 0; i < slidesCount; i++) {
            dots.push(<Dot key={`dot-${i}`} number={i}/>);
        }

        return dots;
    };

    return <div className={styles["dots"]}>{renderDots()}</div>;
}
