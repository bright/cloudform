import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ComponentConfigurationUpdate {
    Merge?: Value<string>;
    Reset?: List<Value<string>>;
    constructor(properties: ComponentConfigurationUpdate);
}
export declare class ComponentDeploymentSpecification {
    RunWith?: ComponentRunWith;
    ConfigurationUpdate?: ComponentConfigurationUpdate;
    ComponentVersion?: Value<string>;
    constructor(properties: ComponentDeploymentSpecification);
}
export declare class ComponentRunWith {
    WindowsUser?: Value<string>;
    SystemResourceLimits?: SystemResourceLimits;
    PosixUser?: Value<string>;
    constructor(properties: ComponentRunWith);
}
export declare class DeploymentComponentUpdatePolicy {
    Action?: Value<string>;
    TimeoutInSeconds?: Value<number>;
    constructor(properties: DeploymentComponentUpdatePolicy);
}
export declare class DeploymentConfigurationValidationPolicy {
    TimeoutInSeconds?: Value<number>;
    constructor(properties: DeploymentConfigurationValidationPolicy);
}
export declare class DeploymentIoTJobConfiguration {
    JobExecutionsRolloutConfig?: IoTJobExecutionsRolloutConfig;
    TimeoutConfig?: IoTJobTimeoutConfig;
    AbortConfig?: IoTJobAbortConfig;
    constructor(properties: DeploymentIoTJobConfiguration);
}
export declare class DeploymentPolicies {
    ComponentUpdatePolicy?: DeploymentComponentUpdatePolicy;
    ConfigurationValidationPolicy?: DeploymentConfigurationValidationPolicy;
    FailureHandlingPolicy?: Value<string>;
    constructor(properties: DeploymentPolicies);
}
export declare class IoTJobAbortConfig {
    CriteriaList: List<IoTJobAbortCriteria>;
    constructor(properties: IoTJobAbortConfig);
}
export declare class IoTJobAbortCriteria {
    FailureType: Value<string>;
    Action: Value<string>;
    ThresholdPercentage: Value<number>;
    MinNumberOfExecutedThings: Value<number>;
    constructor(properties: IoTJobAbortCriteria);
}
export declare class IoTJobExecutionsRolloutConfig {
    MaximumPerMinute?: Value<number>;
    ExponentialRate?: IoTJobExponentialRolloutRate;
    constructor(properties: IoTJobExecutionsRolloutConfig);
}
export declare class IoTJobExponentialRolloutRate {
    RateIncreaseCriteria: IoTJobRateIncreaseCriteria;
    BaseRatePerMinute: Value<number>;
    IncrementFactor: Value<number>;
    constructor(properties: IoTJobExponentialRolloutRate);
}
export declare class IoTJobRateIncreaseCriteria {
    NumberOfSucceededThings?: Value<number>;
    NumberOfNotifiedThings?: Value<number>;
    constructor(properties: IoTJobRateIncreaseCriteria);
}
export declare class IoTJobTimeoutConfig {
    InProgressTimeoutInMinutes?: Value<number>;
    constructor(properties: IoTJobTimeoutConfig);
}
export declare class SystemResourceLimits {
    Memory?: Value<number>;
    Cpus?: Value<number>;
    constructor(properties: SystemResourceLimits);
}
export interface DeploymentProperties {
    Components?: {
        [key: string]: ComponentDeploymentSpecification;
    };
    DeploymentName?: Value<string>;
    IotJobConfiguration?: DeploymentIoTJobConfiguration;
    DeploymentPolicies?: DeploymentPolicies;
    TargetArn: Value<string>;
    ParentTargetArn?: Value<string>;
    Tags?: {
        [key: string]: Value<string>;
    };
}
export default class Deployment extends ResourceBase<DeploymentProperties> {
    static ComponentConfigurationUpdate: typeof ComponentConfigurationUpdate;
    static ComponentDeploymentSpecification: typeof ComponentDeploymentSpecification;
    static ComponentRunWith: typeof ComponentRunWith;
    static DeploymentComponentUpdatePolicy: typeof DeploymentComponentUpdatePolicy;
    static DeploymentConfigurationValidationPolicy: typeof DeploymentConfigurationValidationPolicy;
    static DeploymentIoTJobConfiguration: typeof DeploymentIoTJobConfiguration;
    static DeploymentPolicies: typeof DeploymentPolicies;
    static IoTJobAbortConfig: typeof IoTJobAbortConfig;
    static IoTJobAbortCriteria: typeof IoTJobAbortCriteria;
    static IoTJobExecutionsRolloutConfig: typeof IoTJobExecutionsRolloutConfig;
    static IoTJobExponentialRolloutRate: typeof IoTJobExponentialRolloutRate;
    static IoTJobRateIncreaseCriteria: typeof IoTJobRateIncreaseCriteria;
    static IoTJobTimeoutConfig: typeof IoTJobTimeoutConfig;
    static SystemResourceLimits: typeof SystemResourceLimits;
    constructor(properties: DeploymentProperties);
}
