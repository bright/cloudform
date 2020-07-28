import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Tags {
    Tags?: List<ResourceTag>;
    constructor(properties: Tags);
}
export interface LocalGatewayRouteTableVPCAssociationProperties {
    LocalGatewayRouteTableId: Value<string>;
    VpcId: Value<string>;
    Tags?: Tags;
}
export default class LocalGatewayRouteTableVPCAssociation extends ResourceBase<LocalGatewayRouteTableVPCAssociationProperties> {
    static Tags: typeof Tags;
    constructor(properties: LocalGatewayRouteTableVPCAssociationProperties);
}
