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
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class Action {
    S3?: S3Action
    CloudwatchAlarm?: CloudwatchAlarmAction
    IotEvents?: IotEventsAction
    Firehose?: FirehoseAction
    Republish?: RepublishAction
    Kafka?: KafkaAction
    StepFunctions?: StepFunctionsAction
    DynamoDB?: DynamoDBAction
    Http?: HttpAction
    OpenSearch?: OpenSearchAction
    DynamoDBv2?: DynamoDBv2Action
    CloudwatchMetric?: CloudwatchMetricAction
    IotSiteWise?: IotSiteWiseAction
    Elasticsearch?: ElasticsearchAction
    Sqs?: SqsAction
    Kinesis?: KinesisAction
    CloudwatchLogs?: CloudwatchLogsAction
    Timestream?: TimestreamAction
    IotAnalytics?: IotAnalyticsAction
    Sns?: SnsAction
    Lambda?: LambdaAction
    Location?: LocationAction

    constructor(properties: Action) {
        Object.assign(this, properties)
    }
}

export class AssetPropertyTimestamp {
    TimeInSeconds!: Value<string>
    OffsetInNanos?: Value<string>

    constructor(properties: AssetPropertyTimestamp) {
        Object.assign(this, properties)
    }
}

export class AssetPropertyValue {
    Quality?: Value<string>
    Value!: AssetPropertyVariant
    Timestamp!: AssetPropertyTimestamp

    constructor(properties: AssetPropertyValue) {
        Object.assign(this, properties)
    }
}

export class AssetPropertyVariant {
    DoubleValue?: Value<string>
    BooleanValue?: Value<string>
    IntegerValue?: Value<string>
    StringValue?: Value<string>

    constructor(properties: AssetPropertyVariant) {
        Object.assign(this, properties)
    }
}

export class CloudwatchAlarmAction {
    AlarmName!: Value<string>
    StateReason!: Value<string>
    StateValue!: Value<string>
    RoleArn!: Value<string>

    constructor(properties: CloudwatchAlarmAction) {
        Object.assign(this, properties)
    }
}

export class CloudwatchLogsAction {
    BatchMode?: Value<boolean>
    LogGroupName!: Value<string>
    RoleArn!: Value<string>

    constructor(properties: CloudwatchLogsAction) {
        Object.assign(this, properties)
    }
}

export class CloudwatchMetricAction {
    MetricName!: Value<string>
    MetricValue!: Value<string>
    MetricNamespace!: Value<string>
    MetricUnit!: Value<string>
    RoleArn!: Value<string>
    MetricTimestamp?: Value<string>

    constructor(properties: CloudwatchMetricAction) {
        Object.assign(this, properties)
    }
}

export class DynamoDBAction {
    TableName!: Value<string>
    PayloadField?: Value<string>
    RangeKeyField?: Value<string>
    HashKeyField!: Value<string>
    RangeKeyValue?: Value<string>
    RangeKeyType?: Value<string>
    HashKeyType?: Value<string>
    HashKeyValue!: Value<string>
    RoleArn!: Value<string>

    constructor(properties: DynamoDBAction) {
        Object.assign(this, properties)
    }
}

export class DynamoDBv2Action {
    PutItem?: PutItemInput
    RoleArn?: Value<string>

    constructor(properties: DynamoDBv2Action) {
        Object.assign(this, properties)
    }
}

export class ElasticsearchAction {
    Type!: Value<string>
    Endpoint!: Value<string>
    Index!: Value<string>
    Id!: Value<string>
    RoleArn!: Value<string>

    constructor(properties: ElasticsearchAction) {
        Object.assign(this, properties)
    }
}

export class FirehoseAction {
    DeliveryStreamName!: Value<string>
    BatchMode?: Value<boolean>
    RoleArn!: Value<string>
    Separator?: Value<string>

    constructor(properties: FirehoseAction) {
        Object.assign(this, properties)
    }
}

export class HttpAction {
    Headers?: List<HttpActionHeader>
    Auth?: HttpAuthorization
    ConfirmationUrl?: Value<string>
    Url!: Value<string>

    constructor(properties: HttpAction) {
        Object.assign(this, properties)
    }
}

