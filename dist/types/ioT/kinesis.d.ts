import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface KinesisProperties {
    PartitionKey?: Value<string>;
    RoleArn: Value<string>;
    StreamName: Value<string>;
}
export default class Kinesis extends ResourceBase {
    constructor(properties: KinesisProperties, dependsOn?: Value<string>);
}
