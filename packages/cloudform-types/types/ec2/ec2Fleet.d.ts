import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class FleetLaunchTemplateSpecificationRequest {
    LaunchTemplateName?: Value<string>;
    Version?: Value<string>;
    LaunchTemplateId?: Value<string>;
    constructor(properties: FleetLaunchTemplateSpecificationRequest);
}
export declare class OnDemandOptionsRequest {
    SingleAvailabilityZone?: Value<boolean>;
    AllocationStrategy?: Value<string>;
    SingleInstanceType?: Value<boolean>;
    MinTargetCapacity?: Value<number>;
    MaxTotalPrice?: Value<string>;
    CapacityReservationOptions?: CapacityReservationOptionsRequest;
    constructor(properties: OnDemandOptionsRequest);
}
export declare class TargetCapacitySpecificationRequest {
    DefaultTargetCapacityType?: Value<string>;
    TotalTargetCapacity: Value<number>;
    OnDemandTargetCapacity?: Value<number>;
    SpotTargetCapacity?: Value<number>;
    constructor(properties: TargetCapacitySpecificationRequest);
}
export declare class FleetLaunchTemplateOverridesRequest {
    WeightedCapacity?: Value<number>;
    Placement?: Placement;
    Priority?: Value<number>;
    AvailabilityZone?: Value<string>;
    SubnetId?: Value<string>;
    InstanceType?: Value<string>;
    MaxPrice?: Value<string>;
    constructor(properties: FleetLaunchTemplateOverridesRequest);
}
export declare class CapacityReservationOptionsRequest {
    UsageStrategy?: Value<string>;
    constructor(properties: CapacityReservationOptionsRequest);
}
export declare class Placement {
    GroupName?: Value<string>;
    Tenancy?: Value<string>;
    SpreadDomain?: Value<string>;
    PartitionNumber?: Value<number>;
    AvailabilityZone?: Value<string>;
    Affinity?: Value<string>;
    HostId?: Value<string>;
    HostResourceGroupArn?: Value<string>;
    constructor(properties: Placement);
}
export declare class FleetLaunchTemplateConfigRequest {
    LaunchTemplateSpecification?: FleetLaunchTemplateSpecificationRequest;
    Overrides?: List<FleetLaunchTemplateOverridesRequest>;
    constructor(properties: FleetLaunchTemplateConfigRequest);
}
export declare class TagSpecification {
    ResourceType?: Value<string>;
    Tags?: List<ResourceTag>;
    constructor(properties: TagSpecification);
}
export declare class SpotOptionsRequest {
    SingleAvailabilityZone?: Value<boolean>;
    AllocationStrategy?: Value<string>;
    SingleInstanceType?: Value<boolean>;
    MinTargetCapacity?: Value<number>;
    MaxTotalPrice?: Value<string>;
    InstanceInterruptionBehavior?: Value<string>;
    InstancePoolsToUseCount?: Value<number>;
    constructor(properties: SpotOptionsRequest);
}
export interface EC2FleetProperties {
    TargetCapacitySpecification: TargetCapacitySpecificationRequest;
    OnDemandOptions?: OnDemandOptionsRequest;
    Type?: Value<string>;
    ExcessCapacityTerminationPolicy?: Value<string>;
    TagSpecifications?: List<TagSpecification>;
    SpotOptions?: SpotOptionsRequest;
    ValidFrom?: Value<string>;
    ReplaceUnhealthyInstances?: Value<boolean>;
    LaunchTemplateConfigs: List<FleetLaunchTemplateConfigRequest>;
    TerminateInstancesWithExpiration?: Value<boolean>;
    ValidUntil?: Value<string>;
}
export default class EC2Fleet extends ResourceBase<EC2FleetProperties> {
    static FleetLaunchTemplateSpecificationRequest: typeof FleetLaunchTemplateSpecificationRequest;
    static OnDemandOptionsRequest: typeof OnDemandOptionsRequest;
    static TargetCapacitySpecificationRequest: typeof TargetCapacitySpecificationRequest;
    static FleetLaunchTemplateOverridesRequest: typeof FleetLaunchTemplateOverridesRequest;
    static CapacityReservationOptionsRequest: typeof CapacityReservationOptionsRequest;
    static Placement: typeof Placement;
    static FleetLaunchTemplateConfigRequest: typeof FleetLaunchTemplateConfigRequest;
    static TagSpecification: typeof TagSpecification;
    static SpotOptionsRequest: typeof SpotOptionsRequest;
    constructor(properties: EC2FleetProperties);
}
