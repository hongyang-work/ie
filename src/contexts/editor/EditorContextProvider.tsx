import { FC, ChangeEvent, useState} from "react";

import Filter from "../../interfaces/Filter";
import Transformer from "../../interfaces/Transformer";
import DefaultFilters from "../../defaults/DefaultFilters";
import DefaultTransformers from "../../defaults/DefaultTransformers";
import { EditorContext } from "./EditorContext";

const isFilter = (arg: Filter | Transformer): boolean => { //magic happens here
    return (arg as Filter).unit !== undefined;
}

const EditorContextProvider: FC = ({ children }) => {

    const [filters, setFilters] = useState<Filter[]>(DefaultFilters);
    const [transformers, setTransformers] = useState<Transformer[]>(DefaultTransformers);

    const handleChange = (arg: Filter | Transformer, e : ChangeEvent<HTMLInputElement>) => {

        // TODO clean this up
        if (isFilter(arg)) {
            const editor = arg as Filter;
            const updatedFilters = filters.map(filter => {
                if (filter.property === editor.property) filter.value = Number(e.target.value);
                return filter;
            })
            setFilters(updatedFilters);
        } else {
            const editor = arg as Transformer;
            const updatedTransformer = transformers.map(transformer => {
                if (transformer.property === editor.property) transformer.value = Number(e.target.value);
                return transformer;
            })
            setTransformers(updatedTransformer);
        }
    }

    return (
        <EditorContext.Provider value={{filters, transformers, handleChange}}>
            { children }
        </EditorContext.Provider>
    )
}

export default EditorContextProvider