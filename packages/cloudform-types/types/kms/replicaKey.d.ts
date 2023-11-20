import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface ReplicaKeyProperties {
    Description?: Value<string>;
    PendingWindowInDays?: Value<number>;
    KeyPolicy: {
        [key: string]: any;
    };
    PrimaryKeyArn: Value<string>;
    Enabled?: Value<boolean>;
    Tags?: List<ResourceTag>;
}
export default class ReplicaKey extends ResourceBase<ReplicaKeyProperties> {
    constructor(properties: ReplicaKeyProperties);
}
