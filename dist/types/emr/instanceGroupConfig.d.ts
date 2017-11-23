import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface EbsBlockDeviceConfigProperties {
    VolumeSpecification: VolumeSpecification;
    VolumesPerInstance?: Value<number>;
}
export declare class EbsBlockDeviceConfig extends ResourceBase {
    constructor(properties: EbsBlockDeviceConfigProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface ConfigurationProperties {
    Classification?: Value<string>;
    ConfigurationProperties?: {
        [key: string]: Value<string>;
    };
    Configurations?: Configuration[];
}
export declare class Configuration extends ResourceBase {
    constructor(properties: ConfigurationProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface MetricDimensionProperties {
    Key: Value<string>;
    Value: Value<string>;
}
export declare class MetricDimension extends ResourceBase {
    constructor(properties: MetricDimensionProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface SimpleScalingPolicyConfigurationProperties {
    AdjustmentType?: Value<string>;
    CoolDown?: Value<number>;
    ScalingAdjustment: Value<number>;
}
export declare class SimpleScalingPolicyConfiguration extends ResourceBase {
    constructor(properties: SimpleScalingPolicyConfigurationProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface ScalingRuleProperties {
    Action: ScalingAction;
    Description?: Value<string>;
    Name: Value<string>;
    Trigger: ScalingTrigger;
}
export declare class ScalingRule extends ResourceBase {
    constructor(properties: ScalingRuleProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface ScalingActionProperties {
    Market?: Value<string>;
    SimpleScalingPolicyConfiguration: SimpleScalingPolicyConfiguration;
}
export declare class ScalingAction extends ResourceBase {
    constructor(properties: ScalingActionProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface ScalingTriggerProperties {
    CloudWatchAlarmDefinition: CloudWatchAlarmDefinition;
}
export declare class ScalingTrigger extends ResourceBase {
    constructor(properties: ScalingTriggerProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface ScalingConstraintsProperties {
    MaxCapacity: Value<number>;
    MinCapacity: Value<number>;
}
export declare class ScalingConstraints extends ResourceBase {
    constructor(properties: ScalingConstraintsProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface CloudWatchAlarmDefinitionProperties {
    ComparisonOperator: Value<string>;
    Dimensions?: MetricDimension[];
    EvaluationPeriods?: Value<number>;
    MetricName: Value<string>;
    Namespace?: Value<string>;
    Period: Value<number>;
    Statistic?: Value<string>;
    Threshold: Value<number>;
    Unit?: Value<string>;
}
export declare class CloudWatchAlarmDefinition extends ResourceBase {
    constructor(properties: CloudWatchAlarmDefinitionProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface VolumeSpecificationProperties {
    Iops?: Value<number>;
    SizeInGB: Value<number>;
    VolumeType: Value<string>;
}
export declare class VolumeSpecification extends ResourceBase {
    constructor(properties: VolumeSpecificationProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface AutoScalingPolicyProperties {
    Constraints: ScalingConstraints;
    Rules: ScalingRule[];
}
export declare class AutoScalingPolicy extends ResourceBase {
    constructor(properties: AutoScalingPolicyProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface EbsConfigurationProperties {
    EbsBlockDeviceConfigs?: EbsBlockDeviceConfig[];
    EbsOptimized?: Value<boolean>;
}
export declare class EbsConfiguration extends ResourceBase {
    constructor(properties: EbsConfigurationProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface InstanceGroupConfigProperties {
    AutoScalingPolicy?: AutoScalingPolicy;
    BidPrice?: Value<string>;
    Configurations?: Configuration[];
    EbsConfiguration?: EbsConfiguration;
    InstanceCount: Value<number>;
    InstanceRole: Value<string>;
    InstanceType: Value<string>;
    JobFlowId: Value<string>;
    Market?: Value<string>;
    Name?: Value<string>;
}
export default class InstanceGroupConfig extends ResourceBase {
    constructor(properties: InstanceGroupConfigProperties, dependsOn?: Value<string> | Value<string>[]);
}
