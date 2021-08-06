import { createContext } from 'react';

import Context from "../../interfaces/Context";

const defaultContext = {
    style: {},
    filters: [],
    handleChange: (): void => {}
}

export const EditorContext = createContext<Context>(defaultContext);
