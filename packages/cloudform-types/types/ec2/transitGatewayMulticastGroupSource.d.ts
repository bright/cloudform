import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface TransitGatewayMulticastGroupSourceProperties {
    GroupIpAddress: Value<string>;
    TransitGatewayMulticastDomainId: Value<string>;
    NetworkInterfaceId: Value<string>;
}
export default class TransitGatewayMulticastGroupSource extends ResourceBase<TransitGatewayMulticastGroupSourceProperties> {
    constructor(properties: TransitGatewayMulticastGroupSourceProperties);
}
