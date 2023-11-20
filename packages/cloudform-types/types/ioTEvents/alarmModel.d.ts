import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AcknowledgeFlow {
    Enabled?: Value<boolean>;
    constructor(properties: AcknowledgeFlow);
}
export declare class AlarmAction {
    DynamoDBv2?: DynamoDBv2;
    IotEvents?: IotEvents;
    IotSiteWise?: IotSiteWise;
    Sqs?: Sqs;
    Firehose?: Firehose;
    DynamoDB?: DynamoDB;
    IotTopicPublish?: IotTopicPublish;
    Sns?: Sns;
    Lambda?: Lambda;
    constructor(properties: AlarmAction);
}
export declare class AlarmCapabilities {
    AcknowledgeFlow?: AcknowledgeFlow;
    InitializationConfiguration?: InitializationConfiguration;
    constructor(properties: AlarmCapabilities);
}
export declare class AlarmEventActions {
    AlarmActions?: List<AlarmAction>;
    constructor(properties: AlarmEventActions);
}
export declare class AlarmRule {
    SimpleRule?: SimpleRule;
    constructor(properties: AlarmRule);
}
export declare class AssetPropertyTimestamp {
    TimeInSeconds: Value<string>;
    OffsetInNanos?: Value<string>;
    constructor(properties: AssetPropertyTimestamp);
}
export declare class AssetPropertyValue {
    Quality?: Value<string>;
    Value: AssetPropertyVariant;
    Timestamp?: AssetPropertyTimestamp;
    constructor(properties: AssetPropertyValue);
}
export declare class AssetPropertyVariant {
    DoubleValue?: Value<string>;
    BooleanValue?: Value<string>;
    IntegerValue?: Value<string>;
    StringValue?: Value<string>;
    constructor(properties: AssetPropertyVariant);
}
export declare class DynamoDB {
    TableName: Value<string>;
    PayloadField?: Value<string>;
    RangeKeyField?: Value<string>;
    HashKeyField: Value<string>;
    RangeKeyValue?: Value<string>;
    RangeKeyType?: Value<string>;
    HashKeyType?: Value<string>;
    HashKeyValue: Value<string>;
    Payload?: Payload;
    Operation?: Value<string>;
    constructor(properties: DynamoDB);
}
export declare class DynamoDBv2 {
    TableName: Value<string>;
    Payload?: Payload;
    constructor(properties: DynamoDBv2);
}
export declare class Firehose {
    DeliveryStreamName: Value<string>;
    Payload?: Payload;
    Separator?: Value<string>;
    constructor(properties: Firehose);
}
export declare class InitializationConfiguration {
    DisabledOnInitialization: Value<boolean>;
    constructor(properties: InitializationConfiguration);
}
export declare class IotEvents {
    InputName: Value<string>;
    Payload?: Payload;
    constructor(properties: IotEvents);
}
export declare class IotSiteWise {
    EntryId?: Value<string>;
    PropertyAlias?: Value<string>;
    PropertyValue?: AssetPropertyValue;
    AssetId?: Value<string>;
    PropertyId?: Value<string>;
    constructor(properties: IotSiteWise);
}
export declare class IotTopicPublish {
    MqttTopic: Value<string>;
    Payload?: Payload;
    constructor(properties: IotTopicPublish);
}
export declare class Lambda {
    FunctionArn: Value<string>;
    Payload?: Payload;
    constructor(properties: Lambda);
}
export declare class Payload {
    ContentExpression: Value<string>;
    Type: Value<string>;
    constructor(properties: Payload);
}
export declare class SimpleRule {
    ComparisonOperator: Value<string>;
    InputProperty: Value<string>;
    Threshold: Value<string>;
    constructor(properties: SimpleRule);
}
export declare class Sns {
    TargetArn: Value<string>;
    Payload?: Payload;
    constructor(properties: Sns);
}
export declare class Sqs {
    UseBase64?: Value<boolean>;
    Payload?: Payload;
    QueueUrl: Value<string>;
    constructor(properties: Sqs);
}
export interface AlarmModelProperties {
    AlarmRule: AlarmRule;
    AlarmModelName?: Value<string>;
    AlarmModelDescription?: Value<string>;
    Severity?: Value<number>;
    AlarmCapabilities?: AlarmCapabilities;
    RoleArn: Value<string>;
    Key?: Value<string>;
    AlarmEventActions?: AlarmEventActions;
    Tags?: List<ResourceTag>;
}
export default class AlarmModel extends ResourceBase<AlarmModelProperties> {
    static AcknowledgeFlow: typeof AcknowledgeFlow;
    static AlarmAction: typeof AlarmAction;
    static AlarmCapabilities: typeof AlarmCapabilities;
    static AlarmEventActions: typeof AlarmEventActions;
    static AlarmRule: typeof AlarmRule;
    static AssetPropertyTimestamp: typeof AssetPropertyTimestamp;
    static AssetPropertyValue: typeof AssetPropertyValue;
    static AssetPropertyVariant: typeof AssetPropertyVariant;
    static DynamoDB: typeof DynamoDB;
    static DynamoDBv2: typeof DynamoDBv2;
    static Firehose: typeof Firehose;
    static InitializationConfiguration: typeof InitializationConfiguration;
    static IotEvents: typeof IotEvents;
    static IotSiteWise: typeof IotSiteWise;
    static IotTopicPublish: typeof IotTopicPublish;
    static Lambda: typeof Lambda;
    static Payload: typeof Payload;
    static SimpleRule: typeof SimpleRule;
    static Sns: typeof Sns;
    static Sqs: typeof Sqs;
    constructor(properties: AlarmModelProperties);
}
