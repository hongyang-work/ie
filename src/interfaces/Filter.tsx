import Range from "./Range";

interface Filter {
    type: string
    name: string
    property: string
    value: number
    range: Range
    unit?: string
    step: number
}

export default Filter;