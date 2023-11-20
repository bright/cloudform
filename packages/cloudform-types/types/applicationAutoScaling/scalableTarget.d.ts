import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ScalableTargetAction {
    MinCapacity?: Value<number>;
    MaxCapacity?: Value<number>;
    constructor(properties: ScalableTargetAction);
}
export declare class ScheduledAction {
    Timezone?: Value<string>;
    ScheduledActionName: Value<string>;
    EndTime?: Value<string>;
    Schedule: Value<string>;
    StartTime?: Value<string>;
    ScalableTargetAction?: ScalableTargetAction;
    constructor(properties: ScheduledAction);
}
export declare class SuspendedState {
    DynamicScalingOutSuspended?: Value<boolean>;
    ScheduledScalingSuspended?: Value<boolean>;
    DynamicScalingInSuspended?: Value<boolean>;
    constructor(properties: SuspendedState);
}
export interface ScalableTargetProperties {
    ScheduledActions?: List<ScheduledAction>;
    ResourceId: Value<string>;
    ServiceNamespace: Value<string>;
    ScalableDimension: Value<string>;
    SuspendedState?: SuspendedState;
    MinCapacity: Value<number>;
    RoleARN?: Value<string>;
    MaxCapacity: Value<number>;
}
export default class ScalableTarget extends ResourceBase<ScalableTargetProperties> {
    static ScalableTargetAction: typeof ScalableTargetAction;
    static ScheduledAction: typeof ScheduledAction;
    static SuspendedState: typeof SuspendedState;
    constructor(properties: ScalableTargetProperties);
}
