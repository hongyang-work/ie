import Range from "./Range";

interface Transformer {
    name: string
    property: string
    value: number
    range: Range
    step: number
}

export default Transformer;