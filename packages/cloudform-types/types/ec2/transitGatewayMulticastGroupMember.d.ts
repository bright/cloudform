import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface TransitGatewayMulticastGroupMemberProperties {
    GroupIpAddress: Value<string>;
    TransitGatewayMulticastDomainId: Value<string>;
    NetworkInterfaceId: Value<string>;
}
export default class TransitGatewayMulticastGroupMember extends ResourceBase<TransitGatewayMulticastGroupMemberProperties> {
    constructor(properties: TransitGatewayMulticastGroupMemberProperties);
}
