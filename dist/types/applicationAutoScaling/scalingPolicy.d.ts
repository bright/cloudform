import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface StepScalingPolicyConfigurationProperties {
    AdjustmentType?: Value<string>;
    Cooldown?: Value<number>;
    MetricAggregationType?: Value<string>;
    MinAdjustmentMagnitude?: Value<number>;
    StepAdjustments?: StepAdjustment[];
}
export declare class StepScalingPolicyConfiguration extends ResourceBase {
    constructor(properties: StepScalingPolicyConfigurationProperties, dependsOn?: Value<string>);
}
export interface MetricDimensionProperties {
    Name: Value<string>;
    Value: Value<string>;
}
export declare class MetricDimension extends ResourceBase {
    constructor(properties: MetricDimensionProperties, dependsOn?: Value<string>);
}
export interface StepAdjustmentProperties {
    MetricIntervalLowerBound?: Value<number>;
    MetricIntervalUpperBound?: Value<number>;
    ScalingAdjustment: Value<number>;
}
export declare class StepAdjustment extends ResourceBase {
    constructor(properties: StepAdjustmentProperties, dependsOn?: Value<string>);
}
export interface PredefinedMetricSpecificationProperties {
    PredefinedMetricType: Value<string>;
    ResourceLabel?: Value<string>;
}
export declare class PredefinedMetricSpecification extends ResourceBase {
    constructor(properties: PredefinedMetricSpecificationProperties, dependsOn?: Value<string>);
}
export interface CustomizedMetricSpecificationProperties {
    Dimensions?: MetricDimension[];
    MetricName: Value<string>;
    Namespace: Value<string>;
    Statistic: Value<string>;
    Unit?: Value<string>;
}
export declare class CustomizedMetricSpecification extends ResourceBase {
    constructor(properties: CustomizedMetricSpecificationProperties, dependsOn?: Value<string>);
}
export interface TargetTrackingScalingPolicyConfigurationProperties {
    CustomizedMetricSpecification?: CustomizedMetricSpecification;
    PredefinedMetricSpecification?: PredefinedMetricSpecification;
    ScaleInCooldown?: Value<number>;
    ScaleOutCooldown?: Value<number>;
    TargetValue: Value<number>;
}
export declare class TargetTrackingScalingPolicyConfiguration extends ResourceBase {
    constructor(properties: TargetTrackingScalingPolicyConfigurationProperties, dependsOn?: Value<string>);
}
export interface ScalingPolicyProperties {
    PolicyName: Value<string>;
    PolicyType: Value<string>;
    ResourceId?: Value<string>;
    ScalableDimension?: Value<string>;
    ScalingTargetId?: Value<string>;
    ServiceNamespace?: Value<string>;
    StepScalingPolicyConfiguration?: StepScalingPolicyConfiguration;
    TargetTrackingScalingPolicyConfiguration?: TargetTrackingScalingPolicyConfiguration;
}
export default class ScalingPolicy extends ResourceBase {
    constructor(properties: ScalingPolicyProperties, dependsOn?: Value<string>);
}
