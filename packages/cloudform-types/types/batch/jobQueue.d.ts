import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ComputeEnvironmentOrder {
    ComputeEnvironment: Value<string>;
    Order: Value<number>;
    constructor(properties: ComputeEnvironmentOrder);
}
export interface JobQueueProperties {
    ComputeEnvironmentOrder: List<ComputeEnvironmentOrder>;
    Priority: Value<number>;
    State?: Value<string>;
    SchedulingPolicyArn?: Value<string>;
    JobQueueName?: Value<string>;
    Tags?: {
        [key: string]: Value<string>;
    };
}
export default class JobQueue extends ResourceBase<JobQueueProperties> {
    static ComputeEnvironmentOrder: typeof ComputeEnvironmentOrder;
    constructor(properties: JobQueueProperties);
}
