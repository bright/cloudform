import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ApplicationSource {
    CloudFormationStackARN?: Value<string>;
    TagFilters?: List<TagFilter>;
    constructor(properties: ApplicationSource);
}
export declare class CustomizedLoadMetricSpecification {
    MetricName: Value<string>;
    Statistic: Value<string>;
    Dimensions?: List<MetricDimension>;
    Unit?: Value<string>;
    Namespace: Value<string>;
    constructor(properties: CustomizedLoadMetricSpecification);
}
export declare class CustomizedScalingMetricSpecification {
    MetricName: Value<string>;
    Statistic: Value<string>;
    Dimensions?: List<MetricDimension>;
    Unit?: Value<string>;
    Namespace: Value<string>;
    constructor(properties: CustomizedScalingMetricSpecification);
}
export declare class MetricDimension {
    Value: Value<string>;
    Name: Value<string>;
    constructor(properties: MetricDimension);
}
export declare class PredefinedLoadMetricSpecification {
    PredefinedLoadMetricType: Value<string>;
    ResourceLabel?: Value<string>;
    constructor(properties: PredefinedLoadMetricSpecification);
}
export declare class PredefinedScalingMetricSpecification {
    ResourceLabel?: Value<string>;
    PredefinedScalingMetricType: Value<string>;
    constructor(properties: PredefinedScalingMetricSpecification);
}
export declare class ScalingInstruction {
    DisableDynamicScaling?: Value<boolean>;
    ServiceNamespace: Value<string>;
    PredictiveScalingMaxCapacityBehavior?: Value<string>;
    ScalableDimension: Value<string>;
    ScalingPolicyUpdateBehavior?: Value<string>;
    MinCapacity: Value<number>;
    TargetTrackingConfigurations: List<TargetTrackingConfiguration>;
    PredictiveScalingMaxCapacityBuffer?: Value<number>;
    CustomizedLoadMetricSpecification?: CustomizedLoadMetricSpecification;
    PredefinedLoadMetricSpecification?: PredefinedLoadMetricSpecification;
    ResourceId: Value<string>;
    ScheduledActionBufferTime?: Value<number>;
    MaxCapacity: Value<number>;
    PredictiveScalingMode?: Value<string>;
    constructor(properties: ScalingInstruction);
}
export declare class TagFilter {
    Values?: List<Value<string>>;
    Key: Value<string>;
    constructor(properties: TagFilter);
}
export declare class TargetTrackingConfiguration {
    ScaleOutCooldown?: Value<number>;
    TargetValue: Value<number>;
    PredefinedScalingMetricSpecification?: PredefinedScalingMetricSpecification;
    DisableScaleIn?: Value<boolean>;
    ScaleInCooldown?: Value<number>;
    EstimatedInstanceWarmup?: Value<number>;
    CustomizedScalingMetricSpecification?: CustomizedScalingMetricSpecification;
    constructor(properties: TargetTrackingConfiguration);
}
export interface ScalingPlanProperties {
    ApplicationSource: ApplicationSource;
    ScalingInstructions: List<ScalingInstruction>;
}
export default class ScalingPlan extends ResourceBase<ScalingPlanProperties> {
    static ApplicationSource: typeof ApplicationSource;
    static CustomizedLoadMetricSpecification: typeof CustomizedLoadMetricSpecification;
    static CustomizedScalingMetricSpecification: typeof CustomizedScalingMetricSpecification;
    static MetricDimension: typeof MetricDimension;
    static PredefinedLoadMetricSpecification: typeof PredefinedLoadMetricSpecification;
    static PredefinedScalingMetricSpecification: typeof PredefinedScalingMetricSpecification;
    static ScalingInstruction: typeof ScalingInstruction;
    static TagFilter: typeof TagFilter;
    static TargetTrackingConfiguration: typeof TargetTrackingConfiguration;
    constructor(properties: ScalingPlanProperties);
}
