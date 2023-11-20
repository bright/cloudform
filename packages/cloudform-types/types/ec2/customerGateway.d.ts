import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface CustomerGatewayProperties {
    Type: Value<string>;
    IpAddress: Value<string>;
    BgpAsn: Value<number>;
    Tags?: List<ResourceTag>;
    DeviceName?: Value<string>;
}
export default class CustomerGateway extends ResourceBase<CustomerGatewayProperties> {
    constructor(properties: CustomerGatewayProperties);
}
