import { useState } from 'react';
import './App.css';

import AppContextProvider from "./contexts/app/AppContextProvider";
import Image from "./components/Image";
import DefaultFilters from "./defaults/DefaultFilters";
import { Filter } from "./interface";


const App = () => {

    const [filters, setFilters] = useState<Record<string, Filter>>(DefaultFilters);

    const formatStyles = (filters: Record<string, Filter>) => {
        const mapped = Object.keys(filters).map(key => `${key}(${filters[key].value}${filters[key].unit})`);

        return { filter: mapped.join(' ') }
    }

    return (
        <AppContextProvider>
            <div className="container">
                <Image style={formatStyles(filters)}/>
            </div>
        </AppContextProvider>
    );
}

export default App;
