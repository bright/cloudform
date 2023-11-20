import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Policy {
    PolicyName: Value<string>;
    PolicyDocument: {
        [key: string]: any;
    };
    constructor(properties: Policy);
}
export interface RoleProperties {
    Path?: Value<string>;
    ManagedPolicyArns?: List<Value<string>>;
    MaxSessionDuration?: Value<number>;
    RoleName?: Value<string>;
    Description?: Value<string>;
    Policies?: List<Policy>;
    AssumeRolePolicyDocument: {
        [key: string]: any;
    };
    Tags?: List<ResourceTag>;
    PermissionsBoundary?: Value<string>;
}
export default class Role extends ResourceBase<RoleProperties> {
    static Policy: typeof Policy;
    constructor(properties: RoleProperties);
}
