import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface SqsProperties {
    QueueUrl: Value<string>;
    RoleArn: Value<string>;
    UseBase64?: Value<string>;
}
export default class Sqs extends ResourceBase {
    constructor(properties: SqsProperties, dependsOn?: Value<string>);
}
