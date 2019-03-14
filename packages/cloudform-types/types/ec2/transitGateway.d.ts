import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface TransitGatewayProperties {
    DefaultRouteTablePropagation?: Value<string>;
    Description?: Value<string>;
    AutoAcceptSharedAttachments?: Value<string>;
    DefaultRouteTableAssociation?: Value<string>;
    VpnEcmpSupport?: Value<string>;
    DnsSupport?: Value<string>;
    AmazonSideAsn?: Value<number>;
    Tags?: List<ResourceTag>;
}
export default class TransitGateway extends ResourceBase<TransitGatewayProperties> {
    constructor(properties?: TransitGatewayProperties);
}
