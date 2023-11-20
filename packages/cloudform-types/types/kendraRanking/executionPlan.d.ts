import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class CapacityUnitsConfiguration {
    RescoreCapacityUnits: Value<number>;
    constructor(properties: CapacityUnitsConfiguration);
}
export interface ExecutionPlanProperties {
    Description?: Value<string>;
    CapacityUnits?: CapacityUnitsConfiguration;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class ExecutionPlan extends ResourceBase<ExecutionPlanProperties> {
    static CapacityUnitsConfiguration: typeof CapacityUnitsConfiguration;
    constructor(properties: ExecutionPlanProperties);
}
