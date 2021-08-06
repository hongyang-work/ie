import {FC} from "react";

interface Props {
    style: object
}

const Image: FC<Props> = ({ style }) => {

    return (
        <div>
            <div className="main-image" style={style}/>
        </div>
    )
}

export default Image;