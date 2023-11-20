import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface ProtectionGroupProperties {
    Aggregation: Value<string>;
    Pattern: Value<string>;
    ProtectionGroupId: Value<string>;
    ResourceType?: Value<string>;
    Members?: List<Value<string>>;
    Tags?: List<ResourceTag>;
}
export default class ProtectionGroup extends ResourceBase<ProtectionGroupProperties> {
    constructor(properties: ProtectionGroupProperties);
}
