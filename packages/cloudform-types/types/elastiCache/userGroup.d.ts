import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface UserGroupProperties {
    UserGroupId: Value<string>;
    Engine: Value<string>;
    UserIds: List<Value<string>>;
    Tags?: List<ResourceTag>;
}
export default class UserGroup extends ResourceBase<UserGroupProperties> {
    constructor(properties: UserGroupProperties);
}
