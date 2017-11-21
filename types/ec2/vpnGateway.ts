import {ResourceBase, ResourceTag} from '../resource'
import {Value} from '../internal'


export type Type = "ipsec.1"

export interface VPNGatewayProperties {
    Type: Value<Type>
    Tags?: ResourceTag[]
}

export default class VPNGateway extends ResourceBase {
    constructor(properties: VPNGatewayProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::VPNGateway', properties, dependsOn)
    }
}