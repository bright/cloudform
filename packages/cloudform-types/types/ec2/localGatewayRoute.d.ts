import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface LocalGatewayRouteProperties {
    DestinationCidrBlock: Value<string>;
    LocalGatewayRouteTableId: Value<string>;
    LocalGatewayVirtualInterfaceGroupId: Value<string>;
}
export default class LocalGatewayRoute extends ResourceBase<LocalGatewayRouteProperties> {
    constructor(properties: LocalGatewayRouteProperties);
}
