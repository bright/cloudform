import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface VPNGatewayRoutePropagationProperties {
    RouteTableIds: List<Value<string>>;
    VpnGatewayId: Value<string>;
}
export default class VPNGatewayRoutePropagation extends ResourceBase<VPNGatewayRoutePropagationProperties> {
    constructor(properties: VPNGatewayRoutePropagationProperties);
}
