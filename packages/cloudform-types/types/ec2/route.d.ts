import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface RouteProperties {
    CarrierGatewayId?: Value<string>;
    DestinationCidrBlock?: Value<string>;
    DestinationIpv6CidrBlock?: Value<string>;
    EgressOnlyInternetGatewayId?: Value<string>;
    GatewayId?: Value<string>;
    InstanceId?: Value<string>;
    LocalGatewayId?: Value<string>;
    NatGatewayId?: Value<string>;
    NetworkInterfaceId?: Value<string>;
    RouteTableId: Value<string>;
    TransitGatewayId?: Value<string>;
    VpcEndpointId?: Value<string>;
    VpcPeeringConnectionId?: Value<string>;
}
export default class Route extends ResourceBase<RouteProperties> {
    constructor(properties: RouteProperties);
}
