import {ResourceBase} from '../resource'
import {Value} from '../internal'
import StepAdjustments from './stepAdjustments'

export type AdjustmentType = "ChangeInCapacity" | "ExactCapacity" | "PercentChangeInCapacity"
export type MetricAggregationType = "Minimum" | "Maximum" | "Average"
export type PolicyType = "SimpleScaling" | "StepScaling"

export interface ScalingPolicyProperties {
    AdjustmentType: Value<AdjustmentType>
    AutoScalingGroupName: Value<string>
    Cooldown?: Value<string>
    EstimatedInstanceWarmup?: Value<number>
    MetricAggregationType?: Value<MetricAggregationType>
    MinAdjustmentMagnitude?: Value<number>
    MinAdjustmentStep?: Value<number>
    PolicyType?: Value<PolicyType>
    ScalingAdjustment?: Value<number>
    StepAdjustments?: StepAdjustments
}

export default class ScalingPolicy extends ResourceBase {
    constructor(properties: ScalingPolicyProperties, dependsOn?: Value<string>) {
        super('AWS::AutoScaling::ScalingPolicy', properties, dependsOn)
    }
}