export class HttpActionHeader {
    Value!: Value<string>
    Key!: Value<string>

    constructor(properties: HttpActionHeader) {
        Object.assign(this, properties)
    }
}

export class HttpAuthorization {
    Sigv4?: SigV4Authorization

    constructor(properties: HttpAuthorization) {
        Object.assign(this, properties)
    }
}

export class IotAnalyticsAction {
    ChannelName!: Value<string>
    BatchMode?: Value<boolean>
    RoleArn!: Value<string>

    constructor(properties: IotAnalyticsAction) {
        Object.assign(this, properties)
    }
}

export class IotEventsAction {
    InputName!: Value<string>
    BatchMode?: Value<boolean>
    RoleArn!: Value<string>
    MessageId?: Value<string>

    constructor(properties: IotEventsAction) {
        Object.assign(this, properties)
    }
}

export class IotSiteWiseAction {
    PutAssetPropertyValueEntries!: List<PutAssetPropertyValueEntry>
    RoleArn!: Value<string>

    constructor(properties: IotSiteWiseAction) {
        Object.assign(this, properties)
    }
}

export class KafkaAction {
    Partition?: Value<string>
    ClientProperties!: {[key: string]: Value<string>}
    Headers?: List<KafkaActionHeader>
    Topic!: Value<string>
    DestinationArn!: Value<string>
    Key?: Value<string>

    constructor(properties: KafkaAction) {
        Object.assign(this, properties)
    }
}

export class KafkaActionHeader {
    Value!: Value<string>
    Key!: Value<string>

    constructor(properties: KafkaActionHeader) {
        Object.assign(this, properties)
    }
}

export class KinesisAction {
    StreamName!: Value<string>
    PartitionKey?: Value<string>
    RoleArn!: Value<string>

    constructor(properties: KinesisAction) {
        Object.assign(this, properties)
    }
}

export class LambdaAction {
    FunctionArn?: Value<string>

    constructor(properties: LambdaAction) {
        Object.assign(this, properties)
    }
}

export class LocationAction {
    TrackerName!: Value<string>
    DeviceId!: Value<string>
    Latitude!: Value<string>
    Longitude!: Value<string>
    Timestamp?: Timestamp
    RoleArn!: Value<string>

    constructor(properties: LocationAction) {
        Object.assign(this, properties)
    }
}

export class OpenSearchAction {
    Type!: Value<string>
    Endpoint!: Value<string>
    Index!: Value<string>
    Id!: Value<string>
    RoleArn!: Value<string>

    constructor(properties: OpenSearchAction) {
        Object.assign(this, properties)
    }
}

export class PutAssetPropertyValueEntry {
    PropertyValues!: List<AssetPropertyValue>
    EntryId?: Value<string>
    PropertyAlias?: Value<string>
    AssetId?: Value<string>
    PropertyId?: Value<string>

    constructor(properties: PutAssetPropertyValueEntry) {
        Object.assign(this, properties)
    }
}

export class PutItemInput {
    TableName!: Value<string>

    constructor(properties: PutItemInput) {
        Object.assign(this, properties)
    }
}

export class RepublishAction {
    Qos?: Value<number>
    Headers?: RepublishActionHeaders
    Topic!: Value<string>
    RoleArn!: Value<string>

    constructor(properties: RepublishAction) {
        Object.assign(this, properties)
    }
}

export class RepublishActionHeaders {
    CorrelationData?: Value<string>
    UserProperties?: List<UserProperty>
    PayloadFormatIndicator?: Value<string>
    ContentType?: Value<string>
    MessageExpiry?: Value<string>
    ResponseTopic?: Value<string>

    constructor(properties: RepublishActionHeaders) {
        Object.assign(this, properties)
    }
}

export class S3Action {
    BucketName!: Value<string>
    CannedAcl?: Value<string>
    Key!: Value<string>
    RoleArn!: Value<string>

    constructor(properties: S3Action) {
        Object.assign(this, properties)
    }
}

export class SigV4Authorization {
    ServiceName!: Value<string>
    SigningRegion!: Value<string>
    RoleArn!: Value<string>

    constructor(properties: SigV4Authorization) {
        Object.assign(this, properties)
    }
}

export class SnsAction {
    MessageFormat?: Value<string>
    TargetArn!: Value<string>
    RoleArn!: Value<string>

