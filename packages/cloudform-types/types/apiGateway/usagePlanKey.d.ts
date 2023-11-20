import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface UsagePlanKeyProperties {
    KeyType: Value<string>;
    UsagePlanId: Value<string>;
    KeyId: Value<string>;
}
export default class UsagePlanKey extends ResourceBase<UsagePlanKeyProperties> {
    constructor(properties: UsagePlanKeyProperties);
}
