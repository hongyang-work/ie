import {ChangeEvent, useState} from 'react';
import './App.css';

import AppContextProvider from "./contexts/app/AppContextProvider";
import Slider from "./components/Slider";
import Image from "./components/Image";
import DefaultFilters from "./defaults/DefaultFilters";
import { Filter } from "./interface";

const App = () => {

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
        <AppContextProvider>
            <div className="container">
                <Image style={style} />
                <div className="sidebar">
                    {
                        filters.map(filter => (
                            <Slider key={filter.property} filter={filter} handleChange={handleChange} />
                        ))
                    }
                </div>
            </div>
        </AppContextProvider>
    );
}

export default App;
