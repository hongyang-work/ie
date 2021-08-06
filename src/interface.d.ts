export interface App {
    message: string
    updateMessage: (message: string) => void;
}

export interface Range {
    min: number
    max: number
}

export interface Filter {
    name: string
    value: number
    range: Range
    unit: string
}