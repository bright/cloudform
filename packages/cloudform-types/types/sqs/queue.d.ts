import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface QueueProperties {
    ReceiveMessageWaitTimeSeconds?: Value<number>;
    FifoThroughputLimit?: Value<string>;
    KmsMasterKeyId?: Value<string>;
    FifoQueue?: Value<boolean>;
    MaximumMessageSize?: Value<number>;
    VisibilityTimeout?: Value<number>;
    KmsDataKeyReusePeriodSeconds?: Value<number>;
    RedriveAllowPolicy?: {
        [key: string]: any;
    };
    SqsManagedSseEnabled?: Value<boolean>;
    DelaySeconds?: Value<number>;
    RedrivePolicy?: {
        [key: string]: any;
    };
    MessageRetentionPeriod?: Value<number>;
    DeduplicationScope?: Value<string>;
    ContentBasedDeduplication?: Value<boolean>;
    QueueName?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class Queue extends ResourceBase<QueueProperties> {
    constructor(properties?: QueueProperties);
}
