import Filter from "./Filter";
import Transformer from "./Transformer";

interface ChangeAgent {
    type: string
    editor: Filter | Transformer
}

export default ChangeAgent;