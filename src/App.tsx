import './App.css';

import EditorContextProvider from "./contexts/editor/EditorContextProvider";
import Sliders from "./components/Sliders";
import Image from "./components/Image";

const App = () => {
    return (
        <EditorContextProvider>
            <div className="container">
                <Image />
                <Sliders />
            </div>
        </EditorContextProvider>
    );
}

export default App;
