import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class SetTimer {
    DurationExpression?: Value<string>;
    Seconds?: Value<number>;
    TimerName: Value<string>;
    constructor(properties: SetTimer);
}
export declare class ResetTimer {
    TimerName: Value<string>;
    constructor(properties: ResetTimer);
}
export declare class IotEvents {
    InputName: Value<string>;
    Payload?: Payload;
    constructor(properties: IotEvents);
}
export declare class TransitionEvent {
    Actions?: List<Action>;
    Condition: Value<string>;
    EventName: Value<string>;
    NextState: Value<string>;
    constructor(properties: TransitionEvent);
}
export declare class IotSiteWise {
    AssetId?: Value<string>;
    EntryId?: Value<string>;
    PropertyAlias?: Value<string>;
    PropertyId?: Value<string>;
    PropertyValue: AssetPropertyValue;
    constructor(properties: IotSiteWise);
}
export declare class DynamoDB {
    HashKeyField: Value<string>;
    HashKeyType?: Value<string>;
    HashKeyValue: Value<string>;
    Operation?: Value<string>;
    Payload?: Payload;
    PayloadField?: Value<string>;
    RangeKeyField?: Value<string>;
    RangeKeyType?: Value<string>;
    RangeKeyValue?: Value<string>;
    TableName: Value<string>;
    constructor(properties: DynamoDB);
}
export declare class Firehose {
    DeliveryStreamName: Value<string>;
    Payload?: Payload;
    Separator?: Value<string>;
    constructor(properties: Firehose);
}
export declare class ClearTimer {
    TimerName: Value<string>;
    constructor(properties: ClearTimer);
}
export declare class State {
    OnEnter?: OnEnter;
    OnExit?: OnExit;
    OnInput?: OnInput;
    StateName: Value<string>;
    constructor(properties: State);
}
export declare class Event {
    Actions?: List<Action>;
    Condition?: Value<string>;
    EventName: Value<string>;
    constructor(properties: Event);
}
export declare class Sns {
    Payload?: Payload;
    TargetArn: Value<string>;
    constructor(properties: Sns);
}
export declare class OnExit {
    Events?: List<Event>;
    constructor(properties: OnExit);
}
export declare class Sqs {
    Payload?: Payload;
    QueueUrl: Value<string>;
    UseBase64?: Value<boolean>;
    constructor(properties: Sqs);
}
export declare class DetectorModelDefinition {
    InitialStateName: Value<string>;
    States: List<State>;
    constructor(properties: DetectorModelDefinition);
}
export declare class IotTopicPublish {
    MqttTopic: Value<string>;
    Payload?: Payload;
    constructor(properties: IotTopicPublish);
}
export declare class Action {
    ClearTimer?: ClearTimer;
    DynamoDB?: DynamoDB;
    DynamoDBv2?: DynamoDBv2;
    Firehose?: Firehose;
    IotEvents?: IotEvents;
    IotSiteWise?: IotSiteWise;
    IotTopicPublish?: IotTopicPublish;
    Lambda?: Lambda;
    ResetTimer?: ResetTimer;
    SetTimer?: SetTimer;
    SetVariable?: SetVariable;
    Sns?: Sns;
    Sqs?: Sqs;
    constructor(properties: Action);
}
export declare class AssetPropertyTimestamp {
    OffsetInNanos?: Value<string>;
    TimeInSeconds: Value<string>;
    constructor(properties: AssetPropertyTimestamp);
}
export declare class DynamoDBv2 {
    Payload?: Payload;
    TableName: Value<string>;
    constructor(properties: DynamoDBv2);
}
export declare class OnInput {
    Events?: List<Event>;
    TransitionEvents?: List<TransitionEvent>;
    constructor(properties: OnInput);
}
export declare class AssetPropertyVariant {
    BooleanValue?: Value<string>;
    DoubleValue?: Value<string>;
    IntegerValue?: Value<string>;
    StringValue?: Value<string>;
    constructor(properties: AssetPropertyVariant);
}
export declare class SetVariable {
    Value: Value<string>;
    VariableName: Value<string>;
    constructor(properties: SetVariable);
}
export declare class Payload {
    ContentExpression: Value<string>;
    Type: Value<string>;
    constructor(properties: Payload);
}
export declare class OnEnter {
    Events?: List<Event>;
    constructor(properties: OnEnter);
}
export declare class AssetPropertyValue {
    Quality?: Value<string>;
    Timestamp?: AssetPropertyTimestamp;
    Value: AssetPropertyVariant;
    constructor(properties: AssetPropertyValue);
}
export declare class Lambda {
    FunctionArn: Value<string>;
    Payload?: Payload;
    constructor(properties: Lambda);
}
export interface DetectorModelProperties {
    DetectorModelDefinition: DetectorModelDefinition;
    DetectorModelDescription?: Value<string>;
    DetectorModelName?: Value<string>;
    EvaluationMethod?: Value<string>;
    Key?: Value<string>;
    RoleArn: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class DetectorModel extends ResourceBase<DetectorModelProperties> {
    static SetTimer: typeof SetTimer;
    static ResetTimer: typeof ResetTimer;
    static IotEvents: typeof IotEvents;
    static TransitionEvent: typeof TransitionEvent;
    static IotSiteWise: typeof IotSiteWise;
    static DynamoDB: typeof DynamoDB;
    static Firehose: typeof Firehose;
    static ClearTimer: typeof ClearTimer;
    static State: typeof State;
    static Event: typeof Event;
    static Sns: typeof Sns;
    static OnExit: typeof OnExit;
    static Sqs: typeof Sqs;
    static DetectorModelDefinition: typeof DetectorModelDefinition;
    static IotTopicPublish: typeof IotTopicPublish;
    static Action: typeof Action;
    static AssetPropertyTimestamp: typeof AssetPropertyTimestamp;
    static DynamoDBv2: typeof DynamoDBv2;
    static OnInput: typeof OnInput;
    static AssetPropertyVariant: typeof AssetPropertyVariant;
    static SetVariable: typeof SetVariable;
    static Payload: typeof Payload;
    static OnEnter: typeof OnEnter;
    static AssetPropertyValue: typeof AssetPropertyValue;
    static Lambda: typeof Lambda;
    constructor(properties: DetectorModelProperties);
}
