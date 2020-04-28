/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class SetTimer {
    Seconds?: Value<number>
    TimerName?: Value<string>
    DurationExpression?: Value<string>

    constructor(properties: SetTimer) {
        Object.assign(this, properties)
    }
}

export class ResetTimer {
    TimerName?: Value<string>

    constructor(properties: ResetTimer) {
        Object.assign(this, properties)
    }
}

export class IotEvents {
    InputName?: Value<string>

    constructor(properties: IotEvents) {
        Object.assign(this, properties)
    }
}

export class TransitionEvent {
    Condition?: Value<string>
    Actions?: List<Action>
    NextState?: Value<string>
    EventName?: Value<string>

    constructor(properties: TransitionEvent) {
        Object.assign(this, properties)
    }
}

export class OnInput {
    Events?: List<Event>
    TransitionEvents?: List<TransitionEvent>

    constructor(properties: OnInput) {
        Object.assign(this, properties)
    }
}

export class SetVariable {
    VariableName?: Value<string>
    Value?: Value<string>

    constructor(properties: SetVariable) {
        Object.assign(this, properties)
    }
}

export class Firehose {
    DeliveryStreamName?: Value<string>
    Separator?: Value<string>

    constructor(properties: Firehose) {
        Object.assign(this, properties)
    }
}

export class ClearTimer {
    TimerName?: Value<string>

    constructor(properties: ClearTimer) {
        Object.assign(this, properties)
    }
}

export class OnEnter {
    Events?: List<Event>

    constructor(properties: OnEnter) {
        Object.assign(this, properties)
    }
}

export class State {
    OnInput?: OnInput
    OnExit?: OnExit
    StateName?: Value<string>
    OnEnter?: OnEnter

    constructor(properties: State) {
        Object.assign(this, properties)
    }
}

export class Event {
    Condition?: Value<string>
    Actions?: List<Action>
    EventName?: Value<string>

    constructor(properties: Event) {
        Object.assign(this, properties)
    }
}

export class Sns {
    TargetArn?: Value<string>

    constructor(properties: Sns) {
        Object.assign(this, properties)
    }
}

export class OnExit {
    Events?: List<Event>

    constructor(properties: OnExit) {
        Object.assign(this, properties)
    }
}

export class Sqs {
    UseBase64?: Value<boolean>
    QueueUrl?: Value<string>

    constructor(properties: Sqs) {
        Object.assign(this, properties)
    }
}

export class DetectorModelDefinition {
    States?: List<State>
    InitialStateName?: Value<string>

    constructor(properties: DetectorModelDefinition) {
        Object.assign(this, properties)
    }
}

export class IotTopicPublish {
    MqttTopic?: Value<string>

    constructor(properties: IotTopicPublish) {
        Object.assign(this, properties)
    }
}

export class Action {
    IotEvents?: IotEvents
    ResetTimer?: ResetTimer
    Sqs?: Sqs
    Firehose?: Firehose
    Sns?: Sns
    IotTopicPublish?: IotTopicPublish
    SetTimer?: SetTimer
    ClearTimer?: ClearTimer
    Lambda?: Lambda
    SetVariable?: SetVariable

    constructor(properties: Action) {
        Object.assign(this, properties)
    }
}

export class Lambda {
    FunctionArn?: Value<string>

    constructor(properties: Lambda) {
        Object.assign(this, properties)
    }
}

export interface DetectorModelProperties {
    DetectorModelDefinition?: DetectorModelDefinition
    EvaluationMethod?: Value<string>
    DetectorModelName?: Value<string>
    DetectorModelDescription?: Value<string>
    Key?: Value<string>
    RoleArn?: Value<string>
    Tags?: List<ResourceTag>
}

export default class DetectorModel extends ResourceBase<DetectorModelProperties> {
    static SetTimer = SetTimer
    static ResetTimer = ResetTimer
    static IotEvents = IotEvents
    static TransitionEvent = TransitionEvent
    static OnInput = OnInput
    static SetVariable = SetVariable
    static Firehose = Firehose
    static ClearTimer = ClearTimer
    static OnEnter = OnEnter
    static State = State
    static Event = Event
    static Sns = Sns
    static OnExit = OnExit
    static Sqs = Sqs
    static DetectorModelDefinition = DetectorModelDefinition
    static IotTopicPublish = IotTopicPublish
    static Action = Action
    static Lambda = Lambda

    constructor(properties?: DetectorModelProperties) {
        super('AWS::IoTEvents::DetectorModel', properties || {})
    }
}
