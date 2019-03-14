import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface TransitGatewayRouteProperties {
    TransitGatewayRouteTableId: Value<string>;
    DestinationCidrBlock?: Value<string>;
    Blackhole?: Value<boolean>;
    TransitGatewayAttachmentId?: Value<string>;
}
export default class TransitGatewayRoute extends ResourceBase<TransitGatewayRouteProperties> {
    constructor(properties: TransitGatewayRouteProperties);
}
