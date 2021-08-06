import { ChangeEvent } from "react";
import Filter from "./Filter";

interface Context {
    filters: Filter[]
    handleChange: (newFilter: Filter, e: ChangeEvent<HTMLInputElement>) => void
}

export default Context;