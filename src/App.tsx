import { useState } from 'react';
import './App.css';

import AppContextProvider from "./contexts/app/AppContextProvider";
import Image from "./components/Image";
import DefaultFilters from "./defaults/DefaultFilters";
import { Filter } from "./interface";


const App = () => {

    const [filters, setFilters] = useState<Record<string, Filter>>(DefaultFilters);

    return (
        <AppContextProvider>
            <div className="container">
                <Image filters={filters}/>
            </div>
        </AppContextProvider>
    );
}

export default App;
