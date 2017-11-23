import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface QueuePolicyProperties {
    PolicyDocument: any;
    Queues: Value<string>[];
}
export default class QueuePolicy extends ResourceBase {
    constructor(properties: QueuePolicyProperties, dependsOn?: Value<string>);
}
