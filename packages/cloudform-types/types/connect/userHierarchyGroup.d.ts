import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface UserHierarchyGroupProperties {
    InstanceArn: Value<string>;
    ParentGroupArn?: Value<string>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class UserHierarchyGroup extends ResourceBase<UserHierarchyGroupProperties> {
    constructor(properties: UserHierarchyGroupProperties);
}
