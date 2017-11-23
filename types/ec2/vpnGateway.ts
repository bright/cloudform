/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value} from '../dataTypes'



export interface VPNGatewayProperties {
    AmazonSideAsn?: Value<number>
    Tags?: ResourceTag[]
    Type: Value<string>
}

export default class VPNGateway extends ResourceBase {
    constructor(properties: VPNGatewayProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::VPNGateway', properties, dependsOn)
    }
}
