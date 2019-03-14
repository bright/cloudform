import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface TransitGatewayRouteTableProperties {
    TransitGatewayId: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class TransitGatewayRouteTable extends ResourceBase<TransitGatewayRouteTableProperties> {
    constructor(properties: TransitGatewayRouteTableProperties);
}
