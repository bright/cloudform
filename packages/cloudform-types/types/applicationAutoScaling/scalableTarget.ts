/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class ScalableTargetAction {
    MinCapacity?: Value<number>
    MaxCapacity?: Value<number>

    constructor(properties: ScalableTargetAction) {
        Object.assign(this, properties)
    }
}

export class ScheduledAction {
    Timezone?: Value<string>
    ScheduledActionName!: Value<string>
    EndTime?: Value<string>
    Schedule!: Value<string>
    StartTime?: Value<string>
    ScalableTargetAction?: ScalableTargetAction

    constructor(properties: ScheduledAction) {
        Object.assign(this, properties)
    }
}

export class SuspendedState {
    DynamicScalingOutSuspended?: Value<boolean>
    ScheduledScalingSuspended?: Value<boolean>
    DynamicScalingInSuspended?: Value<boolean>

    constructor(properties: SuspendedState) {
        Object.assign(this, properties)
    }
}

export interface ScalableTargetProperties {
    ScheduledActions?: List<ScheduledAction>
    ResourceId: Value<string>
    ServiceNamespace: Value<string>
    ScalableDimension: Value<string>
    SuspendedState?: SuspendedState
    MinCapacity: Value<number>
    RoleARN?: Value<string>
    MaxCapacity: Value<number>
}

export default class ScalableTarget extends ResourceBase<ScalableTargetProperties> {
    static ScalableTargetAction = ScalableTargetAction
    static ScheduledAction = ScheduledAction
    static SuspendedState = SuspendedState

    constructor(properties: ScalableTargetProperties) {
        super('AWS::ApplicationAutoScaling::ScalableTarget', properties)
    }
}
