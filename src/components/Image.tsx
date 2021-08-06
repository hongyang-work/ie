import {FC} from "react";
import {Filter} from "../interface";

interface Props {
    filters: Record<string, Filter>
}

const Image: FC<Props> = ({ filters }) => {

    const formatFilters = (filters: Record<string, Filter>) => {
        const mapped = Object.keys(filters).map(key => `${key}(${filters[key].value}${filters[key].unit})`);
        return { filter: mapped.join(' ') }
    }

    return (
        <div>
            <div className="main-image" style={formatFilters(filters)}/>
        </div>
    )
}

export default Image;