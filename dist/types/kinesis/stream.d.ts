import { ResourceBase, ResourceTag } from '../resource';
import { Value } from '../internal';
export interface StreamProperties {
    Name?: Value<string>;
    ShardCount: Value<number>;
    Tags?: ResourceTag[];
}
export default class Stream extends ResourceBase {
    constructor(properties: StreamProperties, dependsOn?: Value<string>);
}
