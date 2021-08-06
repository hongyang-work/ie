import { FC, useContext } from "react";
import { AppContext } from "../contexts/image-editor/AppContext";

const Image: FC = () => {

    const { style } = useContext(AppContext);

    return (
        <div className="main-image" style={style}/>
    )
}

export default Image;