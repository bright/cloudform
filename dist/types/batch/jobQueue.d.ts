import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface ComputeEnvironmentOrderProperties {
    ComputeEnvironment: Value<string>;
    Order: Value<number>;
}
export declare class ComputeEnvironmentOrder extends ResourceBase {
    constructor(properties: ComputeEnvironmentOrderProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface JobQueueProperties {
    ComputeEnvironmentOrder: List<ComputeEnvironmentOrder>;
    Priority: Value<number>;
    State?: Value<string>;
    JobQueueName?: Value<string>;
}
export default class JobQueue extends ResourceBase {
    constructor(properties: JobQueueProperties, dependsOn?: Value<string> | Value<string>[]);
}
