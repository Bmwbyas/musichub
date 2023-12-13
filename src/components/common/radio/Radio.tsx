import {ChangeEvent, ComponentProps} from "react";
import styles from "@/components/common/radio/Radio.module.scss";
import {IHeadData} from "@/components/tracks/types";

interface IRadio extends ComponentProps<"input"> {
    data: IHeadData
    radioValue: string
    handleRadioChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const Radio: React.FC<IRadio> = ({data, radioValue, handleRadioChange, ...restProps}) => {

    return (
        <div className={styles['container']}>
            <input
                className={styles['radio']}
                type="radio"
                id={data.value}
                value={data.value}
                checked={radioValue === data.value}
                onChange={handleRadioChange}
                {...restProps}
            />
            <label className={styles['label']} htmlFor={data.value}>
                {data.title}
            </label>
        </div>
    );
};

export default Radio;