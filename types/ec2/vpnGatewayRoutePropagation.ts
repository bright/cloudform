/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'



export interface VPNGatewayRoutePropagationProperties {
    RouteTableIds: Value<string>[]
    VpnGatewayId: Value<string>
}

export default class VPNGatewayRoutePropagation extends ResourceBase {
    constructor(properties: VPNGatewayRoutePropagationProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::EC2::VPNGatewayRoutePropagation', properties, dependsOn)
    }
}
