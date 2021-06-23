import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface AddonProperties {
    ClusterName: Value<string>;
    AddonName: Value<string>;
    AddonVersion?: Value<string>;
    ResolveConflicts?: Value<string>;
    ServiceAccountRoleArn?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class Addon extends ResourceBase<AddonProperties> {
    constructor(properties: AddonProperties);
}
