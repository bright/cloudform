/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value} from '../dataTypes'



export interface NatGatewayProperties {
    AllocationId: Value<string>
    SubnetId: Value<string>
    Tags?: ResourceTag[]
}

export default class NatGateway extends ResourceBase {
    constructor(properties: NatGatewayProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::NatGateway', properties, dependsOn)
    }
}