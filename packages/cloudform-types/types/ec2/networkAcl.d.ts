import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface NetworkAclProperties {
    VpcId: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class NetworkAcl extends ResourceBase<NetworkAclProperties> {
    constructor(properties: NetworkAclProperties);
}
