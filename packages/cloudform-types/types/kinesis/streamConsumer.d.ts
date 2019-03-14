import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface StreamConsumerProperties {
    ConsumerName: Value<string>;
    StreamARN: Value<string>;
}
export default class StreamConsumer extends ResourceBase<StreamConsumerProperties> {
    constructor(properties: StreamConsumerProperties);
}
