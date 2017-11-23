/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'



export interface VPCEndpointProperties {
    PolicyDocument?: any
    RouteTableIds?: Value<string>[]
    ServiceName: Value<string>
    VpcId: Value<string>
}

export default class VPCEndpoint extends ResourceBase {
    constructor(properties: VPCEndpointProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::EC2::VPCEndpoint', properties, dependsOn)
    }
}
