import { useContext, useEffect } from "react";
import { AppContext } from "../contexts/app/AppContext";

const Editor = () => {

    const {message, updateMessage} = useContext(AppContext);

    useEffect(() => {updateMessage("in editor");})

    return (
        <div className="editor">{message}</div>
    )
}

export default Editor;