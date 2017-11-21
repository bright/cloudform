import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface FirehoseProperties {
    DeliveryStreamName: Value<string>;
    RoleArn: Value<string>;
    Separator: Value<string>;
}
export default class Firehose extends ResourceBase {
    constructor(properties: FirehoseProperties, dependsOn?: Value<string>);
}
