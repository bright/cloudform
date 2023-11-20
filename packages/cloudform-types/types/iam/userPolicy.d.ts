import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface UserPolicyProperties {
    UserName: Value<string>;
    PolicyName: Value<string>;
    PolicyDocument?: {
        [key: string]: any;
    };
}
export default class UserPolicy extends ResourceBase<UserPolicyProperties> {
    constructor(properties: UserPolicyProperties);
}
