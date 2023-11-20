import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AbortConfig {
    CriteriaList: List<AbortCriteria>;
    constructor(properties: AbortConfig);
}
export declare class AbortCriteria {
    Action: Value<string>;
    FailureType: Value<string>;
    ThresholdPercentage: Value<number>;
    MinNumberOfExecutedThings: Value<number>;
    constructor(properties: AbortCriteria);
}
export declare class ExponentialRolloutRate {
    RateIncreaseCriteria: RateIncreaseCriteria;
    BaseRatePerMinute: Value<number>;
    IncrementFactor: Value<number>;
    constructor(properties: ExponentialRolloutRate);
}
export declare class JobExecutionsRetryConfig {
    RetryCriteriaList?: List<RetryCriteria>;
    constructor(properties: JobExecutionsRetryConfig);
}
export declare class JobExecutionsRolloutConfig {
    MaximumPerMinute?: Value<number>;
    ExponentialRolloutRate?: ExponentialRolloutRate;
    constructor(properties: JobExecutionsRolloutConfig);
}
export declare class MaintenanceWindow {
    DurationInMinutes?: Value<number>;
    StartTime?: Value<string>;
    constructor(properties: MaintenanceWindow);
}
export declare class PresignedUrlConfig {
    ExpiresInSec?: Value<number>;
    RoleArn: Value<string>;
    constructor(properties: PresignedUrlConfig);
}
export declare class RateIncreaseCriteria {
    NumberOfSucceededThings?: Value<number>;
    NumberOfNotifiedThings?: Value<number>;
    constructor(properties: RateIncreaseCriteria);
}
export declare class RetryCriteria {
    FailureType?: Value<string>;
    NumberOfRetries?: Value<number>;
    constructor(properties: RetryCriteria);
}
export declare class TimeoutConfig {
    InProgressTimeoutInMinutes: Value<number>;
    constructor(properties: TimeoutConfig);
}
export interface JobTemplateProperties {
    TimeoutConfig?: TimeoutConfig;
    Description: Value<string>;
    JobExecutionsRetryConfig?: JobExecutionsRetryConfig;
    AbortConfig?: AbortConfig;
    JobTemplateId: Value<string>;
    Document?: Value<string>;
    DestinationPackageVersions?: List<Value<string>>;
    JobArn?: Value<string>;
    JobExecutionsRolloutConfig?: JobExecutionsRolloutConfig;
    DocumentSource?: Value<string>;
    MaintenanceWindows?: List<MaintenanceWindow>;
    PresignedUrlConfig?: PresignedUrlConfig;
    Tags?: List<ResourceTag>;
}
export default class JobTemplate extends ResourceBase<JobTemplateProperties> {
    static AbortConfig: typeof AbortConfig;
    static AbortCriteria: typeof AbortCriteria;
    static ExponentialRolloutRate: typeof ExponentialRolloutRate;
    static JobExecutionsRetryConfig: typeof JobExecutionsRetryConfig;
    static JobExecutionsRolloutConfig: typeof JobExecutionsRolloutConfig;
    static MaintenanceWindow: typeof MaintenanceWindow;
    static PresignedUrlConfig: typeof PresignedUrlConfig;
    static RateIncreaseCriteria: typeof RateIncreaseCriteria;
    static RetryCriteria: typeof RetryCriteria;
    static TimeoutConfig: typeof TimeoutConfig;
    constructor(properties: JobTemplateProperties);
}
