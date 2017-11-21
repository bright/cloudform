import {ResourceBase} from '../resource'
import {Value} from '../internal'


export type Type = "IPV4" | "IPV6" | "*"

export interface IPSetDescriptorsProperties {
    Type: Value<Type>
    Value: Value<string>
}

export default class IPSetDescriptors extends ResourceBase {
    constructor(properties: IPSetDescriptorsProperties, dependsOn?: Value<string>) {
        super('AWS::WAF::IPSetDescriptors', properties, dependsOn)
    }
}