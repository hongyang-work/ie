import { FC, useContext } from "react";

import { AppContext } from "../contexts/image-editor/AppContext";
import { Filter } from "../interface";

interface Props {
    filter: Filter
}

const Slider: FC<Props> = ({ filter }) => {

    const { handleChange } = useContext(AppContext);

    return (
        <div className='slider-container'>
            <label>{filter.name}</label>
            <input
                type="range"
                className="slider"
                value={filter.value}
                min={filter.range.min}
                max={filter.range.max}
                onChange={e => handleChange(filter, e)}
            />
        </div>
    )
}

export default Slider;