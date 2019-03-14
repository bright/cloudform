import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class LoginProfile {
    Password: Value<string>;
    PasswordResetRequired?: Value<boolean>;
    constructor(properties: LoginProfile);
}
export declare class Policy {
    PolicyDocument: {
        [key: string]: any;
    };
    PolicyName: Value<string>;
    constructor(properties: Policy);
}
export interface UserProperties {
    Groups?: List<Value<string>>;
    LoginProfile?: LoginProfile;
    ManagedPolicyArns?: List<Value<string>>;
    Path?: Value<string>;
    PermissionsBoundary?: Value<string>;
    Policies?: List<Policy>;
    UserName?: Value<string>;
}
export default class User extends ResourceBase<UserProperties> {
    static LoginProfile: typeof LoginProfile;
    static Policy: typeof Policy;
    constructor(properties?: UserProperties);
}
