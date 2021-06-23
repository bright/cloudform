import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface ReplicaKeyProperties {
    PrimaryKeyArn: Value<string>;
    Description?: Value<string>;
    Enabled?: Value<boolean>;
    KeyPolicy: {
        [key: string]: any;
    };
    PendingWindowInDays?: Value<number>;
    Tags?: List<ResourceTag>;
}
export default class ReplicaKey extends ResourceBase<ReplicaKeyProperties> {
    constructor(properties: ReplicaKeyProperties);
}
