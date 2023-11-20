import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class InstanceTypeSpecification {
    Priority?: Value<number>;
    AvailabilityZoneId?: Value<string>;
    AvailabilityZone?: Value<string>;
    InstancePlatform?: Value<string>;
    InstanceType?: Value<string>;
    Weight?: Value<number>;
    EbsOptimized?: Value<boolean>;
    constructor(properties: InstanceTypeSpecification);
}
export declare class TagSpecification {
    ResourceType?: Value<string>;
    Tags?: List<ResourceTag>;
    constructor(properties: TagSpecification);
}
export interface CapacityReservationFleetProperties {
    Tenancy?: Value<string>;
    TotalTargetCapacity?: Value<number>;
    AllocationStrategy?: Value<string>;
    TagSpecifications?: List<TagSpecification>;
    NoRemoveEndDate?: Value<boolean>;
    InstanceTypeSpecifications?: List<InstanceTypeSpecification>;
    RemoveEndDate?: Value<boolean>;
    InstanceMatchCriteria?: Value<string>;
    EndDate?: Value<string>;
}
export default class CapacityReservationFleet extends ResourceBase<CapacityReservationFleetProperties> {
    static InstanceTypeSpecification: typeof InstanceTypeSpecification;
    static TagSpecification: typeof TagSpecification;
    constructor(properties?: CapacityReservationFleetProperties);
}
