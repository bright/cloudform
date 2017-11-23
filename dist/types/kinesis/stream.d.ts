import { ResourceBase, ResourceTag } from '../resource';
import { Value } from '../dataTypes';
export interface StreamProperties {
    Name?: Value<string>;
    RetentionPeriodHours?: Value<number>;
    ShardCount: Value<number>;
    Tags?: ResourceTag[];
}
export default class Stream extends ResourceBase {
    constructor(properties: StreamProperties, dependsOn?: Value<string>);
}
