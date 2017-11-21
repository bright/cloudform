import {Value} from "./internal"

export default interface Resource {
    Type: string
    Properties?: { [key: string]: any }
}

export class ResourceBase {
    constructor(public Type: string, public Properties?: { [key: string]: any }) {
    }
}

export class ResourceTag {
    constructor(public Key: Value<string>, public Value: Value<string>) {

    }
}