import './App.css';

import EditorContext from "./contexts/EditorContext";
import Editor from "./components/Editor";
import Image from "./components/Image";

const App = () => {
    return (
        <EditorContext>
            <div className="container">
                <Image/>
                <Editor/>
            </div>
        </EditorContext>
    );
}

export default App;
