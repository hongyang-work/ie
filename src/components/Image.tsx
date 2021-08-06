import { FC } from "react";

interface Props {
    style: object
}

const Image: FC<Props> = ({ style }) => {
    return (
        <div className="main-image" style={style}/>
    )
}

export default Image;