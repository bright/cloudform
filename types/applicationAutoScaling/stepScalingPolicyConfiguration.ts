import {ResourceBase} from '../resource'
import {Value} from '../internal'
import StepAdjustments from './stepAdjustments'

export type AdjustmentType = "*" | "ChangeInCapacity" | "PercentChangeInCapacity" | "ExactCapacity"
export type MetricAggregationType = "*" | "Minimum" | "Maximum" | "Average"

export interface StepScalingPolicyConfigurationProperties {
    AdjustmentType?: Value<AdjustmentType>
    Cooldown?: Value<number>
    MetricAggregationType?: Value<MetricAggregationType>
    MinAdjustmentMagnitude?: Value<number>
    StepAdjustments?: StepAdjustments
}

export default class StepScalingPolicyConfiguration extends ResourceBase {
    constructor(properties: StepScalingPolicyConfigurationProperties, dependsOn?: Value<string>) {
        super('AWS::ApplicationAutoScaling::StepScalingPolicyConfiguration', properties, dependsOn)
    }
}