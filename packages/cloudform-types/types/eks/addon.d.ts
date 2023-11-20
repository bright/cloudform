import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface AddonProperties {
    PreserveOnDelete?: Value<boolean>;
    AddonVersion?: Value<string>;
    ServiceAccountRoleArn?: Value<string>;
    ClusterName: Value<string>;
    AddonName: Value<string>;
    ResolveConflicts?: Value<string>;
    Tags?: List<ResourceTag>;
    ConfigurationValues?: Value<string>;
}
export default class Addon extends ResourceBase<AddonProperties> {
    constructor(properties: AddonProperties);
}
