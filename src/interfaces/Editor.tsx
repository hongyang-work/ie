import Range from "./Range";

interface Editor {
    name: string
    property: string
    value: number
    range: Range
    step: number
}

export default Editor;