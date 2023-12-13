import {StaticImageData} from "next/image";
import {ReactNode} from "react";

export type  IContext = {
    goToSlide: (number: number) => void;
    changeSlide: (direction?: number) => void;
    slidesCount: number;
    slideNumber: number;
    items: ISlide[];
}

export interface ISlide {
    id: number,
    components: ReactNode
}

export interface IClients {
    name: string
    img: StaticImageData
}