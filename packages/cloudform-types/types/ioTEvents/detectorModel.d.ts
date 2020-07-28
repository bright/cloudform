import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class SetTimer {
    Seconds?: Value<number>;
    TimerName?: Value<string>;
    DurationExpression?: Value<string>;
    constructor(properties: SetTimer);
}
export declare class ResetTimer {
    TimerName?: Value<string>;
    constructor(properties: ResetTimer);
}
export declare class IotEvents {
    InputName?: Value<string>;
    Payload?: Payload;
    constructor(properties: IotEvents);
}
export declare class TransitionEvent {
    Condition?: Value<string>;
    Actions?: List<Action>;
    NextState?: Value<string>;
    EventName?: Value<string>;
    constructor(properties: TransitionEvent);
}
export declare class AssetPropertyTimestamp {
    TimeInSeconds?: Value<string>;
    OffsetInNanos?: Value<string>;
    constructor(properties: AssetPropertyTimestamp);
}
export declare class DynamoDBv2 {
    TableName?: Value<string>;
    Payload?: Payload;
    constructor(properties: DynamoDBv2);
}
export declare class OnInput {
    Events?: List<Event>;
    TransitionEvents?: List<TransitionEvent>;
    constructor(properties: OnInput);
}
export declare class IotSiteWise {
    EntryId?: Value<string>;
    PropertyAlias?: Value<string>;
    PropertyValue?: AssetPropertyValue;
    AssetId?: Value<string>;
    PropertyId?: Value<string>;
    constructor(properties: IotSiteWise);
}
export declare class AssetPropertyVariant {
    DoubleValue?: Value<string>;
    IntegerValue?: Value<string>;
    BooleanValue?: Value<string>;
    StringValue?: Value<string>;
    constructor(properties: AssetPropertyVariant);
}
export declare class DynamoDB {
    TableName?: Value<string>;
    PayloadField?: Value<string>;
    RangeKeyField?: Value<string>;
    HashKeyField?: Value<string>;
    RangeKeyValue?: Value<string>;
    RangeKeyType?: Value<string>;
    HashKeyType?: Value<string>;
    HashKeyValue?: Value<string>;
    Payload?: Payload;
    Operation?: Value<string>;
    constructor(properties: DynamoDB);
}
export declare class SetVariable {
    VariableName?: Value<string>;
    Value?: Value<string>;
    constructor(properties: SetVariable);
}
export declare class Firehose {
    DeliveryStreamName?: Value<string>;
    Payload?: Payload;
    Separator?: Value<string>;
    constructor(properties: Firehose);
}
export declare class Payload {
    ContentExpression?: Value<string>;
    Type?: Value<string>;
    constructor(properties: Payload);
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
export declare class AssetPropertyValue {
    Quality?: Value<string>;
    Value?: AssetPropertyVariant;
    Timestamp?: AssetPropertyTimestamp;
    constructor(properties: AssetPropertyValue);
}
export declare class Sns {
    TargetArn?: Value<string>;
    Payload?: Payload;
    constructor(properties: Sns);
}
export declare class OnExit {
    Events?: List<Event>;
    constructor(properties: OnExit);
}
export declare class Sqs {
    UseBase64?: Value<boolean>;
    Payload?: Payload;
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
    Payload?: Payload;
    constructor(properties: IotTopicPublish);
}
export declare class Action {
    IotEvents?: IotEvents;
    Firehose?: Firehose;
    IotTopicPublish?: IotTopicPublish;
    DynamoDB?: DynamoDB;
    DynamoDBv2?: DynamoDBv2;
    IotSiteWise?: IotSiteWise;
    ResetTimer?: ResetTimer;
    Sqs?: Sqs;
    Sns?: Sns;
    SetTimer?: SetTimer;
    ClearTimer?: ClearTimer;
    Lambda?: Lambda;
    SetVariable?: SetVariable;
    constructor(properties: Action);
}
export declare class Lambda {
    FunctionArn?: Value<string>;
    Payload?: Payload;
    constructor(properties: Lambda);
}
export interface DetectorModelProperties {
    DetectorModelDefinition?: DetectorModelDefinition;
    EvaluationMethod?: Value<string>;
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
    static AssetPropertyTimestamp: typeof AssetPropertyTimestamp;
    static DynamoDBv2: typeof DynamoDBv2;
    static OnInput: typeof OnInput;
    static IotSiteWise: typeof IotSiteWise;
    static AssetPropertyVariant: typeof AssetPropertyVariant;
    static DynamoDB: typeof DynamoDB;
    static SetVariable: typeof SetVariable;
    static Firehose: typeof Firehose;
    static Payload: typeof Payload;
    static ClearTimer: typeof ClearTimer;
    static OnEnter: typeof OnEnter;
    static State: typeof State;
    static Event: typeof Event;
    static AssetPropertyValue: typeof AssetPropertyValue;
    static Sns: typeof Sns;
    static OnExit: typeof OnExit;
    static Sqs: typeof Sqs;
    static DetectorModelDefinition: typeof DetectorModelDefinition;
    static IotTopicPublish: typeof IotTopicPublish;
    static Action: typeof Action;
    static Lambda: typeof Lambda;
    constructor(properties?: DetectorModelProperties);
}
