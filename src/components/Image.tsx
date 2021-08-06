import { FC, useContext } from "react";

import Filter from "../interfaces/Filter";
import { EditorContext } from "../contexts/editor/EditorContext";

const Image: FC = () => {

    const { filters } = useContext(EditorContext);

    const format = (filters: Filter[]) => {
        const mapped = filters.map(filter => `${filter.property}(${filter.value}${filter.unit})`);
        return { filter: mapped.join(' ') }
    }

    return (
        <img src="../../public/img.png"
             className="main-image"
             style={format(filters)}
             alt="tree" />
    )
}

export default Image;