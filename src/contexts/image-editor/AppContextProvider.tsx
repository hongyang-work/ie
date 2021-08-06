import { FC, ChangeEvent, useState} from "react";

import DefaultFilters from "../../defaults/DefaultFilters";
import { AppContext } from "./AppContext";
import { Filter } from "../../interface";

const AppContextProvider: FC = ({ children }) => {

    const handleChange = (newFilter: Filter, e : ChangeEvent<HTMLInputElement>) => {
        const updatedFilters = filters.map(filter => {
            if (filter.property === newFilter.property) filter.value = Number(e.target.value);
            return filter;
        })
        setFilters(updatedFilters);
        setStyle(format(filters));
    }

    const format = (filters: Filter[]) => {
        const mapped = filters.map(filter => `${filter.property}(${filter.value}${filter.unit})`);
        return { filter: mapped.join(' ') }
    }

    const [filters, setFilters] = useState<Filter[]>(DefaultFilters);
    const [style, setStyle] = useState<object>(format(DefaultFilters));

    return (
        <AppContext.Provider value={{style, filters, handleChange}}>
            { children }
        </AppContext.Provider>
    )
}

export default AppContextProvider