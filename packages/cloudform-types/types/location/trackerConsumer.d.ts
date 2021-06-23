import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface TrackerConsumerProperties {
    ConsumerArn: Value<string>;
    TrackerName: Value<string>;
}
export default class TrackerConsumer extends ResourceBase<TrackerConsumerProperties> {
    constructor(properties: TrackerConsumerProperties);
}
