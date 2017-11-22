/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../internal'

export interface IPSetDescriptorProperties {
    Type: Value<string>
    Value: Value<string>
}

export class IPSetDescriptor extends ResourceBase {
    constructor(properties: IPSetDescriptorProperties, dependsOn?: Value<string>) {
        super('AWS::WAFRegional::IPSetDescriptor', properties, dependsOn)
    }
}

export interface IPSetProperties {
    IPSetDescriptors?: IPSetDescriptor[]
    Name: Value<string>
}

export default class IPSet extends ResourceBase {
    constructor(properties: IPSetProperties, dependsOn?: Value<string>) {
        super('AWS::WAFRegional::IPSet', properties, dependsOn)
    }
}