import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Action {
    S3?: S3Action;
    CloudwatchAlarm?: CloudwatchAlarmAction;
    IotEvents?: IotEventsAction;
    Firehose?: FirehoseAction;
    Republish?: RepublishAction;
    Kafka?: KafkaAction;
    StepFunctions?: StepFunctionsAction;
    DynamoDB?: DynamoDBAction;
    Http?: HttpAction;
    OpenSearch?: OpenSearchAction;
    DynamoDBv2?: DynamoDBv2Action;
    CloudwatchMetric?: CloudwatchMetricAction;
    IotSiteWise?: IotSiteWiseAction;
    Elasticsearch?: ElasticsearchAction;
    Sqs?: SqsAction;
    Kinesis?: KinesisAction;
    CloudwatchLogs?: CloudwatchLogsAction;
    Timestream?: TimestreamAction;
    IotAnalytics?: IotAnalyticsAction;
    Sns?: SnsAction;
    Lambda?: LambdaAction;
    Location?: LocationAction;
    constructor(properties: Action);
}
export declare class AssetPropertyTimestamp {
    TimeInSeconds: Value<string>;
    OffsetInNanos?: Value<string>;
    constructor(properties: AssetPropertyTimestamp);
}
export declare class AssetPropertyValue {
    Quality?: Value<string>;
    Value: AssetPropertyVariant;
    Timestamp: AssetPropertyTimestamp;
    constructor(properties: AssetPropertyValue);
}
export declare class AssetPropertyVariant {
    DoubleValue?: Value<string>;
    BooleanValue?: Value<string>;
    IntegerValue?: Value<string>;
    StringValue?: Value<string>;
    constructor(properties: AssetPropertyVariant);
}
export declare class CloudwatchAlarmAction {
    AlarmName: Value<string>;
    StateReason: Value<string>;
    StateValue: Value<string>;
    RoleArn: Value<string>;
    constructor(properties: CloudwatchAlarmAction);
}
export declare class CloudwatchLogsAction {
    BatchMode?: Value<boolean>;
    LogGroupName: Value<string>;
    RoleArn: Value<string>;
    constructor(properties: CloudwatchLogsAction);
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
export declare class DynamoDBv2Action {
    PutItem?: PutItemInput;
    RoleArn?: Value<string>;
    constructor(properties: DynamoDBv2Action);
}
export declare class ElasticsearchAction {
    Type: Value<string>;
    Endpoint: Value<string>;
    Index: Value<string>;
    Id: Value<string>;
    RoleArn: Value<string>;
    constructor(properties: ElasticsearchAction);
}
export declare class FirehoseAction {
    DeliveryStreamName: Value<string>;
    BatchMode?: Value<boolean>;
    RoleArn: Value<string>;
    Separator?: Value<string>;
    constructor(properties: FirehoseAction);
}
export declare class HttpAction {
    Headers?: List<HttpActionHeader>;
    Auth?: HttpAuthorization;
    ConfirmationUrl?: Value<string>;
    Url: Value<string>;
    constructor(properties: HttpAction);
}
export declare class HttpActionHeader {
    Value: Value<string>;
    Key: Value<string>;
    constructor(properties: HttpActionHeader);
}
export declare class HttpAuthorization {
    Sigv4?: SigV4Authorization;
    constructor(properties: HttpAuthorization);
}
export declare class IotAnalyticsAction {
    ChannelName: Value<string>;
    BatchMode?: Value<boolean>;
    RoleArn: Value<string>;
    constructor(properties: IotAnalyticsAction);
}
export declare class IotEventsAction {
    InputName: Value<string>;
    BatchMode?: Value<boolean>;
    RoleArn: Value<string>;
    MessageId?: Value<string>;
    constructor(properties: IotEventsAction);
}
export declare class IotSiteWiseAction {
    PutAssetPropertyValueEntries: List<PutAssetPropertyValueEntry>;
    RoleArn: Value<string>;
    constructor(properties: IotSiteWiseAction);
}
export declare class KafkaAction {
    Partition?: Value<string>;
    ClientProperties: {
        [key: string]: Value<string>;
    };
    Headers?: List<KafkaActionHeader>;
    Topic: Value<string>;
    DestinationArn: Value<string>;
    Key?: Value<string>;
    constructor(properties: KafkaAction);
}
export declare class KafkaActionHeader {
    Value: Value<string>;
    Key: Value<string>;
    constructor(properties: KafkaActionHeader);
}
export declare class KinesisAction {
    StreamName: Value<string>;
    PartitionKey?: Value<string>;
    RoleArn: Value<string>;
    constructor(properties: KinesisAction);
}
export declare class LambdaAction {
    FunctionArn?: Value<string>;
    constructor(properties: LambdaAction);
}
export declare class LocationAction {
    TrackerName: Value<string>;
    DeviceId: Value<string>;
    Latitude: Value<string>;
    Longitude: Value<string>;
    Timestamp?: Timestamp;
    RoleArn: Value<string>;
    constructor(properties: LocationAction);
}
export declare class OpenSearchAction {
    Type: Value<string>;
    Endpoint: Value<string>;
    Index: Value<string>;
    Id: Value<string>;
    RoleArn: Value<string>;
    constructor(properties: OpenSearchAction);
}
export declare class PutAssetPropertyValueEntry {
    PropertyValues: List<AssetPropertyValue>;
    EntryId?: Value<string>;
    PropertyAlias?: Value<string>;
    AssetId?: Value<string>;
    PropertyId?: Value<string>;
    constructor(properties: PutAssetPropertyValueEntry);
}
export declare class PutItemInput {
    TableName: Value<string>;
    constructor(properties: PutItemInput);
}
export declare class RepublishAction {
    Qos?: Value<number>;
    Headers?: RepublishActionHeaders;
    Topic: Value<string>;
    RoleArn: Value<string>;
    constructor(properties: RepublishAction);
}
export declare class RepublishActionHeaders {
    CorrelationData?: Value<string>;
    UserProperties?: List<UserProperty>;
    PayloadFormatIndicator?: Value<string>;
    ContentType?: Value<string>;
    MessageExpiry?: Value<string>;
    ResponseTopic?: Value<string>;
    constructor(properties: RepublishActionHeaders);
}
export declare class S3Action {
    BucketName: Value<string>;
    CannedAcl?: Value<string>;
    Key: Value<string>;
    RoleArn: Value<string>;
    constructor(properties: S3Action);
}
export declare class SigV4Authorization {
    ServiceName: Value<string>;
    SigningRegion: Value<string>;
    RoleArn: Value<string>;
    constructor(properties: SigV4Authorization);
}
export declare class SnsAction {
    MessageFormat?: Value<string>;
    TargetArn: Value<string>;
    RoleArn: Value<string>;
    constructor(properties: SnsAction);
}
export declare class SqsAction {
    UseBase64?: Value<boolean>;
    RoleArn: Value<string>;
    QueueUrl: Value<string>;
    constructor(properties: SqsAction);
}
export declare class StepFunctionsAction {
    ExecutionNamePrefix?: Value<string>;
    StateMachineName: Value<string>;
    RoleArn: Value<string>;
    constructor(properties: StepFunctionsAction);
}
export declare class Timestamp {
    Value: Value<string>;
    Unit?: Value<string>;
    constructor(properties: Timestamp);
}
export declare class TimestreamAction {
    TableName: Value<string>;
    DatabaseName: Value<string>;
    Dimensions: List<TimestreamDimension>;
    Timestamp?: TimestreamTimestamp;
    RoleArn: Value<string>;
    constructor(properties: TimestreamAction);
}
export declare class TimestreamDimension {
    Value: Value<string>;
    Name: Value<string>;
    constructor(properties: TimestreamDimension);
}
export declare class TimestreamTimestamp {
    Value: Value<string>;
    Unit: Value<string>;
    constructor(properties: TimestreamTimestamp);
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
export declare class UserProperty {
    Value: Value<string>;
    Key: Value<string>;
    constructor(properties: UserProperty);
}
export interface TopicRuleProperties {
    TopicRulePayload: TopicRulePayload;
    RuleName?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class TopicRule extends ResourceBase<TopicRuleProperties> {
    static Action: typeof Action;
    static AssetPropertyTimestamp: typeof AssetPropertyTimestamp;
    static AssetPropertyValue: typeof AssetPropertyValue;
    static AssetPropertyVariant: typeof AssetPropertyVariant;
    static CloudwatchAlarmAction: typeof CloudwatchAlarmAction;
    static CloudwatchLogsAction: typeof CloudwatchLogsAction;
    static CloudwatchMetricAction: typeof CloudwatchMetricAction;
    static DynamoDBAction: typeof DynamoDBAction;
    static DynamoDBv2Action: typeof DynamoDBv2Action;
    static ElasticsearchAction: typeof ElasticsearchAction;
    static FirehoseAction: typeof FirehoseAction;
    static HttpAction: typeof HttpAction;
    static HttpActionHeader: typeof HttpActionHeader;
    static HttpAuthorization: typeof HttpAuthorization;
    static IotAnalyticsAction: typeof IotAnalyticsAction;
    static IotEventsAction: typeof IotEventsAction;
    static IotSiteWiseAction: typeof IotSiteWiseAction;
    static KafkaAction: typeof KafkaAction;
    static KafkaActionHeader: typeof KafkaActionHeader;
    static KinesisAction: typeof KinesisAction;
    static LambdaAction: typeof LambdaAction;
    static LocationAction: typeof LocationAction;
    static OpenSearchAction: typeof OpenSearchAction;
    static PutAssetPropertyValueEntry: typeof PutAssetPropertyValueEntry;
    static PutItemInput: typeof PutItemInput;
    static RepublishAction: typeof RepublishAction;
    static RepublishActionHeaders: typeof RepublishActionHeaders;
    static S3Action: typeof S3Action;
    static SigV4Authorization: typeof SigV4Authorization;
    static SnsAction: typeof SnsAction;
    static SqsAction: typeof SqsAction;
    static StepFunctionsAction: typeof StepFunctionsAction;
    static Timestamp: typeof Timestamp;
    static TimestreamAction: typeof TimestreamAction;
    static TimestreamDimension: typeof TimestreamDimension;
    static TimestreamTimestamp: typeof TimestreamTimestamp;
    static TopicRulePayload: typeof TopicRulePayload;
    static UserProperty: typeof UserProperty;
    constructor(properties: TopicRuleProperties);
}
