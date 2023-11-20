import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface AccountProperties {
    RoleName?: Value<string>;
    Email: Value<string>;
    ParentIds?: List<Value<string>>;
    Tags?: List<ResourceTag>;
    AccountName: Value<string>;
}
export default class Account extends ResourceBase<AccountProperties> {
    constructor(properties: AccountProperties);
}
