import FirstSlideContent from "@/components/slider/components/firstSlideContent/FirstSlideContent";
import {ISlide} from "@/components/slider/types";

export const slides: ISlide[] = [
    {
        id: 1,
        components: <FirstSlideContent/>,
    },

    {
        id: 2,
        components: <div><span>MusicHub</span> - сервис по продаже и&nbsp;продюссированию песен </div>,
    },
    {
        id: 3,
        components: <div>Создание песни под ключ, запись и сведение вашего трека в Москве с
            командой <span>MusicHub</span></div>,
    }
];
