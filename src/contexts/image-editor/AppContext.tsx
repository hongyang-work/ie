import { createContext } from 'react';
import { App } from "../../interface";

const defaultValue = {
    style: {},
    filters: [],
    handleChange: (): void => {}
}

export const AppContext = createContext<App>(defaultValue);