    constructor(properties: SnsAction) {
        Object.assign(this, properties)
    }
}

export class SqsAction {
    UseBase64?: Value<boolean>
    RoleArn!: Value<string>
    QueueUrl!: Value<string>

    constructor(properties: SqsAction) {
        Object.assign(this, properties)
    }
}

export class StepFunctionsAction {
    ExecutionNamePrefix?: Value<string>
    StateMachineName!: Value<string>
    RoleArn!: Value<string>

    constructor(properties: StepFunctionsAction) {
        Object.assign(this, properties)
    }
}

export class Timestamp {
    Value!: Value<string>
    Unit?: Value<string>

    constructor(properties: Timestamp) {
        Object.assign(this, properties)
    }
}

export class TimestreamAction {
    TableName!: Value<string>
    DatabaseName!: Value<string>
    Dimensions!: List<TimestreamDimension>
    Timestamp?: TimestreamTimestamp
    RoleArn!: Value<string>

    constructor(properties: TimestreamAction) {
        Object.assign(this, properties)
    }
}

export class TimestreamDimension {
    Value!: Value<string>
    Name!: Value<string>

    constructor(properties: TimestreamDimension) {
        Object.assign(this, properties)
    }
}

export class TimestreamTimestamp {
    Value!: Value<string>
    Unit!: Value<string>

    constructor(properties: TimestreamTimestamp) {
        Object.assign(this, properties)
    }
}

export class TopicRulePayload {
    RuleDisabled?: Value<boolean>
    ErrorAction?: Action
    Description?: Value<string>
    AwsIotSqlVersion?: Value<string>
    Actions!: List<Action>
    Sql!: Value<string>

    constructor(properties: TopicRulePayload) {
        Object.assign(this, properties)
    }
}

export class UserProperty {
    Value!: Value<string>
    Key!: Value<string>

    constructor(properties: UserProperty) {
        Object.assign(this, properties)
    }
}

export interface TopicRuleProperties {
    TopicRulePayload: TopicRulePayload
    RuleName?: Value<string>
    Tags?: List<ResourceTag>
}

export default class TopicRule extends ResourceBase<TopicRuleProperties> {
    static Action = Action
    static AssetPropertyTimestamp = AssetPropertyTimestamp
    static AssetPropertyValue = AssetPropertyValue
    static AssetPropertyVariant = AssetPropertyVariant
    static CloudwatchAlarmAction = CloudwatchAlarmAction
    static CloudwatchLogsAction = CloudwatchLogsAction
    static CloudwatchMetricAction = CloudwatchMetricAction
    static DynamoDBAction = DynamoDBAction
    static DynamoDBv2Action = DynamoDBv2Action
    static ElasticsearchAction = ElasticsearchAction
    static FirehoseAction = FirehoseAction
    static HttpAction = HttpAction
    static HttpActionHeader = HttpActionHeader
    static HttpAuthorization = HttpAuthorization
    static IotAnalyticsAction = IotAnalyticsAction
    static IotEventsAction = IotEventsAction
    static IotSiteWiseAction = IotSiteWiseAction
    static KafkaAction = KafkaAction
    static KafkaActionHeader = KafkaActionHeader
    static KinesisAction = KinesisAction
    static LambdaAction = LambdaAction
    static LocationAction = LocationAction
    static OpenSearchAction = OpenSearchAction
    static PutAssetPropertyValueEntry = PutAssetPropertyValueEntry
    static PutItemInput = PutItemInput
    static RepublishAction = RepublishAction
    static RepublishActionHeaders = RepublishActionHeaders
    static S3Action = S3Action
    static SigV4Authorization = SigV4Authorization
    static SnsAction = SnsAction
    static SqsAction = SqsAction
    static StepFunctionsAction = StepFunctionsAction
    static Timestamp = Timestamp
    static TimestreamAction = TimestreamAction
    static TimestreamDimension = TimestreamDimension
    static TimestreamTimestamp = TimestreamTimestamp
    static TopicRulePayload = TopicRulePayload
    static UserProperty = UserProperty

    constructor(properties: TopicRuleProperties) {
        super('AWS::IoT::TopicRule', properties)
    }
}
