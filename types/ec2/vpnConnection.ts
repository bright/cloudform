/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value} from '../dataTypes'

export interface VpnTunnelOptionsSpecificationProperties {
    PreSharedKey?: Value<string>
    TunnelInsideCidr?: Value<string>
}

export class VpnTunnelOptionsSpecification extends ResourceBase {
    constructor(properties: VpnTunnelOptionsSpecificationProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::VpnTunnelOptionsSpecification', properties, dependsOn)
    }
}

export interface VPNConnectionProperties {
    CustomerGatewayId: Value<string>
    StaticRoutesOnly?: Value<boolean>
    Tags?: ResourceTag[]
    Type: Value<string>
    VpnGatewayId: Value<string>
    VpnTunnelOptionsSpecifications?: VpnTunnelOptionsSpecification[]
}

export default class VPNConnection extends ResourceBase {
    constructor(properties: VPNConnectionProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::VPNConnection', properties, dependsOn)
    }
}