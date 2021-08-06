import { FC, ChangeEvent } from "react";
import { Filter } from "../interface";

interface Props {
    filter: Filter
    handleChange: (name: Filter, e: ChangeEvent<HTMLInputElement>) => void
}

const Slider: FC<Props> = ({ filter, handleChange }) => {
    return (
        <div className='slider-container'>
            <label>{filter.name}</label>
            <input
                type="range"
                className="slider"
                value={filter.value}
                onChange={e => handleChange(filter, e)}
            />
        </div>
    )
}

export default Slider;