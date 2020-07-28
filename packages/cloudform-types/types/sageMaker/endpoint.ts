/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class VariantProperty {
    VariantPropertyType?: Value<string>

    constructor(properties: VariantProperty) {
        Object.assign(this, properties)
    }
}

export interface EndpointProperties {
    RetainAllVariantProperties?: Value<boolean>
    EndpointName?: Value<string>
    ExcludeRetainedVariantProperties?: List<VariantProperty>
    EndpointConfigName: Value<string>
    Tags?: List<ResourceTag>
}

export default class Endpoint extends ResourceBase<EndpointProperties> {
    static VariantProperty = VariantProperty

    constructor(properties: EndpointProperties) {
        super('AWS::SageMaker::Endpoint', properties)
    }
}
