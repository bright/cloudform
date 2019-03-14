import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface CustomerGatewayProperties {
    BgpAsn: Value<number>;
    IpAddress: Value<string>;
    Tags?: List<ResourceTag>;
    Type: Value<string>;
}
export default class CustomerGateway extends ResourceBase<CustomerGatewayProperties> {
    constructor(properties: CustomerGatewayProperties);
}
