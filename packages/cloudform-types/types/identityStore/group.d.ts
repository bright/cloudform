import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface GroupProperties {
    Description?: Value<string>;
    DisplayName: Value<string>;
    IdentityStoreId: Value<string>;
}
export default class Group extends ResourceBase<GroupProperties> {
    constructor(properties: GroupProperties);
}
