"use client"
import {ChangeEvent, useState} from "react";
import styles from "./Filters.module.scss"
import Radio from "@/components/common/radio/Radio";
import {headFilterData} from "@/components/tracks/components/data";

const HeadFilter = (): JSX.Element => {
    const [radioValue, setRadioValue] = useState<string>('hot');

    console.log(radioValue)
    const handleRadioChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setRadioValue(event.target.value);
    };
    return (
        <div className={styles['container']}>
            {headFilterData.map((el, index) => <Radio key={index} radioValue={radioValue}
                                                      handleRadioChange={handleRadioChange} data={el}/>)}

        </div>
    );
};

export default HeadFilter;