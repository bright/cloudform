import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface LoginProfileProperties {
    Password: Value<string>;
    PasswordResetRequired?: Value<boolean>;
}
export declare class LoginProfile extends ResourceBase {
    constructor(properties: LoginProfileProperties, dependsOn?: Value<string>);
}
export interface PolicyProperties {
    PolicyDocument: any;
    PolicyName: Value<string>;
}
export declare class Policy extends ResourceBase {
    constructor(properties: PolicyProperties, dependsOn?: Value<string>);
}
export interface UserProperties {
    Groups?: Value<string>[];
    LoginProfile?: LoginProfile;
    ManagedPolicyArns?: Value<string>[];
    Path?: Value<string>;
    Policies?: Policy[];
    UserName?: Value<string>;
}
export default class User extends ResourceBase {
    constructor(properties: UserProperties, dependsOn?: Value<string>);
}
