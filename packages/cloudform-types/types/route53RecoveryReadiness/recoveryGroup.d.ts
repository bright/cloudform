import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface RecoveryGroupProperties {
    RecoveryGroupName?: Value<string>;
    Cells?: List<Value<string>>;
    Tags?: List<ResourceTag>;
}
export default class RecoveryGroup extends ResourceBase<RecoveryGroupProperties> {
    constructor(properties?: RecoveryGroupProperties);
}
