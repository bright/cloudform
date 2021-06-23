import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface UserProperties {
    UserId: Value<string>;
    UserName: Value<string>;
    Engine: Value<string>;
    AccessString?: Value<string>;
    NoPasswordRequired?: Value<boolean>;
    Passwords?: List<Value<string>>;
}
export default class User extends ResourceBase<UserProperties> {
    constructor(properties: UserProperties);
}
