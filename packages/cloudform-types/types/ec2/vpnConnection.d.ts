import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class VpnTunnelOptionsSpecification {
    PreSharedKey?: Value<string>;
    TunnelInsideCidr?: Value<string>;
    constructor(properties: VpnTunnelOptionsSpecification);
}
export interface VPNConnectionProperties {
    TransitGatewayId?: Value<string>;
    Type: Value<string>;
    VpnTunnelOptionsSpecifications?: List<VpnTunnelOptionsSpecification>;
    CustomerGatewayId: Value<string>;
    VpnGatewayId?: Value<string>;
    StaticRoutesOnly?: Value<boolean>;
    Tags?: List<ResourceTag>;
}
export default class VPNConnection extends ResourceBase<VPNConnectionProperties> {
    static VpnTunnelOptionsSpecification: typeof VpnTunnelOptionsSpecification;
    constructor(properties: VPNConnectionProperties);
}
