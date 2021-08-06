import {FC, ChangeEvent, useState, createContext} from "react";

import Context from "../interfaces/Context";
import Filter from "../interfaces/Filter";
import Transformer from "../interfaces/Transformer";
import ChangeAgent from "../interfaces/ChangeAgent";
import DefaultContext from "../defaults/DefaultContext";
import DefaultFilters from "../defaults/DefaultFilters";
import DefaultTransformers from "../defaults/DefaultTransformers";
import {FILTER, TRANSFORMER} from "../types/EditorType";

export const EditorContext = createContext<Context>(DefaultContext);

const EditorContextProvider: FC = ({children}) => {

    const [filters, setFilters] = useState<Filter[]>(DefaultFilters);
    const [transformers, setTransformers] = useState<Transformer[]>(DefaultTransformers);

    const handleChange = (agent: ChangeAgent, e: ChangeEvent<HTMLInputElement>) => {
        switch (agent.type) {
            case FILTER:
                const updatedFilters = filters.map(filter => {
                    if (filter.property === (agent.editor as Filter).property) filter.value = Number(e.target.value);
                    return filter;
                })
                setFilters(updatedFilters);
                break;

            case TRANSFORMER:
                const updatedTransformer = transformers.map(transformer => {
                    if (transformer.property === (agent.editor as Transformer).property) transformer.value = Number(e.target.value);
                    return transformer;
                })
                setTransformers(updatedTransformer);
                break;
        }
    }

    return (
        <EditorContext.Provider value={{filters, transformers, handleChange}}>
            {children}
        </EditorContext.Provider>
    )
}

export default EditorContextProvider;