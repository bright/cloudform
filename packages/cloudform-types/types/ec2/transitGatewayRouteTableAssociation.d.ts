import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface TransitGatewayRouteTableAssociationProperties {
    TransitGatewayRouteTableId: Value<string>;
    TransitGatewayAttachmentId: Value<string>;
}
export default class TransitGatewayRouteTableAssociation extends ResourceBase<TransitGatewayRouteTableAssociationProperties> {
    constructor(properties: TransitGatewayRouteTableAssociationProperties);
}
