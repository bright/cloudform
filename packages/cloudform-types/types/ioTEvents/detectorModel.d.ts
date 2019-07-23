import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class SetTimer {
    Seconds?: Value<number>;
    TimerName?: Value<string>;
    constructor(properties: SetTimer);
}
export declare class ResetTimer {
    TimerName?: Value<string>;
    constructor(properties: ResetTimer);
}
export declare class IotEvents {
    InputName?: Value<string>;
    constructor(properties: IotEvents);
}
export declare class TransitionEvent {
    Condition?: Value<string>;
    Actions?: List<Action>;
    NextState?: Value<string>;
    EventName?: Value<string>;
    constructor(properties: TransitionEvent);
}
export declare class OnInput {
    Events?: List<Event>;
    TransitionEvents?: List<TransitionEvent>;
    constructor(properties: OnInput);
}
export declare class SetVariable {
    VariableName?: Value<string>;
    Value?: Value<string>;
    constructor(properties: SetVariable);
}
export declare class Firehose {
    DeliveryStreamName?: Value<string>;
    Separator?: Value<string>;
    constructor(properties: Firehose);
}
export declare class ClearTimer {
    TimerName?: Value<string>;
    constructor(properties: ClearTimer);
}
export declare class OnEnter {
    Events?: List<Event>;
    constructor(properties: OnEnter);
}
export declare class State {
    OnInput?: OnInput;
    OnExit?: OnExit;
    StateName?: Value<string>;
    OnEnter?: OnEnter;
    constructor(properties: State);
}
export declare class Event {
    Condition?: Value<string>;
    Actions?: List<Action>;
    EventName?: Value<string>;
    constructor(properties: Event);
}
export declare class Sns {
    TargetArn?: Value<string>;
    constructor(properties: Sns);
}
export declare class OnExit {
    Events?: List<Event>;
    constructor(properties: OnExit);
}
export declare class Sqs {
    UseBase64?: Value<boolean>;
    QueueUrl?: Value<string>;
    constructor(properties: Sqs);
}
export declare class DetectorModelDefinition {
    States?: List<State>;
    InitialStateName?: Value<string>;
    constructor(properties: DetectorModelDefinition);
}
export declare class IotTopicPublish {
    MqttTopic?: Value<string>;
    constructor(properties: IotTopicPublish);
}
export declare class Action {
    IotEvents?: IotEvents;
    ResetTimer?: ResetTimer;
    Sqs?: Sqs;
    Firehose?: Firehose;
    Sns?: Sns;
    IotTopicPublish?: IotTopicPublish;
    SetTimer?: SetTimer;
    ClearTimer?: ClearTimer;
    Lambda?: Lambda;
    SetVariable?: SetVariable;
    constructor(properties: Action);
}
export declare class Lambda {
    FunctionArn?: Value<string>;
    constructor(properties: Lambda);
}
export interface DetectorModelProperties {
    DetectorModelDefinition?: DetectorModelDefinition;
    DetectorModelName?: Value<string>;
    DetectorModelDescription?: Value<string>;
    Key?: Value<string>;
    RoleArn?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class DetectorModel extends ResourceBase<DetectorModelProperties> {
    static SetTimer: typeof SetTimer;
    static ResetTimer: typeof ResetTimer;
    static IotEvents: typeof IotEvents;
    static TransitionEvent: typeof TransitionEvent;
    static OnInput: typeof OnInput;
    static SetVariable: typeof SetVariable;
    static Firehose: typeof Firehose;
    static ClearTimer: typeof ClearTimer;
    static OnEnter: typeof OnEnter;
    static State: typeof State;
    static Event: typeof Event;
    static Sns: typeof Sns;
    static OnExit: typeof OnExit;
    static Sqs: typeof Sqs;
    static DetectorModelDefinition: typeof DetectorModelDefinition;
    static IotTopicPublish: typeof IotTopicPublish;
    static Action: typeof Action;
    static Lambda: typeof Lambda;
    constructor(properties?: DetectorModelProperties);
}
