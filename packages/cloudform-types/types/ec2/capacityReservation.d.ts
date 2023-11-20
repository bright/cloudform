import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class TagSpecification {
    ResourceType?: Value<string>;
    Tags?: List<ResourceTag>;
    constructor(properties: TagSpecification);
}
export interface CapacityReservationProperties {
    Tenancy?: Value<string>;
    EndDateType?: Value<string>;
    TagSpecifications?: List<TagSpecification>;
    AvailabilityZone: Value<string>;
    EndDate?: Value<string>;
    EbsOptimized?: Value<boolean>;
    OutPostArn?: Value<string>;
    InstanceCount: Value<number>;
    PlacementGroupArn?: Value<string>;
    InstancePlatform: Value<string>;
    InstanceType: Value<string>;
    EphemeralStorage?: Value<boolean>;
    InstanceMatchCriteria?: Value<string>;
}
export default class CapacityReservation extends ResourceBase<CapacityReservationProperties> {
    static TagSpecification: typeof TagSpecification;
    constructor(properties: CapacityReservationProperties);
}
