/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class FleetLaunchTemplateSpecificationRequest {
    LaunchTemplateName?: Value<string>
    LaunchTemplateId?: Value<string>
    Version?: Value<string>

    constructor(properties: FleetLaunchTemplateSpecificationRequest) {
        Object.assign(this, properties)
    }
}

export class TargetCapacitySpecificationRequest {
    DefaultTargetCapacityType?: Value<string>
    TotalTargetCapacity!: Value<number>
    OnDemandTargetCapacity?: Value<number>
    SpotTargetCapacity?: Value<number>

    constructor(properties: TargetCapacitySpecificationRequest) {
        Object.assign(this, properties)
    }
}

export class CapacityReservationOptionsRequest {
    UsageStrategy?: Value<string>

    constructor(properties: CapacityReservationOptionsRequest) {
        Object.assign(this, properties)
    }
}

export class FleetLaunchTemplateConfigRequest {
    LaunchTemplateSpecification?: FleetLaunchTemplateSpecificationRequest
    Overrides?: List<FleetLaunchTemplateOverridesRequest>

    constructor(properties: FleetLaunchTemplateConfigRequest) {
        Object.assign(this, properties)
    }
}

export class TagSpecification {
    ResourceType?: Value<string>
    Tags?: List<ResourceTag>

    constructor(properties: TagSpecification) {
        Object.assign(this, properties)
    }
}

export class SpotOptionsRequest {
    SingleAvailabilityZone?: Value<boolean>
    AllocationStrategy?: Value<string>
    SingleInstanceType?: Value<boolean>
    MinTargetCapacity?: Value<number>
    MaxTotalPrice?: Value<string>
    InstanceInterruptionBehavior?: Value<string>
    InstancePoolsToUseCount?: Value<number>

    constructor(properties: SpotOptionsRequest) {
        Object.assign(this, properties)
    }
}

export class OnDemandOptionsRequest {
    SingleAvailabilityZone?: Value<boolean>
    AllocationStrategy?: Value<string>
    SingleInstanceType?: Value<boolean>
    MinTargetCapacity?: Value<number>
    MaxTotalPrice?: Value<string>
    CapacityReservationOptions?: CapacityReservationOptionsRequest

    constructor(properties: OnDemandOptionsRequest) {
        Object.assign(this, properties)
    }
}

export class FleetLaunchTemplateOverridesRequest {
    WeightedCapacity?: Value<number>
    Placement?: Placement
    Priority?: Value<number>
    AvailabilityZone?: Value<string>
    SubnetId?: Value<string>
    InstanceType?: Value<string>
    MaxPrice?: Value<string>

    constructor(properties: FleetLaunchTemplateOverridesRequest) {
        Object.assign(this, properties)
    }
}

export class Placement {
    GroupName?: Value<string>
    Tenancy?: Value<string>
    SpreadDomain?: Value<string>
    PartitionNumber?: Value<number>
    AvailabilityZone?: Value<string>
    Affinity?: Value<string>
    HostId?: Value<string>
    HostResourceGroupArn?: Value<string>

    constructor(properties: Placement) {
        Object.assign(this, properties)
    }
}

export interface EC2FleetProperties {
    TargetCapacitySpecification: TargetCapacitySpecificationRequest
    OnDemandOptions?: OnDemandOptionsRequest
    Type?: Value<string>
    ExcessCapacityTerminationPolicy?: Value<string>
    TagSpecifications?: List<TagSpecification>
    SpotOptions?: SpotOptionsRequest
    ValidFrom?: Value<string>
    ReplaceUnhealthyInstances?: Value<boolean>
    LaunchTemplateConfigs: List<FleetLaunchTemplateConfigRequest>
    TerminateInstancesWithExpiration?: Value<boolean>
    ValidUntil?: Value<string>
}

export default class EC2Fleet extends ResourceBase<EC2FleetProperties> {
    static FleetLaunchTemplateSpecificationRequest = FleetLaunchTemplateSpecificationRequest
    static TargetCapacitySpecificationRequest = TargetCapacitySpecificationRequest
    static CapacityReservationOptionsRequest = CapacityReservationOptionsRequest
    static FleetLaunchTemplateConfigRequest = FleetLaunchTemplateConfigRequest
    static TagSpecification = TagSpecification
    static SpotOptionsRequest = SpotOptionsRequest
    static OnDemandOptionsRequest = OnDemandOptionsRequest
    static FleetLaunchTemplateOverridesRequest = FleetLaunchTemplateOverridesRequest
    static Placement = Placement

    constructor(properties: EC2FleetProperties) {
        super('AWS::EC2::EC2Fleet', properties)
    }
}
