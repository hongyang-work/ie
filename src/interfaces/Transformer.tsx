import Editor from "./Editor";

interface Transformer extends Editor {
    type: string
    unit?: string
}

export default Transformer;