export interface Airport {
    id?: string,
    name?: string,
    iata?: string,
    position?: {
        lat?: number,
        lng?: number
    }
}