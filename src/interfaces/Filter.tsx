import Range from "./Range";

interface Filter {
    name: string
    property: string
    value: number
    range: Range
    unit: string
}

export default Filter;