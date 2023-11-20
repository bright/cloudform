import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface LocalGatewayRouteProperties {
    LocalGatewayRouteTableId: Value<string>;
    DestinationCidrBlock: Value<string>;
    NetworkInterfaceId?: Value<string>;
    LocalGatewayVirtualInterfaceGroupId?: Value<string>;
}
export default class LocalGatewayRoute extends ResourceBase<LocalGatewayRouteProperties> {
    constructor(properties: LocalGatewayRouteProperties);
}
