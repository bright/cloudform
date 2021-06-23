import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface UserGroupProperties {
    UserGroupId: Value<string>;
    Engine: Value<string>;
    UserIds?: List<Value<string>>;
}
export default class UserGroup extends ResourceBase<UserGroupProperties> {
    constructor(properties: UserGroupProperties);
}
