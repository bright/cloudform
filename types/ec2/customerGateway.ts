/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'



export interface CustomerGatewayProperties {
    BgpAsn: Value<number>
    IpAddress: Value<string>
    Tags?: ResourceTag[]
    Type: Value<string>
}

export default class CustomerGateway extends ResourceBase {
    constructor(properties: CustomerGatewayProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::EC2::CustomerGateway', properties, dependsOn)
    }
}
