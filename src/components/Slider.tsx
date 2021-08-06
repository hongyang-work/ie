import { FC, useContext } from "react";

import Filter from "../interfaces/Filter";
import Transformer from "../interfaces/Transformer";
import { EditorContext } from "../contexts/editor/EditorContext";

interface Props {
    editor: Filter | Transformer
}

const Slider: FC<Props> = ({ editor }) => {

    const { handleChange } = useContext(EditorContext);

    return (
        <div className='slider-container'>
            <label>{editor.name}</label>
            <input
                type="range"
                className="slider"
                value={editor.value}
                min={editor.range.min}
                max={editor.range.max}
                step={editor.step}
                onChange={e => handleChange(editor, e)}
            />
        </div>
    )
}

export default Slider;