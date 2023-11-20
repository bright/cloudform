import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface TrackerConsumerProperties {
    TrackerName: Value<string>;
    ConsumerArn: Value<string>;
}
export default class TrackerConsumer extends ResourceBase<TrackerConsumerProperties> {
    constructor(properties: TrackerConsumerProperties);
}
