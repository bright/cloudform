/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class LaunchTemplateOverrides {
    InstanceType?: Value<string>

    constructor(properties: LaunchTemplateOverrides) {
        Object.assign(this, properties)
    }
}

export class LifecycleHookSpecification {
    DefaultResult?: Value<string>
    HeartbeatTimeout?: Value<number>
    LifecycleHookName!: Value<string>
    LifecycleTransition!: Value<string>
    NotificationMetadata?: Value<string>
    NotificationTargetARN?: Value<string>
    RoleARN?: Value<string>

    constructor(properties: LifecycleHookSpecification) {
        Object.assign(this, properties)
    }
}

export class MixedInstancesPolicy {
    InstancesDistribution?: InstancesDistribution
    LaunchTemplate!: LaunchTemplate

    constructor(properties: MixedInstancesPolicy) {
        Object.assign(this, properties)
    }
}

export class LaunchTemplateSpecification {
    LaunchTemplateId?: Value<string>
    LaunchTemplateName?: Value<string>
    Version!: Value<string>

    constructor(properties: LaunchTemplateSpecification) {
        Object.assign(this, properties)
    }
}

export class NotificationConfiguration {
    NotificationTypes?: List<Value<string>>
    TopicARN!: Value<string>

    constructor(properties: NotificationConfiguration) {
        Object.assign(this, properties)
    }
}

export class MetricsCollection {
    Granularity!: Value<string>
    Metrics?: List<Value<string>>

    constructor(properties: MetricsCollection) {
        Object.assign(this, properties)
    }
}

export class InstancesDistribution {
    OnDemandAllocationStrategy?: Value<string>
    OnDemandBaseCapacity?: Value<number>
    OnDemandPercentageAboveBaseCapacity?: Value<number>
    SpotAllocationStrategy?: Value<string>
    SpotInstancePools?: Value<number>
    SpotMaxPrice?: Value<string>

    constructor(properties: InstancesDistribution) {
        Object.assign(this, properties)
    }
}

export class LaunchTemplate {
    LaunchTemplateSpecification!: LaunchTemplateSpecification
    Overrides?: List<LaunchTemplateOverrides>

    constructor(properties: LaunchTemplate) {
        Object.assign(this, properties)
    }
}

export class TagProperty {
    Key!: Value<string>
    PropagateAtLaunch!: Value<boolean>
    Value!: Value<string>

    constructor(properties: TagProperty) {
        Object.assign(this, properties)
    }
}

export interface AutoScalingGroupProperties {
    AutoScalingGroupName?: Value<string>
    AvailabilityZones?: List<Value<string>>
    Cooldown?: Value<string>
    DesiredCapacity?: Value<string>
    HealthCheckGracePeriod?: Value<number>
    HealthCheckType?: Value<string>
    InstanceId?: Value<string>
    LaunchConfigurationName?: Value<string>
    LaunchTemplate?: LaunchTemplateSpecification
    LifecycleHookSpecificationList?: List<LifecycleHookSpecification>
    LoadBalancerNames?: List<Value<string>>
    MaxSize: Value<string>
    MetricsCollection?: List<MetricsCollection>
    MinSize: Value<string>
    MixedInstancesPolicy?: MixedInstancesPolicy
    NotificationConfigurations?: List<NotificationConfiguration>
    PlacementGroup?: Value<string>
    ServiceLinkedRoleARN?: Value<string>
    Tags?: List<TagProperty>
    TargetGroupARNs?: List<Value<string>>
    TerminationPolicies?: List<Value<string>>
    VPCZoneIdentifier?: List<Value<string>>
}

export default class AutoScalingGroup extends ResourceBase<AutoScalingGroupProperties> {
    static LaunchTemplateOverrides = LaunchTemplateOverrides
    static LifecycleHookSpecification = LifecycleHookSpecification
    static MixedInstancesPolicy = MixedInstancesPolicy
    static LaunchTemplateSpecification = LaunchTemplateSpecification
    static NotificationConfiguration = NotificationConfiguration
    static MetricsCollection = MetricsCollection
    static InstancesDistribution = InstancesDistribution
    static LaunchTemplate = LaunchTemplate
    static TagProperty = TagProperty

    constructor(properties: AutoScalingGroupProperties) {
        super('AWS::AutoScaling::AutoScalingGroup', properties)
    }
}
