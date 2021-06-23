import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface KeyProperties {
    Description?: Value<string>;
    Enabled?: Value<boolean>;
    EnableKeyRotation?: Value<boolean>;
    KeyPolicy: {
        [key: string]: any;
    };
    KeyUsage?: Value<string>;
    KeySpec?: Value<string>;
    MultiRegion?: Value<boolean>;
    PendingWindowInDays?: Value<number>;
    Tags?: List<ResourceTag>;
}
export default class Key extends ResourceBase<KeyProperties> {
    constructor(properties: KeyProperties);
}
