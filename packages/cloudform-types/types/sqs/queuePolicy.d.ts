import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface QueuePolicyProperties {
    PolicyDocument: {
        [key: string]: any;
    };
    Queues: List<Value<string>>;
}
export default class QueuePolicy extends ResourceBase<QueuePolicyProperties> {
    constructor(properties: QueuePolicyProperties);
}
