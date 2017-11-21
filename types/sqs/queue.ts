import {ResourceBase} from '../resource'
import {Value} from '../internal'
import RedrivePolicy from './redrivePolicy'



export interface QueueProperties {
    ContentBasedDeduplication?: Value<boolean>
    DelaySeconds?: Value<number>
    FifoQueue?: Value<boolean>
    MaximumMessageSize?: Value<number>
    MessageRetentionPeriod?: Value<number>
    QueueName?: Value<string>
    ReceiveMessageWaitTimeSeconds?: Value<number>
    RedrivePolicy?: RedrivePolicy
    VisibilityTimeout?: Value<number>
}

export default class Queue extends ResourceBase {
    constructor(properties: QueueProperties, dependsOn?: Value<string>) {
        super('AWS::SQS::Queue', properties, dependsOn)
    }
}