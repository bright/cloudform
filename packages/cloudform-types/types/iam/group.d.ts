import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Policy {
    PolicyName: Value<string>;
    PolicyDocument: {
        [key: string]: any;
    };
    constructor(properties: Policy);
}
export interface GroupProperties {
    GroupName?: Value<string>;
    Path?: Value<string>;
    ManagedPolicyArns?: List<Value<string>>;
    Policies?: List<Policy>;
}
export default class Group extends ResourceBase<GroupProperties> {
    static Policy: typeof Policy;
    constructor(properties?: GroupProperties);
}
