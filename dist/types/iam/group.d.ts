import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface PolicyProperties {
    PolicyDocument: any;
    PolicyName: Value<string>;
}
export declare class Policy extends ResourceBase {
    constructor(properties: PolicyProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface GroupProperties {
    GroupName?: Value<string>;
    ManagedPolicyArns?: List<Value<string>>;
    Path?: Value<string>;
    Policies?: List<Policy>;
}
export default class Group extends ResourceBase {
    constructor(properties: GroupProperties, dependsOn?: Value<string> | Value<string>[]);
}
