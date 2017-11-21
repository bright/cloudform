import { ResourceBase } from '../resource';
import { Value } from '../internal';
import StepScalingPolicyConfiguration from './stepScalingPolicyConfiguration';
export declare type PolicyType = "*" | "StepScaling";
export interface ScalingPolicyProperties {
    PolicyName: Value<string>;
    PolicyType?: Value<PolicyType>;
    ResourceId?: Value<string>;
    ScalableDimension?: Value<string>;
    ServiceNamespace?: Value<string>;
    ScalingTargetId?: Value<string>;
    StepScalingPolicyConfiguration?: StepScalingPolicyConfiguration;
}
export default class ScalingPolicy extends ResourceBase {
    constructor(properties: ScalingPolicyProperties, dependsOn?: Value<string>);
}
