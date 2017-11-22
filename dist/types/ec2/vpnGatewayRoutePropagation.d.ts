import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface VPNGatewayRoutePropagationProperties {
    RouteTableIds: Value<string>[];
    VpnGatewayId: Value<string>;
}
export default class VPNGatewayRoutePropagation extends ResourceBase {
    constructor(properties: VPNGatewayRoutePropagationProperties, dependsOn?: Value<string>);
}
