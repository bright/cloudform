import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface AccountPolicyProperties {
    PolicyType: Value<string>;
    Scope?: Value<string>;
    PolicyName: Value<string>;
    PolicyDocument: Value<string>;
}
export default class AccountPolicy extends ResourceBase<AccountPolicyProperties> {
    constructor(properties: AccountPolicyProperties);
}
