import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface ClusterSecurityGroupProperties {
    Description: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class ClusterSecurityGroup extends ResourceBase<ClusterSecurityGroupProperties> {
    constructor(properties: ClusterSecurityGroupProperties);
}
