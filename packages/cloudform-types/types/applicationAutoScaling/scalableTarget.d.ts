import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class SuspendedState {
    DynamicScalingInSuspended?: Value<boolean>;
    DynamicScalingOutSuspended?: Value<boolean>;
    ScheduledScalingSuspended?: Value<boolean>;
    constructor(properties: SuspendedState);
}
export declare class ScheduledAction {
    EndTime?: Value<string>;
    ScalableTargetAction?: ScalableTargetAction;
    Schedule: Value<string>;
    ScheduledActionName: Value<string>;
    StartTime?: Value<string>;
    constructor(properties: ScheduledAction);
}
export declare class ScalableTargetAction {
    MaxCapacity?: Value<number>;
    MinCapacity?: Value<number>;
    constructor(properties: ScalableTargetAction);
}
export interface ScalableTargetProperties {
    MaxCapacity: Value<number>;
    MinCapacity: Value<number>;
    ResourceId: Value<string>;
    RoleARN: Value<string>;
    ScalableDimension: Value<string>;
    ScheduledActions?: List<ScheduledAction>;
    ServiceNamespace: Value<string>;
    SuspendedState?: SuspendedState;
}
export default class ScalableTarget extends ResourceBase<ScalableTargetProperties> {
    static SuspendedState: typeof SuspendedState;
    static ScheduledAction: typeof ScheduledAction;
    static ScalableTargetAction: typeof ScalableTargetAction;
    constructor(properties: ScalableTargetProperties);
}
