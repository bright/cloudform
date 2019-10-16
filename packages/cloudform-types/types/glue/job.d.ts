import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class JobCommand {
    PythonVersion?: Value<string>;
    ScriptLocation?: Value<string>;
    Name?: Value<string>;
    constructor(properties: JobCommand);
}
export declare class ConnectionsList {
    Connections?: List<Value<string>>;
    constructor(properties: ConnectionsList);
}
export declare class NotificationProperty {
    NotifyDelayAfter?: Value<number>;
    constructor(properties: NotificationProperty);
}
export declare class ExecutionProperty {
    MaxConcurrentRuns?: Value<number>;
    constructor(properties: ExecutionProperty);
}
export interface JobProperties {
    Connections?: ConnectionsList;
    MaxRetries?: Value<number>;
    Description?: Value<string>;
    Timeout?: Value<number>;
    AllocatedCapacity?: Value<number>;
    Name?: Value<string>;
    Role: Value<string>;
    DefaultArguments?: {
        [key: string]: any;
    };
    NotificationProperty?: NotificationProperty;
    WorkerType?: Value<string>;
    LogUri?: Value<string>;
    Command: JobCommand;
    GlueVersion?: Value<string>;
    ExecutionProperty?: ExecutionProperty;
    SecurityConfiguration?: Value<string>;
    NumberOfWorkers?: Value<number>;
    Tags?: {
        [key: string]: any;
    };
    MaxCapacity?: Value<number>;
}
export default class Job extends ResourceBase<JobProperties> {
    static JobCommand: typeof JobCommand;
    static ConnectionsList: typeof ConnectionsList;
    static NotificationProperty: typeof NotificationProperty;
    static ExecutionProperty: typeof ExecutionProperty;
    constructor(properties: JobProperties);
}
