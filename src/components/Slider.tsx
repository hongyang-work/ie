import {FC, useContext} from "react";

import ChangeAgent from "../interfaces/ChangeAgent";
import {EditorContext} from "../contexts/EditorContext";

interface Props {
    agent: ChangeAgent
}

const Slider: FC<Props> = ({agent}) => {

    const {handleChange} = useContext(EditorContext);

    return (
        <div className='slider-container'>
            <label>{agent.editor.name}</label>
            <input
                type="range"
                className="slider"
                value={agent.editor.value}
                min={agent.editor.range.min}
                max={agent.editor.range.max}
                step={agent.editor.step}
                onChange={e => handleChange(agent, e)}
            />
        </div>
    )
}

export default Slider;