/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'

export interface MetricDimensionProperties {
    Name: Value<string>
    Value: Value<string>
}

export class MetricDimension extends ResourceBase {
    constructor(properties: MetricDimensionProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::AutoScaling::MetricDimension', properties, dependsOn)
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
    constructor(properties: CustomizedMetricSpecificationProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::AutoScaling::CustomizedMetricSpecification', properties, dependsOn)
    }
}

export interface PredefinedMetricSpecificationProperties {
    PredefinedMetricType: Value<string>
    ResourceLabel?: Value<string>
}

export class PredefinedMetricSpecification extends ResourceBase {
    constructor(properties: PredefinedMetricSpecificationProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::AutoScaling::PredefinedMetricSpecification', properties, dependsOn)
    }
}

export interface TargetTrackingConfigurationProperties {
    CustomizedMetricSpecification?: CustomizedMetricSpecification
    DisableScaleIn?: Value<boolean>
    PredefinedMetricSpecification?: PredefinedMetricSpecification
    TargetValue: Value<number>
}

export class TargetTrackingConfiguration extends ResourceBase {
    constructor(properties: TargetTrackingConfigurationProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::AutoScaling::TargetTrackingConfiguration', properties, dependsOn)
    }
}

export interface StepAdjustmentProperties {
    MetricIntervalLowerBound?: Value<number>
    MetricIntervalUpperBound?: Value<number>
    ScalingAdjustment: Value<number>
}

export class StepAdjustment extends ResourceBase {
    constructor(properties: StepAdjustmentProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::AutoScaling::StepAdjustment', properties, dependsOn)
    }
}

export interface ScalingPolicyProperties {
    AdjustmentType?: Value<string>
    AutoScalingGroupName: Value<string>
    Cooldown?: Value<string>
    EstimatedInstanceWarmup?: Value<number>
    MetricAggregationType?: Value<string>
    MinAdjustmentMagnitude?: Value<number>
    PolicyType?: Value<string>
    ScalingAdjustment?: Value<number>
    StepAdjustments?: StepAdjustment[]
    TargetTrackingConfiguration?: TargetTrackingConfiguration
}

export default class ScalingPolicy extends ResourceBase {
    constructor(properties: ScalingPolicyProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::AutoScaling::ScalingPolicy', properties, dependsOn)
    }
}
