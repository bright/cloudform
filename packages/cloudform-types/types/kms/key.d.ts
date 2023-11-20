import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface KeyProperties {
    Origin?: Value<string>;
    MultiRegion?: Value<boolean>;
    Description?: Value<string>;
    PendingWindowInDays?: Value<number>;
    BypassPolicyLockoutSafetyCheck?: Value<boolean>;
    KeyPolicy?: {
        [key: string]: any;
    };
    KeySpec?: Value<string>;
    Enabled?: Value<boolean>;
    KeyUsage?: Value<string>;
    EnableKeyRotation?: Value<boolean>;
    Tags?: List<ResourceTag>;
}
export default class Key extends ResourceBase<KeyProperties> {
    constructor(properties?: KeyProperties);
}
