import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface ComputeEnvironmentOrderProperties {
    ComputeEnvironment: Value<string>;
    Order: Value<number>;
}
export declare class ComputeEnvironmentOrder extends ResourceBase {
    constructor(properties: ComputeEnvironmentOrderProperties, dependsOn?: Value<string>);
}
export interface JobQueueProperties {
    ComputeEnvironmentOrder: ComputeEnvironmentOrder[];
    Priority: Value<number>;
    State?: Value<string>;
    JobQueueName?: Value<string>;
}
export default class JobQueue extends ResourceBase {
    constructor(properties: JobQueueProperties, dependsOn?: Value<string>);
}
