import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class HealthEventsConfig {
    AvailabilityLocalHealthEventsConfig?: LocalHealthEventsConfig;
    PerformanceScoreThreshold?: Value<number>;
    PerformanceLocalHealthEventsConfig?: LocalHealthEventsConfig;
    AvailabilityScoreThreshold?: Value<number>;
    constructor(properties: HealthEventsConfig);
}
export declare class InternetMeasurementsLogDelivery {
    S3Config?: S3Config;
    constructor(properties: InternetMeasurementsLogDelivery);
}
export declare class LocalHealthEventsConfig {
    Status?: Value<string>;
    HealthScoreThreshold?: Value<number>;
    MinTrafficImpact?: Value<number>;
    constructor(properties: LocalHealthEventsConfig);
}
export declare class S3Config {
    BucketName?: Value<string>;
    LogDeliveryStatus?: Value<string>;
    BucketPrefix?: Value<string>;
    constructor(properties: S3Config);
}
export interface MonitorProperties {
    Status?: Value<string>;
    TrafficPercentageToMonitor?: Value<number>;
    HealthEventsConfig?: HealthEventsConfig;
    ResourcesToAdd?: List<Value<string>>;
    InternetMeasurementsLogDelivery?: InternetMeasurementsLogDelivery;
    MonitorName: Value<string>;
    ResourcesToRemove?: List<Value<string>>;
    Resources?: List<Value<string>>;
    MaxCityNetworksToMonitor?: Value<number>;
    Tags?: List<ResourceTag>;
}
export default class Monitor extends ResourceBase<MonitorProperties> {
    static HealthEventsConfig: typeof HealthEventsConfig;
    static InternetMeasurementsLogDelivery: typeof InternetMeasurementsLogDelivery;
    static LocalHealthEventsConfig: typeof LocalHealthEventsConfig;
    static S3Config: typeof S3Config;
    constructor(properties: MonitorProperties);
}
