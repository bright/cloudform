import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface NatGatewayProperties {
    AllocationId: Value<string>;
    SubnetId: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class NatGateway extends ResourceBase<NatGatewayProperties> {
    constructor(properties: NatGatewayProperties);
}
