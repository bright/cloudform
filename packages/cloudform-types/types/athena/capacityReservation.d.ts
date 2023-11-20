import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class CapacityAssignment {
    WorkgroupNames: List<Value<string>>;
    constructor(properties: CapacityAssignment);
}
export declare class CapacityAssignmentConfiguration {
    CapacityAssignments: List<CapacityAssignment>;
    constructor(properties: CapacityAssignmentConfiguration);
}
export interface CapacityReservationProperties {
    TargetDpus: Value<number>;
    CapacityAssignmentConfiguration?: CapacityAssignmentConfiguration;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class CapacityReservation extends ResourceBase<CapacityReservationProperties> {
    static CapacityAssignment: typeof CapacityAssignment;
    static CapacityAssignmentConfiguration: typeof CapacityAssignmentConfiguration;
    constructor(properties: CapacityReservationProperties);
}
