import { FC, ChangeEvent, useState} from "react";

import Filter from "../../interfaces/Filter";
import DefaultFilters from "../../defaults/DefaultFilters";
import { EditorContext } from "./EditorContext";

const EditorContextProvider: FC = ({ children }) => {

    const [filters, setFilters] = useState<Filter[]>(DefaultFilters);

    const handleChange = (newFilter: Filter, e : ChangeEvent<HTMLInputElement>) => {
        const updatedFilters = filters.map(filter => {
            if (filter.property === newFilter.property) filter.value = Number(e.target.value);
            return filter;
        })
        setFilters(updatedFilters);
    }

    return (
        <EditorContext.Provider value={{filters, handleChange}}>
            { children }
        </EditorContext.Provider>
    )
}

export default EditorContextProvider