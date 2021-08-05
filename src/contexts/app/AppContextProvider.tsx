import { FC, useState } from "react";
import { AppContext } from "./AppContext";

const AppContextProvider: FC = ({ children }) => {

    const [message, setMessage] = useState<string>("Default");

    const updateMessage = (message: string) => { setMessage(message) }

    return (
        <AppContext.Provider value={{message, updateMessage}}>
            { children }
        </AppContext.Provider>
    )
}

export default AppContextProvider