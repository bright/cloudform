import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class LoginProfile {
    PasswordResetRequired?: Value<boolean>;
    Password: Value<string>;
    constructor(properties: LoginProfile);
}
export declare class Policy {
    PolicyName: Value<string>;
    PolicyDocument: {
        [key: string]: any;
    };
    constructor(properties: Policy);
}
export interface UserProperties {
    Path?: Value<string>;
    ManagedPolicyArns?: List<Value<string>>;
    Policies?: List<Policy>;
    UserName?: Value<string>;
    Groups?: List<Value<string>>;
    LoginProfile?: LoginProfile;
    Tags?: List<ResourceTag>;
    PermissionsBoundary?: Value<string>;
}
export default class User extends ResourceBase<UserProperties> {
    static LoginProfile: typeof LoginProfile;
    static Policy: typeof Policy;
    constructor(properties?: UserProperties);
}
