import {FC, ChangeEvent, useState} from "react";

import Filter from "../../interfaces/Filter";
import Transformer from "../../interfaces/Transformer";
import DefaultFilters from "../../defaults/DefaultFilters";
import DefaultTransformers from "../../defaults/DefaultTransformers";
import {EditorContext} from "./EditorContext";


const EditorContextProvider: FC = ({children}) => {

    const [filters, setFilters] = useState<Filter[]>(DefaultFilters);
    const [transformers, setTransformers] = useState<Transformer[]>(DefaultTransformers);

    const handleChange = (arg: Filter | Transformer, e: ChangeEvent<HTMLInputElement>) => {

        if (arg['type'] === 'filter') {
            const updatedFilters = filters.map(filter => {
                if (filter.property === (arg as Filter).property) filter.value = Number(e.target.value);
                return filter;
            })
            setFilters(updatedFilters);
        }

        if (arg['type'] === 'transformer') {
            const updatedTransformer = transformers.map(transformer => {
                if (transformer.property === (arg as Transformer).property) transformer.value = Number(e.target.value);
                return transformer;
            })
            setTransformers(updatedTransformer);
        }
    }

    return (
        <EditorContext.Provider value={{filters, transformers, handleChange}}>
            {children}
        </EditorContext.Provider>
    )
}

export default EditorContextProvider