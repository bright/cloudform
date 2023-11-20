import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface TransitGatewayPeeringProperties {
    CoreNetworkId: Value<string>;
    TransitGatewayArn: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class TransitGatewayPeering extends ResourceBase<TransitGatewayPeeringProperties> {
    constructor(properties: TransitGatewayPeeringProperties);
}
