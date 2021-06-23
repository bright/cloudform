import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AssetPropertyVariant {
    StringValue?: Value<string>;
    DoubleValue?: Value<string>;
    BooleanValue?: Value<string>;
    IntegerValue?: Value<string>;
    constructor(properties: AssetPropertyVariant);
}
export declare class SigV4Authorization {
    ServiceName: Value<string>;
    SigningRegion: Value<string>;
    RoleArn: Value<string>;
    constructor(properties: SigV4Authorization);
}
export declare class SqsAction {
    RoleArn: Value<string>;
    UseBase64?: Value<boolean>;
    QueueUrl: Value<string>;
    constructor(properties: SqsAction);
}
export declare class PutItemInput {
    TableName: Value<string>;
    constructor(properties: PutItemInput);
}
export declare class SnsAction {
    TargetArn: Value<string>;
    MessageFormat?: Value<string>;
    RoleArn: Value<string>;
    constructor(properties: SnsAction);
}
export declare class HttpAction {
    ConfirmationUrl?: Value<string>;
    Headers?: List<HttpActionHeader>;
    Url: Value<string>;
    Auth?: HttpAuthorization;
    constructor(properties: HttpAction);
}
export declare class PutAssetPropertyValueEntry {
    PropertyAlias?: Value<string>;
    PropertyValues: List<AssetPropertyValue>;
    AssetId?: Value<string>;
    EntryId?: Value<string>;
    PropertyId?: Value<string>;
    constructor(properties: PutAssetPropertyValueEntry);
}
export declare class LambdaAction {
    FunctionArn?: Value<string>;
    constructor(properties: LambdaAction);
}
export declare class DynamoDBAction {
    TableName: Value<string>;
    PayloadField?: Value<string>;
    RangeKeyField?: Value<string>;
    HashKeyField: Value<string>;
    RangeKeyValue?: Value<string>;
    RangeKeyType?: Value<string>;
    HashKeyType?: Value<string>;
    HashKeyValue: Value<string>;
    RoleArn: Value<string>;
    constructor(properties: DynamoDBAction);
}
export declare class IotAnalyticsAction {
    RoleArn: Value<string>;
    ChannelName: Value<string>;
    BatchMode?: Value<boolean>;
    constructor(properties: IotAnalyticsAction);
}
export declare class IotEventsAction {
    InputName: Value<string>;
    RoleArn: Value<string>;
    MessageId?: Value<string>;
    BatchMode?: Value<boolean>;
    constructor(properties: IotEventsAction);
}
export declare class KafkaAction {
    DestinationArn: Value<string>;
    Topic: Value<string>;
    Key?: Value<string>;
    Partition?: Value<string>;
    ClientProperties: {
        [key: string]: Value<string>;
    };
    constructor(properties: KafkaAction);
}
export declare class TimestreamAction {
    RoleArn: Value<string>;
    DatabaseName: Value<string>;
    TableName: Value<string>;
    Dimensions: List<TimestreamDimension>;
    Timestamp?: TimestreamTimestamp;
    BatchMode?: Value<boolean>;
    constructor(properties: TimestreamAction);
}
export declare class IotSiteWiseAction {
    RoleArn: Value<string>;
    PutAssetPropertyValueEntries: List<PutAssetPropertyValueEntry>;
    constructor(properties: IotSiteWiseAction);
}
export declare class DynamoDBv2Action {
    PutItem?: PutItemInput;
    RoleArn?: Value<string>;
    constructor(properties: DynamoDBv2Action);
}
export declare class CloudwatchMetricAction {
    MetricName: Value<string>;
    MetricValue: Value<string>;
    MetricNamespace: Value<string>;
    MetricUnit: Value<string>;
    RoleArn: Value<string>;
    MetricTimestamp?: Value<string>;
    constructor(properties: CloudwatchMetricAction);
}
export declare class S3Action {
    BucketName: Value<string>;
    Key: Value<string>;
    RoleArn: Value<string>;
    CannedAcl?: Value<string>;
    constructor(properties: S3Action);
}
export declare class FirehoseAction {
    DeliveryStreamName: Value<string>;
    RoleArn: Value<string>;
    Separator?: Value<string>;
    BatchMode?: Value<boolean>;
    constructor(properties: FirehoseAction);
}
export declare class AssetPropertyTimestamp {
    TimeInSeconds: Value<string>;
    OffsetInNanos?: Value<string>;
    constructor(properties: AssetPropertyTimestamp);
}
export declare class AssetPropertyValue {
    Value: AssetPropertyVariant;
    Timestamp: AssetPropertyTimestamp;
    Quality?: Value<string>;
    constructor(properties: AssetPropertyValue);
}
export declare class ElasticsearchAction {
    Type: Value<string>;
    Index: Value<string>;
    Id: Value<string>;
    Endpoint: Value<string>;
    RoleArn: Value<string>;
    constructor(properties: ElasticsearchAction);
}
export declare class KinesisAction {
    PartitionKey?: Value<string>;
    StreamName: Value<string>;
    RoleArn: Value<string>;
    constructor(properties: KinesisAction);
}
export declare class Action {
    S3?: S3Action;
    CloudwatchAlarm?: CloudwatchAlarmAction;
    CloudwatchLogs?: CloudwatchLogsAction;
    IotEvents?: IotEventsAction;
    Firehose?: FirehoseAction;
    Republish?: RepublishAction;
    StepFunctions?: StepFunctionsAction;
    DynamoDB?: DynamoDBAction;
    Http?: HttpAction;
    DynamoDBv2?: DynamoDBv2Action;
    CloudwatchMetric?: CloudwatchMetricAction;
    IotSiteWise?: IotSiteWiseAction;
    Elasticsearch?: ElasticsearchAction;
    Sqs?: SqsAction;
    Kinesis?: KinesisAction;
    IotAnalytics?: IotAnalyticsAction;
    Sns?: SnsAction;
    Lambda?: LambdaAction;
    Timestream?: TimestreamAction;
    Kafka?: KafkaAction;
    constructor(properties: Action);
}
export declare class HttpAuthorization {
    Sigv4?: SigV4Authorization;
    constructor(properties: HttpAuthorization);
}
export declare class HttpActionHeader {
    Value: Value<string>;
    Key: Value<string>;
    constructor(properties: HttpActionHeader);
}
export declare class RepublishAction {
    Qos?: Value<number>;
    Topic: Value<string>;
    RoleArn: Value<string>;
    constructor(properties: RepublishAction);
}
export declare class StepFunctionsAction {
    ExecutionNamePrefix?: Value<string>;
    StateMachineName: Value<string>;
    RoleArn: Value<string>;
    constructor(properties: StepFunctionsAction);
}
export declare class TopicRulePayload {
    RuleDisabled?: Value<boolean>;
    ErrorAction?: Action;
    Description?: Value<string>;
    AwsIotSqlVersion?: Value<string>;
    Actions: List<Action>;
    Sql: Value<string>;
    constructor(properties: TopicRulePayload);
}
export declare class CloudwatchAlarmAction {
    StateValue: Value<string>;
    AlarmName: Value<string>;
    StateReason: Value<string>;
    RoleArn: Value<string>;
    constructor(properties: CloudwatchAlarmAction);
}
export declare class CloudwatchLogsAction {
    LogGroupName: Value<string>;
    RoleArn: Value<string>;
    constructor(properties: CloudwatchLogsAction);
}
export declare class TimestreamDimension {
    Name: Value<string>;
    Value: Value<string>;
    constructor(properties: TimestreamDimension);
}
export declare class TimestreamTimestamp {
    Value: Value<string>;
    Unit: Value<string>;
    constructor(properties: TimestreamTimestamp);
}
export interface TopicRuleProperties {
    RuleName?: Value<string>;
    TopicRulePayload: TopicRulePayload;
    Tags?: List<ResourceTag>;
}
export default class TopicRule extends ResourceBase<TopicRuleProperties> {
    static AssetPropertyVariant: typeof AssetPropertyVariant;
    static SigV4Authorization: typeof SigV4Authorization;
    static SqsAction: typeof SqsAction;
    static PutItemInput: typeof PutItemInput;
    static SnsAction: typeof SnsAction;
    static HttpAction: typeof HttpAction;
    static PutAssetPropertyValueEntry: typeof PutAssetPropertyValueEntry;
    static LambdaAction: typeof LambdaAction;
    static DynamoDBAction: typeof DynamoDBAction;
    static IotAnalyticsAction: typeof IotAnalyticsAction;
    static IotEventsAction: typeof IotEventsAction;
    static KafkaAction: typeof KafkaAction;
    static TimestreamAction: typeof TimestreamAction;
    static IotSiteWiseAction: typeof IotSiteWiseAction;
    static DynamoDBv2Action: typeof DynamoDBv2Action;
    static CloudwatchMetricAction: typeof CloudwatchMetricAction;
    static S3Action: typeof S3Action;
    static FirehoseAction: typeof FirehoseAction;
    static AssetPropertyTimestamp: typeof AssetPropertyTimestamp;
    static AssetPropertyValue: typeof AssetPropertyValue;
    static ElasticsearchAction: typeof ElasticsearchAction;
    static KinesisAction: typeof KinesisAction;
    static Action: typeof Action;
    static HttpAuthorization: typeof HttpAuthorization;
    static HttpActionHeader: typeof HttpActionHeader;
    static RepublishAction: typeof RepublishAction;
    static StepFunctionsAction: typeof StepFunctionsAction;
    static TopicRulePayload: typeof TopicRulePayload;
    static CloudwatchAlarmAction: typeof CloudwatchAlarmAction;
    static CloudwatchLogsAction: typeof CloudwatchLogsAction;
    static TimestreamDimension: typeof TimestreamDimension;
    static TimestreamTimestamp: typeof TimestreamTimestamp;
    constructor(properties: TopicRuleProperties);
}
