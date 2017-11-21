import {ResourceBase} from '../resource'
import {Value} from '../internal'


export type Type = "ALLOW" | "BLOCK" | "COUNT" | "*"

export interface DefaultActionProperties {
    Type: Value<Type>
}

export default class DefaultAction extends ResourceBase {
    constructor(properties: DefaultActionProperties, dependsOn?: Value<string>) {
        super('AWS::WAF::DefaultAction', properties, dependsOn)
    }
}