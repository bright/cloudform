import { ResourceBase, ResourceTag } from '../resource';
import { Value } from '../dataTypes';
export interface LifecycleHookSpecificationProperties {
    DefaultResult?: Value<string>;
    HeartbeatTimeout?: Value<number>;
    LifecycleHookName: Value<string>;
    LifecycleTransition: Value<string>;
    NotificationMetadata?: Value<string>;
    NotificationTargetARN?: Value<string>;
    RoleARN?: Value<string>;
}
export declare class LifecycleHookSpecification extends ResourceBase {
    constructor(properties: LifecycleHookSpecificationProperties, dependsOn?: Value<string>);
}
export interface NotificationConfigurationProperties {
    NotificationTypes?: Value<string>[];
    TopicARN: Value<string>;
}
export declare class NotificationConfiguration extends ResourceBase {
    constructor(properties: NotificationConfigurationProperties, dependsOn?: Value<string>);
}
export interface MetricsCollectionProperties {
    Granularity: Value<string>;
    Metrics?: Value<string>[];
}
export declare class MetricsCollection extends ResourceBase {
    constructor(properties: MetricsCollectionProperties, dependsOn?: Value<string>);
}
export interface TagPropertyProperties {
    Key: Value<string>;
    PropagateAtLaunch: Value<boolean>;
    Value: Value<string>;
}
export declare class TagProperty extends ResourceBase {
    constructor(properties: TagPropertyProperties, dependsOn?: Value<string>);
}
export interface AutoScalingGroupProperties {
    AvailabilityZones?: Value<string>[];
    Cooldown?: Value<string>;
    DesiredCapacity?: Value<string>;
    HealthCheckGracePeriod?: Value<number>;
    HealthCheckType?: Value<string>;
    InstanceId?: Value<string>;
    LaunchConfigurationName?: Value<string>;
    LifecycleHookSpecificationList?: LifecycleHookSpecification[];
    LoadBalancerNames?: Value<string>[];
    MaxSize: Value<string>;
    MetricsCollection?: MetricsCollection[];
    MinSize: Value<string>;
    NotificationConfigurations?: NotificationConfiguration[];
    PlacementGroup?: Value<string>;
    Tags?: ResourceTag[];
    TargetGroupARNs?: Value<string>[];
    TerminationPolicies?: Value<string>[];
    VPCZoneIdentifier?: Value<string>[];
}
export default class AutoScalingGroup extends ResourceBase {
    constructor(properties: AutoScalingGroupProperties, dependsOn?: Value<string>);
}
