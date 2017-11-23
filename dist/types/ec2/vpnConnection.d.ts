import { ResourceBase, ResourceTag } from '../resource';
import { Value } from '../dataTypes';
export interface VpnTunnelOptionsSpecificationProperties {
    PreSharedKey?: Value<string>;
    TunnelInsideCidr?: Value<string>;
}
export declare class VpnTunnelOptionsSpecification extends ResourceBase {
    constructor(properties: VpnTunnelOptionsSpecificationProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface VPNConnectionProperties {
    CustomerGatewayId: Value<string>;
    StaticRoutesOnly?: Value<boolean>;
    Tags?: ResourceTag[];
    Type: Value<string>;
    VpnGatewayId: Value<string>;
    VpnTunnelOptionsSpecifications?: VpnTunnelOptionsSpecification[];
}
export default class VPNConnection extends ResourceBase {
    constructor(properties: VPNConnectionProperties, dependsOn?: Value<string> | Value<string>[]);
}
