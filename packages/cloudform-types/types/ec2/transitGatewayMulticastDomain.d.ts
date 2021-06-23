import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface TransitGatewayMulticastDomainProperties {
    TransitGatewayId: Value<string>;
    Tags?: List<ResourceTag>;
    Options?: {
        [key: string]: any;
    };
}
export default class TransitGatewayMulticastDomain extends ResourceBase<TransitGatewayMulticastDomainProperties> {
    constructor(properties: TransitGatewayMulticastDomainProperties);
}
