import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class MonitoringSubscriptionInner {
    RealtimeMetricsSubscriptionConfig?: RealtimeMetricsSubscriptionConfig;
    constructor(properties: MonitoringSubscriptionInner);
}
export declare class RealtimeMetricsSubscriptionConfig {
    RealtimeMetricsSubscriptionStatus: Value<string>;
    constructor(properties: RealtimeMetricsSubscriptionConfig);
}
export interface MonitoringSubscriptionProperties {
    MonitoringSubscription: MonitoringSubscription;
    DistributionId: Value<string>;
}
export default class MonitoringSubscription extends ResourceBase<MonitoringSubscriptionProperties> {
    static MonitoringSubscription: typeof MonitoringSubscriptionInner;
    static RealtimeMetricsSubscriptionConfig: typeof RealtimeMetricsSubscriptionConfig;
    constructor(properties: MonitoringSubscriptionProperties);
}
