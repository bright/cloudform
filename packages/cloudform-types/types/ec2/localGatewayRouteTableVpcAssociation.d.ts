import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface LocalGatewayRouteTableVPCAssociationProperties {
    VpcId: Value<string>;
    LocalGatewayRouteTableId: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class LocalGatewayRouteTableVPCAssociation extends ResourceBase<LocalGatewayRouteTableVPCAssociationProperties> {
    constructor(properties: LocalGatewayRouteTableVPCAssociationProperties);
}
