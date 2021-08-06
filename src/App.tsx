import './App.css';

import AppContextProvider from "./contexts/image-editor/AppContextProvider";
import Sliders from "./components/Sliders";
import Image from "./components/Image";

const App = () => {
    return (
        <AppContextProvider>
            <div className="container">
                <Image />
                <Sliders />
            </div>
        </AppContextProvider>
    );
}

export default App;
