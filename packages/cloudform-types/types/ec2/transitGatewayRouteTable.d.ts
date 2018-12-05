import { ResourceBase, ResourceTag } from '../resource';
import { Value } from '../dataTypes';
export interface TransitGatewayRouteTableProperties {
    TransitGatewayId: Value<string>;
    Tags?: ResourceTag[];
}
export default class TransitGatewayRouteTable extends ResourceBase {
    constructor(properties?: TransitGatewayRouteTableProperties);
}
