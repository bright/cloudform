import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface GroupPolicyProperties {
    GroupName: Value<string>;
    PolicyName: Value<string>;
    PolicyDocument?: {
        [key: string]: any;
    };
}
export default class GroupPolicy extends ResourceBase<GroupPolicyProperties> {
    constructor(properties: GroupPolicyProperties);
}
