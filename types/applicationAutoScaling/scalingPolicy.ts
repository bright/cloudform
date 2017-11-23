/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'

export interface StepScalingPolicyConfigurationProperties {
    AdjustmentType?: Value<string>
    Cooldown?: Value<number>
    MetricAggregationType?: Value<string>
    MinAdjustmentMagnitude?: Value<number>
    StepAdjustments?: StepAdjustment[]
}

export class StepScalingPolicyConfiguration extends ResourceBase {
    constructor(properties: StepScalingPolicyConfigurationProperties, dependsOn?: Value<string>) {
        super('AWS::ApplicationAutoScaling::StepScalingPolicyConfiguration', properties, dependsOn)
    }
}

export interface MetricDimensionProperties {
    Name: Value<string>
    Value: Value<string>
}

export class MetricDimension extends ResourceBase {
    constructor(properties: MetricDimensionProperties, dependsOn?: Value<string>) {
        super('AWS::ApplicationAutoScaling::MetricDimension', properties, dependsOn)
    }
}

export interface StepAdjustmentProperties {
    MetricIntervalLowerBound?: Value<number>
    MetricIntervalUpperBound?: Value<number>
    ScalingAdjustment: Value<number>
}

export class StepAdjustment extends ResourceBase {
    constructor(properties: StepAdjustmentProperties, dependsOn?: Value<string>) {
        super('AWS::ApplicationAutoScaling::StepAdjustment', properties, dependsOn)
    }
}

export interface PredefinedMetricSpecificationProperties {
    PredefinedMetricType: Value<string>
    ResourceLabel?: Value<string>
}

export class PredefinedMetricSpecification extends ResourceBase {
    constructor(properties: PredefinedMetricSpecificationProperties, dependsOn?: Value<string>) {
        super('AWS::ApplicationAutoScaling::PredefinedMetricSpecification', properties, dependsOn)
    }
}

export interface CustomizedMetricSpecificationProperties {
    Dimensions?: MetricDimension[]
    MetricName: Value<string>
    Namespace: Value<string>
    Statistic: Value<string>
    Unit?: Value<string>
}

export class CustomizedMetricSpecification extends ResourceBase {
    constructor(properties: CustomizedMetricSpecificationProperties, dependsOn?: Value<string>) {
        super('AWS::ApplicationAutoScaling::CustomizedMetricSpecification', properties, dependsOn)
    }
}

export interface TargetTrackingScalingPolicyConfigurationProperties {
    CustomizedMetricSpecification?: CustomizedMetricSpecification
    PredefinedMetricSpecification?: PredefinedMetricSpecification
    ScaleInCooldown?: Value<number>
    ScaleOutCooldown?: Value<number>
    TargetValue: Value<number>
}

export class TargetTrackingScalingPolicyConfiguration extends ResourceBase {
    constructor(properties: TargetTrackingScalingPolicyConfigurationProperties, dependsOn?: Value<string>) {
        super('AWS::ApplicationAutoScaling::TargetTrackingScalingPolicyConfiguration', properties, dependsOn)
    }
}

export interface ScalingPolicyProperties {
    PolicyName: Value<string>
    PolicyType: Value<string>
    ResourceId?: Value<string>
    ScalableDimension?: Value<string>
    ScalingTargetId?: Value<string>
    ServiceNamespace?: Value<string>
    StepScalingPolicyConfiguration?: StepScalingPolicyConfiguration
    TargetTrackingScalingPolicyConfiguration?: TargetTrackingScalingPolicyConfiguration
}

export default class ScalingPolicy extends ResourceBase {
    constructor(properties: ScalingPolicyProperties, dependsOn?: Value<string>) {
        super('AWS::ApplicationAutoScaling::ScalingPolicy', properties, dependsOn)
    }
}
