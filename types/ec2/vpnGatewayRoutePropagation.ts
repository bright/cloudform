import {ResourceBase} from '../resource'
import {Value} from '../internal'
import RouteTable from './routeTable'



export interface VPNGatewayRoutePropagationProperties {
    RouteTableIds?: RouteTable[]
    VpnGatewayId: Value<string>
}

export default class VPNGatewayRoutePropagation extends ResourceBase {
    constructor(properties: VPNGatewayRoutePropagationProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::VPNGatewayRoutePropagation', properties, dependsOn)
    }
}