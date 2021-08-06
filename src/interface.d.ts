import { ChangeEvent } from "react";

export interface App {
    style: object
    filters: Filter[]
    handleChange: (newFilter: Filter, e: ChangeEvent<HTMLInputElement>) => void
}

export interface Range {
    min: number
    max: number
}

export interface Filter {
    name: string
    property: string
    value: number
    range: Range
    unit: string
}