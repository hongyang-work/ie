import './App.css';

import EditorContextProvider from "./contexts/editor/EditorContextProvider";
import Editor from "./components/Editor";
import Image from "./components/Image";

const App = () => {
    return (
        <EditorContextProvider>
            <div className="container">
                <Image/>
                <Editor/>
            </div>
        </EditorContextProvider>
    );
}

export default App;
