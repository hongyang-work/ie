import { ChangeEvent } from "react";

import Filter from "../interfaces/Filter";
import Transformer from "./Transformer";

interface Context {
    filters: Filter[]
    transformers: Transformer[]
    handleChange: (arg: Filter | Transformer, e: ChangeEvent<HTMLInputElement>) => void
}

export default Context;