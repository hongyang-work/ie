import { useContext } from "react";

import Slider from "./Slider";
import { AppContext } from "../contexts/image-editor/AppContext";


const Sliders = () => {

    const { filters } = useContext(AppContext);

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

