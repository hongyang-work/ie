import Range from "./Range";

interface Transformer {
    type: string
    name: string
    property: string
    value: number
    range: Range
    unit?: string
    step: number
}

export default Transformer;