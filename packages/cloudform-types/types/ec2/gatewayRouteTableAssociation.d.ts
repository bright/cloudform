import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface GatewayRouteTableAssociationProperties {
    RouteTableId: Value<string>;
    GatewayId: Value<string>;
}
export default class GatewayRouteTableAssociation extends ResourceBase<GatewayRouteTableAssociationProperties> {
    constructor(properties: GatewayRouteTableAssociationProperties);
}
