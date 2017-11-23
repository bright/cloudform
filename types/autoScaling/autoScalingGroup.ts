/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export interface LifecycleHookSpecificationProperties {
    DefaultResult?: Value<string>
    HeartbeatTimeout?: Value<number>
    LifecycleHookName: Value<string>
    LifecycleTransition: Value<string>
    NotificationMetadata?: Value<string>
    NotificationTargetARN?: Value<string>
    RoleARN?: Value<string>
}

export class LifecycleHookSpecification extends ResourceBase {
    constructor(properties: LifecycleHookSpecificationProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::AutoScaling::LifecycleHookSpecification', properties, dependsOn)
    }
}

export interface NotificationConfigurationProperties {
    NotificationTypes?: List<Value<string>>
    TopicARN: Value<string>
}

export class NotificationConfiguration extends ResourceBase {
    constructor(properties: NotificationConfigurationProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::AutoScaling::NotificationConfiguration', properties, dependsOn)
    }
}

export interface MetricsCollectionProperties {
    Granularity: Value<string>
    Metrics?: List<Value<string>>
}

export class MetricsCollection extends ResourceBase {
    constructor(properties: MetricsCollectionProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::AutoScaling::MetricsCollection', properties, dependsOn)
    }
}

export interface TagPropertyProperties {
    Key: Value<string>
    PropagateAtLaunch: Value<boolean>
    Value: Value<string>
}

export class TagProperty extends ResourceBase {
    constructor(properties: TagPropertyProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::AutoScaling::TagProperty', properties, dependsOn)
    }
}

export interface AutoScalingGroupProperties {
    AvailabilityZones?: List<Value<string>>
    Cooldown?: Value<string>
    DesiredCapacity?: Value<string>
    HealthCheckGracePeriod?: Value<number>
    HealthCheckType?: Value<string>
    InstanceId?: Value<string>
    LaunchConfigurationName?: Value<string>
    LifecycleHookSpecificationList?: List<LifecycleHookSpecification>
    LoadBalancerNames?: List<Value<string>>
    MaxSize: Value<string>
    MetricsCollection?: List<MetricsCollection>
    MinSize: Value<string>
    NotificationConfigurations?: List<NotificationConfiguration>
    PlacementGroup?: Value<string>
    Tags?: ResourceTag[]
    TargetGroupARNs?: List<Value<string>>
    TerminationPolicies?: List<Value<string>>
    VPCZoneIdentifier?: List<Value<string>>
}

export default class AutoScalingGroup extends ResourceBase {
    constructor(properties: AutoScalingGroupProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::AutoScaling::AutoScalingGroup', properties, dependsOn)
    }
}
