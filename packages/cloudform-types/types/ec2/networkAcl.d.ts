import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface NetworkAclProperties {
    Tags?: List<ResourceTag>;
    VpcId: Value<string>;
}
export default class NetworkAcl extends ResourceBase<NetworkAclProperties> {
    constructor(properties: NetworkAclProperties);
}
