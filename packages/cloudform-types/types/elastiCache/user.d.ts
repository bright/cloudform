import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AuthenticationMode {
    Type: Value<string>;
    Passwords?: List<Value<string>>;
    constructor(properties: AuthenticationMode);
}
export interface UserProperties {
    AuthenticationMode?: AuthenticationMode;
    UserName: Value<string>;
    NoPasswordRequired?: Value<boolean>;
    AccessString?: Value<string>;
    UserId: Value<string>;
    Passwords?: List<Value<string>>;
    Engine: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class User extends ResourceBase<UserProperties> {
    static AuthenticationMode: typeof AuthenticationMode;
    constructor(properties: UserProperties);
}
