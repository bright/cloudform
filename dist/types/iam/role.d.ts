import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface PolicyProperties {
    PolicyDocument: any;
    PolicyName: Value<string>;
}
export declare class Policy extends ResourceBase {
    constructor(properties: PolicyProperties, dependsOn?: Value<string>);
}
export interface RoleProperties {
    AssumeRolePolicyDocument: any;
    ManagedPolicyArns?: Value<string>[];
    Path?: Value<string>;
    Policies?: Policy[];
    RoleName?: Value<string>;
}
export default class Role extends ResourceBase {
    constructor(properties: RoleProperties, dependsOn?: Value<string>);
}
