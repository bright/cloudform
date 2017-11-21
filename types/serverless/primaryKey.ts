import {ResourceBase} from '../resource'
import {Value} from '../internal'


export type Type = "*" | "String" | "Number" | "Binary"

export interface PrimaryKeyProperties {
    Name?: Value<string>
    Type?: Value<Type>
}

export default class PrimaryKey extends ResourceBase {
    constructor(properties: PrimaryKeyProperties, dependsOn?: Value<string>) {
        super('AWS::Serverless::PrimaryKey', properties, dependsOn)
    }
}