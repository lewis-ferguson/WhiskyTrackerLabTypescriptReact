export interface Whisky {
    id: number ,
    name: string,
    year: number,
    age: number,
    distillery: Distillery
}

export enum FetchPaths {
    WHISKIES = "http://localhost:8080/whiskies",
    DISTILLERIES = "http://localhost:8080/distilleries",
}

export interface FetchPathsDynamically {
    region?: string,
    age?: number,
    year?: number
}

export interface Distillery {
    id: number,
    name: string,
    region: string,
    whiskies: Whisky[] 
}