import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface TransitGatewayRouteTablePropagationProperties {
    TransitGatewayRouteTableId: Value<string>;
    TransitGatewayAttachmentId: Value<string>;
}
export default class TransitGatewayRouteTablePropagation extends ResourceBase<TransitGatewayRouteTablePropagationProperties> {
    constructor(properties: TransitGatewayRouteTablePropagationProperties);
}
