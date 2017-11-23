import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface MetricDimensionProperties {
    Name: Value<string>;
    Value: Value<string>;
}
export declare class MetricDimension extends ResourceBase {
    constructor(properties: MetricDimensionProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface CustomizedMetricSpecificationProperties {
    Dimensions?: List<MetricDimension>;
    MetricName: Value<string>;
    Namespace: Value<string>;
    Statistic: Value<string>;
    Unit?: Value<string>;
}
export declare class CustomizedMetricSpecification extends ResourceBase {
    constructor(properties: CustomizedMetricSpecificationProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface PredefinedMetricSpecificationProperties {
    PredefinedMetricType: Value<string>;
    ResourceLabel?: Value<string>;
}
export declare class PredefinedMetricSpecification extends ResourceBase {
    constructor(properties: PredefinedMetricSpecificationProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface TargetTrackingConfigurationProperties {
    CustomizedMetricSpecification?: CustomizedMetricSpecification;
    DisableScaleIn?: Value<boolean>;
    PredefinedMetricSpecification?: PredefinedMetricSpecification;
    TargetValue: Value<number>;
}
export declare class TargetTrackingConfiguration extends ResourceBase {
    constructor(properties: TargetTrackingConfigurationProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface StepAdjustmentProperties {
    MetricIntervalLowerBound?: Value<number>;
    MetricIntervalUpperBound?: Value<number>;
    ScalingAdjustment: Value<number>;
}
export declare class StepAdjustment extends ResourceBase {
    constructor(properties: StepAdjustmentProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface ScalingPolicyProperties {
    AdjustmentType?: Value<string>;
    AutoScalingGroupName: Value<string>;
    Cooldown?: Value<string>;
    EstimatedInstanceWarmup?: Value<number>;
    MetricAggregationType?: Value<string>;
    MinAdjustmentMagnitude?: Value<number>;
    PolicyType?: Value<string>;
    ScalingAdjustment?: Value<number>;
    StepAdjustments?: List<StepAdjustment>;
    TargetTrackingConfiguration?: TargetTrackingConfiguration;
}
export default class ScalingPolicy extends ResourceBase {
    constructor(properties: ScalingPolicyProperties, dependsOn?: Value<string> | Value<string>[]);
}
