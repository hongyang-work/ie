import {useContext} from "react";

import Slider from "./Slider";
import {EditorContext} from "../contexts/editor/EditorContext";
import {FILTER, TRANSFORMER} from "../types/EditorType";


const Editor = () => {

    const {filters, transformers} = useContext(EditorContext);

    return (
        <div className="sidebar">
            {
                filters.map(filter => (
                    <Slider key={filter.property} agent={{editor: filter, type: FILTER}}/>
                ))
            }
            {
                transformers.map(transformer => (
                    <Slider key={transformer.property} agent={{editor: transformer, type: TRANSFORMER}}/>
                ))
            }
        </div>
    )
}

export default Editor;

