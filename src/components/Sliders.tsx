import { useContext } from "react";

import Slider from "./Slider";
import { EditorContext } from "../contexts/editor/EditorContext";


const Sliders = () => {

    const { filters } = useContext(EditorContext);

    return (
        <div className="sidebar">
            {
                filters.map(filter => (
                    <Slider key={filter.property} filter={filter} />
                ))
            }
        </div>
    )
}

export default Sliders;

