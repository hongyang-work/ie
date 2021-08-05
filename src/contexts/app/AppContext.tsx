import { createContext } from 'react';
import { App } from "../../interface";

const defaultValue = {
    message: "",
    updateMessage: (): void => {}
}

export const AppContext = createContext<App>(defaultValue);
