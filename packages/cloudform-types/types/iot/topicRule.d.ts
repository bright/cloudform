import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AssetPropertyVariant {
    BooleanValue?: Value<string>;
    DoubleValue?: Value<string>;
    IntegerValue?: Value<string>;
    StringValue?: Value<string>;
    constructor(properties: AssetPropertyVariant);
}
export declare class S3Action {
    BucketName: Value<string>;
    Key: Value<string>;
    RoleArn: Value<string>;
    constructor(properties: S3Action);
}
export declare class SigV4Authorization {
    RoleArn: Value<string>;
    ServiceName: Value<string>;
    SigningRegion: Value<string>;
    constructor(properties: SigV4Authorization);
}
export declare class SqsAction {
    QueueUrl: Value<string>;
    RoleArn: Value<string>;
    UseBase64?: Value<boolean>;
    constructor(properties: SqsAction);
}
export declare class PutItemInput {
    TableName: Value<string>;
    constructor(properties: PutItemInput);
}
export declare class SnsAction {
    MessageFormat?: Value<string>;
    RoleArn: Value<string>;
    TargetArn: Value<string>;
    constructor(properties: SnsAction);
}
export declare class HttpAction {
    Auth?: HttpAuthorization;
    ConfirmationUrl?: Value<string>;
    Headers?: List<HttpActionHeader>;
    Url: Value<string>;
    constructor(properties: HttpAction);
}
export declare class PutAssetPropertyValueEntry {
    AssetId?: Value<string>;
    EntryId?: Value<string>;
    PropertyAlias?: Value<string>;
    PropertyId?: Value<string>;
    PropertyValues: List<AssetPropertyValue>;
    constructor(properties: PutAssetPropertyValueEntry);
}
export declare class FirehoseAction {
    DeliveryStreamName: Value<string>;
    RoleArn: Value<string>;
    Separator?: Value<string>;
    constructor(properties: FirehoseAction);
}
export declare class LambdaAction {
    FunctionArn?: Value<string>;
    constructor(properties: LambdaAction);
}
export declare class AssetPropertyTimestamp {
    OffsetInNanos?: Value<string>;
    TimeInSeconds: Value<string>;
    constructor(properties: AssetPropertyTimestamp);
}
export declare class AssetPropertyValue {
    Quality?: Value<string>;
    Timestamp: AssetPropertyTimestamp;
    Value: AssetPropertyVariant;
    constructor(properties: AssetPropertyValue);
}
export declare class ElasticsearchAction {
    Endpoint: Value<string>;
    Id: Value<string>;
    Index: Value<string>;
    RoleArn: Value<string>;
    Type: Value<string>;
    constructor(properties: ElasticsearchAction);
}
export declare class DynamoDBAction {
    HashKeyField: Value<string>;
    HashKeyType?: Value<string>;
    HashKeyValue: Value<string>;
    PayloadField?: Value<string>;
    RangeKeyField?: Value<string>;
    RangeKeyType?: Value<string>;
    RangeKeyValue?: Value<string>;
    RoleArn: Value<string>;
    TableName: Value<string>;
    constructor(properties: DynamoDBAction);
}
export declare class KinesisAction {
    PartitionKey?: Value<string>;
    RoleArn: Value<string>;
    StreamName: Value<string>;
    constructor(properties: KinesisAction);
}
export declare class Action {
    CloudwatchAlarm?: CloudwatchAlarmAction;
    CloudwatchMetric?: CloudwatchMetricAction;
    DynamoDB?: DynamoDBAction;
    DynamoDBv2?: DynamoDBv2Action;
    Elasticsearch?: ElasticsearchAction;
    Firehose?: FirehoseAction;
    Http?: HttpAction;
    IotAnalytics?: IotAnalyticsAction;
    IotEvents?: IotEventsAction;
    IotSiteWise?: IotSiteWiseAction;
    Kinesis?: KinesisAction;
    Lambda?: LambdaAction;
    Republish?: RepublishAction;
    S3?: S3Action;
    Sns?: SnsAction;
    Sqs?: SqsAction;
    StepFunctions?: StepFunctionsAction;
    constructor(properties: Action);
}
export declare class HttpAuthorization {
    Sigv4?: SigV4Authorization;
    constructor(properties: HttpAuthorization);
}
export declare class IotAnalyticsAction {
    ChannelName: Value<string>;
    RoleArn: Value<string>;
    constructor(properties: IotAnalyticsAction);
}
export declare class IotEventsAction {
    InputName: Value<string>;
    MessageId?: Value<string>;
    RoleArn: Value<string>;
    constructor(properties: IotEventsAction);
}
export declare class HttpActionHeader {
    Key: Value<string>;
    Value: Value<string>;
    constructor(properties: HttpActionHeader);
}
export declare class IotSiteWiseAction {
    PutAssetPropertyValueEntries: List<PutAssetPropertyValueEntry>;
    RoleArn: Value<string>;
    constructor(properties: IotSiteWiseAction);
}
export declare class RepublishAction {
    Qos?: Value<number>;
    RoleArn: Value<string>;
    Topic: Value<string>;
    constructor(properties: RepublishAction);
}
export declare class StepFunctionsAction {
    ExecutionNamePrefix?: Value<string>;
    RoleArn: Value<string>;
    StateMachineName: Value<string>;
    constructor(properties: StepFunctionsAction);
}
export declare class TopicRulePayload {
    Actions: List<Action>;
    AwsIotSqlVersion?: Value<string>;
    Description?: Value<string>;
    ErrorAction?: Action;
    RuleDisabled: Value<boolean>;
    Sql: Value<string>;
    constructor(properties: TopicRulePayload);
}
export declare class DynamoDBv2Action {
    PutItem?: PutItemInput;
    RoleArn?: Value<string>;
    constructor(properties: DynamoDBv2Action);
}
export declare class CloudwatchAlarmAction {
    AlarmName: Value<string>;
    RoleArn: Value<string>;
    StateReason: Value<string>;
    StateValue: Value<string>;
    constructor(properties: CloudwatchAlarmAction);
}
export declare class CloudwatchMetricAction {
    MetricName: Value<string>;
    MetricNamespace: Value<string>;
    MetricTimestamp?: Value<string>;
    MetricUnit: Value<string>;
    MetricValue: Value<string>;
    RoleArn: Value<string>;
    constructor(properties: CloudwatchMetricAction);
}
export interface TopicRuleProperties {
    RuleName?: Value<string>;
    TopicRulePayload: TopicRulePayload;
}
export default class TopicRule extends ResourceBase<TopicRuleProperties> {
    static AssetPropertyVariant: typeof AssetPropertyVariant;
    static S3Action: typeof S3Action;
    static SigV4Authorization: typeof SigV4Authorization;
    static SqsAction: typeof SqsAction;
    static PutItemInput: typeof PutItemInput;
    static SnsAction: typeof SnsAction;
    static HttpAction: typeof HttpAction;
    static PutAssetPropertyValueEntry: typeof PutAssetPropertyValueEntry;
    static FirehoseAction: typeof FirehoseAction;
    static LambdaAction: typeof LambdaAction;
    static AssetPropertyTimestamp: typeof AssetPropertyTimestamp;
    static AssetPropertyValue: typeof AssetPropertyValue;
    static ElasticsearchAction: typeof ElasticsearchAction;
    static DynamoDBAction: typeof DynamoDBAction;
    static KinesisAction: typeof KinesisAction;
    static Action: typeof Action;
    static HttpAuthorization: typeof HttpAuthorization;
    static IotAnalyticsAction: typeof IotAnalyticsAction;
    static IotEventsAction: typeof IotEventsAction;
    static HttpActionHeader: typeof HttpActionHeader;
    static IotSiteWiseAction: typeof IotSiteWiseAction;
    static RepublishAction: typeof RepublishAction;
    static StepFunctionsAction: typeof StepFunctionsAction;
    static TopicRulePayload: typeof TopicRulePayload;
    static DynamoDBv2Action: typeof DynamoDBv2Action;
    static CloudwatchAlarmAction: typeof CloudwatchAlarmAction;
    static CloudwatchMetricAction: typeof CloudwatchMetricAction;
    constructor(properties: TopicRuleProperties);
}
