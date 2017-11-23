import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface VPNGatewayRoutePropagationProperties {
    RouteTableIds: Value<string>[];
    VpnGatewayId: Value<string>;
}
export default class VPNGatewayRoutePropagation extends ResourceBase {
    constructor(properties: VPNGatewayRoutePropagationProperties, dependsOn?: Value<string> | Value<string>[]);
}
