import {Value} from "./dataTypes"

export default interface Resource {
    Type: string
    Properties?: { [key: string]: any },
    DependsOn?: Value<string>
}

export class ResourceBase {
    constructor(public Type: string, public Properties?: { [key: string]: any }, public DependsOn?: Value<string>) {
    }
}

export class ResourceTag {
    constructor(public Key: Value<string>, public Value: Value<string>) {
    }
}