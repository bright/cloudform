import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class LaunchTemplateOverrides {
    InstanceType?: Value<string>;
    constructor(properties: LaunchTemplateOverrides);
}
export declare class LifecycleHookSpecification {
    DefaultResult?: Value<string>;
    HeartbeatTimeout?: Value<number>;
    LifecycleHookName: Value<string>;
    LifecycleTransition: Value<string>;
    NotificationMetadata?: Value<string>;
    NotificationTargetARN?: Value<string>;
    RoleARN?: Value<string>;
    constructor(properties: LifecycleHookSpecification);
}
export declare class LaunchTemplateSpecification {
    LaunchTemplateId?: Value<string>;
    LaunchTemplateName?: Value<string>;
    Version: Value<string>;
    constructor(properties: LaunchTemplateSpecification);
}
export declare class MixedInstancesPolicy {
    InstancesDistribution?: InstancesDistribution;
    LaunchTemplate: LaunchTemplate;
    constructor(properties: MixedInstancesPolicy);
}
export declare class NotificationConfiguration {
    NotificationTypes?: List<Value<string>>;
    TopicARN: Value<string>;
    constructor(properties: NotificationConfiguration);
}
export declare class MetricsCollection {
    Granularity: Value<string>;
    Metrics?: List<Value<string>>;
    constructor(properties: MetricsCollection);
}
export declare class InstancesDistribution {
    OnDemandAllocationStrategy?: Value<string>;
    OnDemandBaseCapacity?: Value<number>;
    OnDemandPercentageAboveBaseCapacity?: Value<number>;
    SpotAllocationStrategy?: Value<string>;
    SpotInstancePools?: Value<number>;
    SpotMaxPrice?: Value<string>;
    constructor(properties: InstancesDistribution);
}
export declare class LaunchTemplate {
    LaunchTemplateSpecification: LaunchTemplateSpecification;
    Overrides?: List<LaunchTemplateOverrides>;
    constructor(properties: LaunchTemplate);
}
export declare class TagProperty {
    Key: Value<string>;
    PropagateAtLaunch: Value<boolean>;
    Value: Value<string>;
    constructor(properties: TagProperty);
}
export interface AutoScalingGroupProperties {
    AutoScalingGroupName?: Value<string>;
    AvailabilityZones?: List<Value<string>>;
    Cooldown?: Value<string>;
    DesiredCapacity?: Value<string>;
    HealthCheckGracePeriod?: Value<number>;
    HealthCheckType?: Value<string>;
    InstanceId?: Value<string>;
    LaunchConfigurationName?: Value<string>;
    LaunchTemplate?: LaunchTemplateSpecification;
    LifecycleHookSpecificationList?: List<LifecycleHookSpecification>;
    LoadBalancerNames?: List<Value<string>>;
    MaxSize: Value<string>;
    MetricsCollection?: List<MetricsCollection>;
    MinSize: Value<string>;
    MixedInstancesPolicy?: MixedInstancesPolicy;
    NotificationConfigurations?: List<NotificationConfiguration>;
    PlacementGroup?: Value<string>;
    ServiceLinkedRoleARN?: Value<string>;
    Tags?: List<TagProperty>;
    TargetGroupARNs?: List<Value<string>>;
    TerminationPolicies?: List<Value<string>>;
    VPCZoneIdentifier?: List<Value<string>>;
}
export default class AutoScalingGroup extends ResourceBase<AutoScalingGroupProperties> {
    static LaunchTemplateOverrides: typeof LaunchTemplateOverrides;
    static LifecycleHookSpecification: typeof LifecycleHookSpecification;
    static LaunchTemplateSpecification: typeof LaunchTemplateSpecification;
    static MixedInstancesPolicy: typeof MixedInstancesPolicy;
    static NotificationConfiguration: typeof NotificationConfiguration;
    static MetricsCollection: typeof MetricsCollection;
    static InstancesDistribution: typeof InstancesDistribution;
    static LaunchTemplate: typeof LaunchTemplate;
    static TagProperty: typeof TagProperty;
    constructor(properties: AutoScalingGroupProperties);
}
