/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export interface ScheduledActionProperties {
    EndTime?: Value<string>
    ScalableTargetAction?: ScalableTargetAction
    Schedule: Value<string>
    ScheduledActionName: Value<string>
    StartTime?: Value<string>
}

export class ScheduledAction extends ResourceBase {
    constructor(properties: ScheduledActionProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::ApplicationAutoScaling::ScheduledAction', properties, dependsOn)
    }
}

export interface ScalableTargetActionProperties {
    MaxCapacity?: Value<number>
    MinCapacity?: Value<number>
}

export class ScalableTargetAction extends ResourceBase {
    constructor(properties: ScalableTargetActionProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::ApplicationAutoScaling::ScalableTargetAction', properties, dependsOn)
    }
}

export interface ScalableTargetProperties {
    MaxCapacity: Value<number>
    MinCapacity: Value<number>
    ResourceId: Value<string>
    RoleARN: Value<string>
    ScalableDimension: Value<string>
    ScheduledActions?: List<ScheduledAction>
    ServiceNamespace: Value<string>
}

export default class ScalableTarget extends ResourceBase {
    constructor(properties: ScalableTargetProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::ApplicationAutoScaling::ScalableTarget', properties, dependsOn)
    }
}
