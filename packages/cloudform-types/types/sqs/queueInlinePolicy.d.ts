import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface QueueInlinePolicyProperties {
    PolicyDocument: {
        [key: string]: any;
    };
    Queue: Value<string>;
}
export default class QueueInlinePolicy extends ResourceBase<QueueInlinePolicyProperties> {
    constructor(properties: QueueInlinePolicyProperties);
}
