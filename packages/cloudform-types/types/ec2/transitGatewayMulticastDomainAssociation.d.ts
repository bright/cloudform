import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface TransitGatewayMulticastDomainAssociationProperties {
    TransitGatewayMulticastDomainId: Value<string>;
    SubnetId: Value<string>;
    TransitGatewayAttachmentId: Value<string>;
}
export default class TransitGatewayMulticastDomainAssociation extends ResourceBase<TransitGatewayMulticastDomainAssociationProperties> {
    constructor(properties: TransitGatewayMulticastDomainAssociationProperties);
}
