import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class PauseClusterMessage {
    ClusterIdentifier: Value<string>;
    constructor(properties: PauseClusterMessage);
}
export declare class ResizeClusterMessage {
    NodeType?: Value<string>;
    NumberOfNodes?: Value<number>;
    ClusterType?: Value<string>;
    Classic?: Value<boolean>;
    ClusterIdentifier: Value<string>;
    constructor(properties: ResizeClusterMessage);
}
export declare class ResumeClusterMessage {
    ClusterIdentifier: Value<string>;
    constructor(properties: ResumeClusterMessage);
}
export declare class ScheduledActionType {
    PauseCluster?: PauseClusterMessage;
    ResumeCluster?: ResumeClusterMessage;
    ResizeCluster?: ResizeClusterMessage;
    constructor(properties: ScheduledActionType);
}
export interface ScheduledActionProperties {
    ScheduledActionDescription?: Value<string>;
    ScheduledActionName: Value<string>;
    EndTime?: Value<string>;
    Schedule?: Value<string>;
    IamRole?: Value<string>;
    StartTime?: Value<string>;
    Enable?: Value<boolean>;
    TargetAction?: ScheduledActionType;
}
export default class ScheduledAction extends ResourceBase<ScheduledActionProperties> {
    static PauseClusterMessage: typeof PauseClusterMessage;
    static ResizeClusterMessage: typeof ResizeClusterMessage;
    static ResumeClusterMessage: typeof ResumeClusterMessage;
    static ScheduledActionType: typeof ScheduledActionType;
    constructor(properties: ScheduledActionProperties);
}
