import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AutoScalingPolicy {
    Constraints: ScalingConstraints;
    Rules: List<ScalingRule>;
    constructor(properties: AutoScalingPolicy);
}
export declare class CloudWatchAlarmDefinition {
    ComparisonOperator: Value<string>;
    Dimensions?: List<MetricDimension>;
    EvaluationPeriods?: Value<number>;
    MetricName: Value<string>;
    Namespace?: Value<string>;
    Period: Value<number>;
    Statistic?: Value<string>;
    Threshold: Value<number>;
    Unit?: Value<string>;
    constructor(properties: CloudWatchAlarmDefinition);
}
export declare class Configuration {
    Classification?: Value<string>;
    ConfigurationProperties?: {
        [key: string]: Value<string>;
    };
    Configurations?: List<Configuration>;
    constructor(properties: Configuration);
}
export declare class EbsBlockDeviceConfig {
    VolumeSpecification: VolumeSpecification;
    VolumesPerInstance?: Value<number>;
    constructor(properties: EbsBlockDeviceConfig);
}
export declare class EbsConfiguration {
    EbsBlockDeviceConfigs?: List<EbsBlockDeviceConfig>;
    EbsOptimized?: Value<boolean>;
    constructor(properties: EbsConfiguration);
}
export declare class MetricDimension {
    Key: Value<string>;
    Value: Value<string>;
    constructor(properties: MetricDimension);
}
export declare class ScalingAction {
    Market?: Value<string>;
    SimpleScalingPolicyConfiguration: SimpleScalingPolicyConfiguration;
    constructor(properties: ScalingAction);
}
export declare class ScalingConstraints {
    MaxCapacity: Value<number>;
    MinCapacity: Value<number>;
    constructor(properties: ScalingConstraints);
}
export declare class ScalingRule {
    Action: ScalingAction;
    Description?: Value<string>;
    Name: Value<string>;
    Trigger: ScalingTrigger;
    constructor(properties: ScalingRule);
}
export declare class ScalingTrigger {
    CloudWatchAlarmDefinition: CloudWatchAlarmDefinition;
    constructor(properties: ScalingTrigger);
}
export declare class SimpleScalingPolicyConfiguration {
    AdjustmentType?: Value<string>;
    CoolDown?: Value<number>;
    ScalingAdjustment: Value<number>;
    constructor(properties: SimpleScalingPolicyConfiguration);
}
export declare class VolumeSpecification {
    Iops?: Value<number>;
    SizeInGB: Value<number>;
    Throughput?: Value<number>;
    VolumeType: Value<string>;
    constructor(properties: VolumeSpecification);
}
export interface InstanceGroupConfigProperties {
    AutoScalingPolicy?: AutoScalingPolicy;
    BidPrice?: Value<string>;
    Configurations?: List<Configuration>;
    CustomAmiId?: Value<string>;
    EbsConfiguration?: EbsConfiguration;
    InstanceCount: Value<number>;
    InstanceRole: Value<string>;
    InstanceType: Value<string>;
    JobFlowId: Value<string>;
    Market?: Value<string>;
    Name?: Value<string>;
}
export default class InstanceGroupConfig extends ResourceBase<InstanceGroupConfigProperties> {
    static AutoScalingPolicy: typeof AutoScalingPolicy;
    static CloudWatchAlarmDefinition: typeof CloudWatchAlarmDefinition;
    static Configuration: typeof Configuration;
    static EbsBlockDeviceConfig: typeof EbsBlockDeviceConfig;
    static EbsConfiguration: typeof EbsConfiguration;
    static MetricDimension: typeof MetricDimension;
    static ScalingAction: typeof ScalingAction;
    static ScalingConstraints: typeof ScalingConstraints;
    static ScalingRule: typeof ScalingRule;
    static ScalingTrigger: typeof ScalingTrigger;
    static SimpleScalingPolicyConfiguration: typeof SimpleScalingPolicyConfiguration;
    static VolumeSpecification: typeof VolumeSpecification;
    constructor(properties: InstanceGroupConfigProperties);
}
