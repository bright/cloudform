import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface ScheduledActionProperties {
    EndTime?: Value<string>;
    ScalableTargetAction?: ScalableTargetAction;
    Schedule: Value<string>;
    ScheduledActionName: Value<string>;
    StartTime?: Value<string>;
}
export declare class ScheduledAction extends ResourceBase {
    constructor(properties: ScheduledActionProperties, dependsOn?: Value<string>);
}
export interface ScalableTargetActionProperties {
    MaxCapacity?: Value<number>;
    MinCapacity?: Value<number>;
}
export declare class ScalableTargetAction extends ResourceBase {
    constructor(properties: ScalableTargetActionProperties, dependsOn?: Value<string>);
}
export interface ScalableTargetProperties {
    MaxCapacity: Value<number>;
    MinCapacity: Value<number>;
    ResourceId: Value<string>;
    RoleARN: Value<string>;
    ScalableDimension: Value<string>;
    ScheduledActions?: ScheduledAction[];
    ServiceNamespace: Value<string>;
}
export default class ScalableTarget extends ResourceBase {
    constructor(properties: ScalableTargetProperties, dependsOn?: Value<string>);
}
