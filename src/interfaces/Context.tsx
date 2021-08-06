import {ChangeEvent} from "react";

import Filter from "../interfaces/Filter";
import Transformer from "./Transformer";
import ChangeAgent from "./ChangeAgent";

interface Context {
    filters: Filter[]
    transformers: Transformer[]
    handleChange: (agent: ChangeAgent, e: ChangeEvent<HTMLInputElement>) => void
}

export default Context;