import Parameter from "./parameter"
import Resource from "./resource"

export interface CloudformTemplate {
    Description?: string
    // TODO Metadata?: any
    Parameters?: { [key: string]: Parameter }
    Mappings?: { [key: string]: { [key: string]: { [key: string]: string | number } } }
    // TODO Conditions?: any
    // TODO Transform?: any
    Resources?: { [key: string]: Resource }
    // TODO Outputs?: any
}

export class CFFunction {
    constructor(private name: string, private payload: any) {
    }

    toJSON() {
        return {[this.name]: this.payload}
    }
}

export type Value<T> = T | CFFunction