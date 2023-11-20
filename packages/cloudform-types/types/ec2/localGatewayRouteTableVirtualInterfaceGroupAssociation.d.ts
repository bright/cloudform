import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface LocalGatewayRouteTableVirtualInterfaceGroupAssociationProperties {
    LocalGatewayRouteTableId: Value<string>;
    Tags?: List<ResourceTag>;
    LocalGatewayVirtualInterfaceGroupId: Value<string>;
}
export default class LocalGatewayRouteTableVirtualInterfaceGroupAssociation extends ResourceBase<LocalGatewayRouteTableVirtualInterfaceGroupAssociationProperties> {
    constructor(properties: LocalGatewayRouteTableVirtualInterfaceGroupAssociationProperties);
}
