/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class AssetPropertyVariant {
    StringValue?: Value<string>
    DoubleValue?: Value<string>
    BooleanValue?: Value<string>
    IntegerValue?: Value<string>

    constructor(properties: AssetPropertyVariant) {
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

export class SqsAction {
    RoleArn!: Value<string>
    UseBase64?: Value<boolean>
    QueueUrl!: Value<string>

    constructor(properties: SqsAction) {
        Object.assign(this, properties)
    }
}

export class PutItemInput {
    TableName!: Value<string>

    constructor(properties: PutItemInput) {
        Object.assign(this, properties)
    }
}

export class SnsAction {
    TargetArn!: Value<string>
    MessageFormat?: Value<string>
    RoleArn!: Value<string>

    constructor(properties: SnsAction) {
        Object.assign(this, properties)
    }
}

export class HttpAction {
    ConfirmationUrl?: Value<string>
    Headers?: List<HttpActionHeader>
    Url!: Value<string>
    Auth?: HttpAuthorization

    constructor(properties: HttpAction) {
        Object.assign(this, properties)
    }
}

export class PutAssetPropertyValueEntry {
    PropertyAlias?: Value<string>
    PropertyValues!: List<AssetPropertyValue>
    AssetId?: Value<string>
    EntryId?: Value<string>
    PropertyId?: Value<string>

    constructor(properties: PutAssetPropertyValueEntry) {
        Object.assign(this, properties)
    }
}

export class LambdaAction {
    FunctionArn?: Value<string>

    constructor(properties: LambdaAction) {
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

export class IotAnalyticsAction {
    RoleArn!: Value<string>
    ChannelName!: Value<string>
    BatchMode?: Value<boolean>

    constructor(properties: IotAnalyticsAction) {
        Object.assign(this, properties)
    }
}

export class IotEventsAction {
    InputName!: Value<string>
    RoleArn!: Value<string>
    MessageId?: Value<string>
    BatchMode?: Value<boolean>

    constructor(properties: IotEventsAction) {
        Object.assign(this, properties)
    }
}

export class KafkaAction {
    DestinationArn!: Value<string>
    Topic!: Value<string>
    Key?: Value<string>
    Partition?: Value<string>
    ClientProperties!: {[key: string]: Value<string>}

    constructor(properties: KafkaAction) {
        Object.assign(this, properties)
    }
}

export class TimestreamAction {
    RoleArn!: Value<string>
    DatabaseName!: Value<string>
    TableName!: Value<string>
    Dimensions!: List<TimestreamDimension>
    Timestamp?: TimestreamTimestamp
    BatchMode?: Value<boolean>

    constructor(properties: TimestreamAction) {
        Object.assign(this, properties)
    }
}

export class IotSiteWiseAction {
    RoleArn!: Value<string>
    PutAssetPropertyValueEntries!: List<PutAssetPropertyValueEntry>

    constructor(properties: IotSiteWiseAction) {
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

export class S3Action {
    BucketName!: Value<string>
    Key!: Value<string>
    RoleArn!: Value<string>
    CannedAcl?: Value<string>

    constructor(properties: S3Action) {
        Object.assign(this, properties)
    }
}

export class FirehoseAction {
    DeliveryStreamName!: Value<string>
    RoleArn!: Value<string>
    Separator?: Value<string>
    BatchMode?: Value<boolean>

    constructor(properties: FirehoseAction) {
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
    Value!: AssetPropertyVariant
    Timestamp!: AssetPropertyTimestamp
    Quality?: Value<string>

    constructor(properties: AssetPropertyValue) {
        Object.assign(this, properties)
    }
}

export class ElasticsearchAction {
    Type!: Value<string>
    Index!: Value<string>
    Id!: Value<string>
    Endpoint!: Value<string>
    RoleArn!: Value<string>

    constructor(properties: ElasticsearchAction) {
        Object.assign(this, properties)
    }
}

export class KinesisAction {
    PartitionKey?: Value<string>
    StreamName!: Value<string>
    RoleArn!: Value<string>

    constructor(properties: KinesisAction) {
        Object.assign(this, properties)
    }
}

export class Action {
    S3?: S3Action
    CloudwatchAlarm?: CloudwatchAlarmAction
    CloudwatchLogs?: CloudwatchLogsAction
    IotEvents?: IotEventsAction
    Firehose?: FirehoseAction
    Republish?: RepublishAction
    StepFunctions?: StepFunctionsAction
    DynamoDB?: DynamoDBAction
    Http?: HttpAction
    DynamoDBv2?: DynamoDBv2Action
    CloudwatchMetric?: CloudwatchMetricAction
    IotSiteWise?: IotSiteWiseAction
    Elasticsearch?: ElasticsearchAction
    Sqs?: SqsAction
    Kinesis?: KinesisAction
    IotAnalytics?: IotAnalyticsAction
    Sns?: SnsAction
    Lambda?: LambdaAction
    Timestream?: TimestreamAction
    Kafka?: KafkaAction

    constructor(properties: Action) {
        Object.assign(this, properties)
    }
}

export class HttpAuthorization {
    Sigv4?: SigV4Authorization

    constructor(properties: HttpAuthorization) {
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

export class RepublishAction {
    Qos?: Value<number>
    Topic!: Value<string>
    RoleArn!: Value<string>

    constructor(properties: RepublishAction) {
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

export class CloudwatchAlarmAction {
    StateValue!: Value<string>
    AlarmName!: Value<string>
    StateReason!: Value<string>
    RoleArn!: Value<string>

    constructor(properties: CloudwatchAlarmAction) {
        Object.assign(this, properties)
    }
}

export class CloudwatchLogsAction {
    LogGroupName!: Value<string>
    RoleArn!: Value<string>

    constructor(properties: CloudwatchLogsAction) {
        Object.assign(this, properties)
    }
}

export class TimestreamDimension {
    Name!: Value<string>
    Value!: Value<string>

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

export interface TopicRuleProperties {
    RuleName?: Value<string>
    TopicRulePayload: TopicRulePayload
    Tags?: List<ResourceTag>
}

export default class TopicRule extends ResourceBase<TopicRuleProperties> {
    static AssetPropertyVariant = AssetPropertyVariant
    static SigV4Authorization = SigV4Authorization
    static SqsAction = SqsAction
    static PutItemInput = PutItemInput
    static SnsAction = SnsAction
    static HttpAction = HttpAction
    static PutAssetPropertyValueEntry = PutAssetPropertyValueEntry
    static LambdaAction = LambdaAction
    static DynamoDBAction = DynamoDBAction
    static IotAnalyticsAction = IotAnalyticsAction
    static IotEventsAction = IotEventsAction
    static KafkaAction = KafkaAction
    static TimestreamAction = TimestreamAction
    static IotSiteWiseAction = IotSiteWiseAction
    static DynamoDBv2Action = DynamoDBv2Action
    static CloudwatchMetricAction = CloudwatchMetricAction
    static S3Action = S3Action
    static FirehoseAction = FirehoseAction
    static AssetPropertyTimestamp = AssetPropertyTimestamp
    static AssetPropertyValue = AssetPropertyValue
    static ElasticsearchAction = ElasticsearchAction
    static KinesisAction = KinesisAction
    static Action = Action
    static HttpAuthorization = HttpAuthorization
    static HttpActionHeader = HttpActionHeader
    static RepublishAction = RepublishAction
    static StepFunctionsAction = StepFunctionsAction
    static TopicRulePayload = TopicRulePayload
    static CloudwatchAlarmAction = CloudwatchAlarmAction
    static CloudwatchLogsAction = CloudwatchLogsAction
    static TimestreamDimension = TimestreamDimension
    static TimestreamTimestamp = TimestreamTimestamp

    constructor(properties: TopicRuleProperties) {
        super('AWS::IoT::TopicRule', properties)
    }
}
