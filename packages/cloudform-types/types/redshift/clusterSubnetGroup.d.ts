import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface ClusterSubnetGroupProperties {
    Description: Value<string>;
    SubnetIds: List<Value<string>>;
    Tags?: List<ResourceTag>;
}
export default class ClusterSubnetGroup extends ResourceBase<ClusterSubnetGroupProperties> {
    constructor(properties: ClusterSubnetGroupProperties);
}
