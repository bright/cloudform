import {ResourceBase, ResourceTag} from '../resource'
import {Value} from '../internal'




export interface VPNConnectionProperties {
    Type: Value<string>
    CustomerGatewayId: Value<string>
    StaticRoutesOnly?: Value<boolean>
    VpnGatewayId: Value<string>
    Tags?: ResourceTag[]
}

export default class VPNConnection extends ResourceBase {
    constructor(properties: VPNConnectionProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::VPNConnection', properties, dependsOn)
    }
}