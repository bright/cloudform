/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class SuspendedState {
    DynamicScalingInSuspended?: Value<boolean>
    DynamicScalingOutSuspended?: Value<boolean>
    ScheduledScalingSuspended?: Value<boolean>

    constructor(properties: SuspendedState) {
        Object.assign(this, properties)
    }
}

export class ScheduledAction {
    EndTime?: Value<string>
    ScalableTargetAction?: ScalableTargetAction
    Schedule!: Value<string>
    ScheduledActionName!: Value<string>
    StartTime?: Value<string>

    constructor(properties: ScheduledAction) {
        Object.assign(this, properties)
    }
}

export class ScalableTargetAction {
    MaxCapacity?: Value<number>
    MinCapacity?: Value<number>

    constructor(properties: ScalableTargetAction) {
        Object.assign(this, properties)
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
    SuspendedState?: SuspendedState
}

export default class ScalableTarget extends ResourceBase<ScalableTargetProperties> {
    static SuspendedState = SuspendedState
    static ScheduledAction = ScheduledAction
    static ScalableTargetAction = ScalableTargetAction

    constructor(properties: ScalableTargetProperties) {
        super('AWS::ApplicationAutoScaling::ScalableTarget', properties)
    }
}
