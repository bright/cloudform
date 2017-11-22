import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface UsagePlanKeyProperties {
    KeyId: Value<string>;
    KeyType: Value<string>;
    UsagePlanId: Value<string>;
}
export default class UsagePlanKey extends ResourceBase {
    constructor(properties: UsagePlanKeyProperties, dependsOn?: Value<string>);
}
