import {useContext} from "react";

import Slider from "./Slider";
import {EditorContext} from "../contexts/EditorContext";
import {FILTER, TRANSFORMER} from "../types/EditorType";


const Editor = () => {

    const {filters, transformers} = useContext(EditorContext);

    return (
        <div className="sidebar">
            <div>{FILTER}</div>
            {
                filters.map(filter => (
                    <Slider key={filter.property} agent={{editor: filter, type: FILTER}}/>
                ))
            }
            <div>{TRANSFORMER}</div>
            {
                transformers.map(transformer => (
                    <Slider key={transformer.property} agent={{editor: transformer, type: TRANSFORMER}}/>
                ))
            }
        </div>
    )
}

export default Editor;

