import { useContext } from "react";

import Slider from "./Slider";
import { EditorContext } from "../contexts/editor/EditorContext";


const Editor = () => {

    const { filters, transformers } = useContext(EditorContext);

    return (
        <div className="sidebar">
            {
                filters.map(filter => (
                    <Slider key={filter.property} editor={filter} />
                ))
            }
            {
                transformers.map(transformer => (
                    <Slider key={transformer.property} editor={transformer} />
                ))
            }
        </div>
    )
}

export default Editor;

