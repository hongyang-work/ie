import { FC, useContext } from "react";

import Filter from "../interfaces/Filter";
import Transformer from "../interfaces/Transformer";
import { EditorContext } from "../contexts/editor/EditorContext";

const Image: FC = () => {

    const { filters, transformers } = useContext(EditorContext);

    const format = (filters: Filter[], transformers: Transformer[]) => {
        let style = { filter: "", transform: "" };

        const filtered = filters.map(filter => `${filter.property}(${filter.value}${filter.unit})`);
        style.filter = filtered.join(' ')

        const transformed = transformers.map(transformer => `${transformer.property}(${transformer.value})`);
        style.transform = transformed.join(' ')
        return style;
    }

    return (
        <img src="img.png"
             className="main-image"
             style={format(filters, transformers)}
             alt="tree" />
    )
}

export default Image;