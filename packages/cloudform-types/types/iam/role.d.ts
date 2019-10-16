import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Policy {
    PolicyDocument: {
        [key: string]: any;
    };
    PolicyName: Value<string>;
    constructor(properties: Policy);
}
export interface RoleProperties {
    AssumeRolePolicyDocument: {
        [key: string]: any;
    };
    Description?: Value<string>;
    ManagedPolicyArns?: List<Value<string>>;
    MaxSessionDuration?: Value<number>;
    Path?: Value<string>;
    PermissionsBoundary?: Value<string>;
    Policies?: List<Policy>;
    RoleName?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class Role extends ResourceBase<RoleProperties> {
    static Policy: typeof Policy;
    constructor(properties: RoleProperties);
}
