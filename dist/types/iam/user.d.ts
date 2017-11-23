import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface LoginProfileProperties {
    Password: Value<string>;
    PasswordResetRequired?: Value<boolean>;
}
export declare class LoginProfile extends ResourceBase {
    constructor(properties: LoginProfileProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface PolicyProperties {
    PolicyDocument: any;
    PolicyName: Value<string>;
}
export declare class Policy extends ResourceBase {
    constructor(properties: PolicyProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface UserProperties {
    Groups?: List<Value<string>>;
    LoginProfile?: LoginProfile;
    ManagedPolicyArns?: List<Value<string>>;
    Path?: Value<string>;
    Policies?: List<Policy>;
    UserName?: Value<string>;
}
export default class User extends ResourceBase {
    constructor(properties: UserProperties, dependsOn?: Value<string> | Value<string>[]);
}
