import {ResourceBase} from '../resource'
import {Value} from '../internal'


export type Type = "*" | "HEADER" | "METHOD" | "QUERY_STRING" | "URI" | "BODY"

export interface FieldToMatchProperties {
    Data?: Value<string>
    Type: Value<Type>
}

export default class FieldToMatch extends ResourceBase {
    constructor(properties: FieldToMatchProperties, dependsOn?: Value<string>) {
        super('AWS::WAFRegional::FieldToMatch', properties, dependsOn)
    }
}