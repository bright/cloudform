import {ResourceBase} from '../resource'
import {Value} from '../internal'


export type Type = "IPMatch" | "ByteMatch" | "SqlInjectionMatch" | "*"

export interface PredicateProperties {
    DataId: Value<string>
    Negated: Value<boolean>
    Type: Value<Type>
}

export default class Predicate extends ResourceBase {
    constructor(properties: PredicateProperties, dependsOn?: Value<string>) {
        super('AWS::WAF::Predicate', properties, dependsOn)
    }
}