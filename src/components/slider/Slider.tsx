"use client"
import React, {createContext, TouchEvent, useEffect, useState} from "react";
import SlidesList from "./components/SlidesList";
import styles from "./Slider.module.scss"
import Dots from "@/components/slider/components/Controls/Dots";
import {slides} from "@/components/slider/data";
import {IContext} from "@/components/slider/types";


export const SliderContext = createContext<IContext | null>(null);

interface ISlider {
    autoPlay?: boolean
    autoPlayTime?: number
}

const Slider: React.FC<ISlider> = function ({autoPlay = true, autoPlayTime = 5000}) {
    const [slide, setSlide] = useState<number>(0);
    const [touchPosition, setTouchPosition] = useState<null | number>(null)
    const items = slides
    const changeSlide = (direction = 1): void => {
        let slideNumber = 0;

        if (slide + direction < 0) {
            slideNumber = items.length - 1;
        } else {
            slideNumber = (slide + direction) % items.length;
        }

        setSlide(slideNumber);
    };

    const goToSlide = (number: number): void => {
        setSlide(number % items.length);
    };

    const handleTouchStart = (e: TouchEvent<HTMLDivElement> | undefined): void => {
        if (e === undefined || e.touches === undefined || e.touches[0] === undefined) return
        const touchDown = e.touches[0].clientX;

        setTouchPosition(touchDown);
    }

    const handleTouchMove = (e: TouchEvent<HTMLDivElement> | undefined): void => {
        if (touchPosition === null || e === undefined || e.touches === undefined || e.touches[0] === undefined) {
            return;
        }

        const currentPosition = e.touches[0].clientX;
        const direction = touchPosition - currentPosition;

        if (direction > 10) {
            changeSlide(1);
        }

        if (direction < -10) {
            changeSlide(-1);
        }

        setTouchPosition(null);
    }

    useEffect(() => {
        if (!autoPlay) return;

        const interval = setInterval(() => {
            changeSlide(1);
        }, autoPlayTime);

        return () => {
            clearInterval(interval);
        };
    }, [items.length, slide, autoPlay, autoPlayTime, changeSlide]); // when images uploaded or slide changed manually we start timer

    return (<>
            <SliderContext.Provider
                value={{
                    goToSlide,
                    changeSlide,
                    slidesCount: items.length,
                    slideNumber: slide,
                    items,
                }}
            >

                <div
                    className={styles['slider']}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                >
                    <SlidesList/>
                </div>
                <Dots/>
            </SliderContext.Provider>
        </>
    );
};


export default Slider;

