import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface NetworkPerformanceMetricSubscriptionProperties {
    Destination: Value<string>;
    Statistic: Value<string>;
    Metric: Value<string>;
    Source: Value<string>;
}
export default class NetworkPerformanceMetricSubscription extends ResourceBase<NetworkPerformanceMetricSubscriptionProperties> {
    constructor(properties: NetworkPerformanceMetricSubscriptionProperties);
}
