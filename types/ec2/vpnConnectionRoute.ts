import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface VPNConnectionRouteProperties {
    DestinationCidrBlock: Value<string>
    VpnConnectionId: Value<string>
}

export default class VPNConnectionRoute extends ResourceBase {
    constructor(properties: VPNConnectionRouteProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::VPNConnectionRoute', properties, dependsOn)
    }
}