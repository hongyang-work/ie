import React from 'react';
import './App.css';
import Editor from "./components/Editor";
import AppContextProvider from "./contexts/app/AppContextProvider";

const App = () => {
    return (
        <AppContextProvider>
            <Editor />
        </AppContextProvider>
    );
}

export default App;
