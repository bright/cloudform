import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface QueueProperties {
    ContentBasedDeduplication?: Value<boolean>;
    DelaySeconds?: Value<number>;
    FifoQueue?: Value<boolean>;
    KmsDataKeyReusePeriodSeconds?: Value<number>;
    KmsMasterKeyId?: Value<string>;
    MaximumMessageSize?: Value<number>;
    MessageRetentionPeriod?: Value<number>;
    QueueName?: Value<string>;
    ReceiveMessageWaitTimeSeconds?: Value<number>;
    RedrivePolicy?: {
        [key: string]: any;
    };
    Tags?: List<ResourceTag>;
    VisibilityTimeout?: Value<number>;
}
export default class Queue extends ResourceBase<QueueProperties> {
    constructor(properties?: QueueProperties);
}
