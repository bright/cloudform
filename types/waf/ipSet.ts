import {ResourceBase} from '../resource'
import {Value} from '../internal'
import IPSetDescriptors from './ipSetDescriptors'



export interface IPSetProperties {
    IPSetDescriptors?: IPSetDescriptors
    Name: Value<string>
}

export default class IPSet extends ResourceBase {
    constructor(properties: IPSetProperties, dependsOn?: Value<string>) {
        super('AWS::WAF::IPSet', properties, dependsOn)
    }
}