import { FC, useContext } from "react";

import Filter from "../interfaces/Filter";
import { EditorContext } from "../contexts/editor/EditorContext";

interface Props {
    filter: Filter
}

const Slider: FC<Props> = ({ filter }) => {

    const { handleChange } = useContext(EditorContext);

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