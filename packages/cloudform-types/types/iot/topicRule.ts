/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class S3Action {
    BucketName!: Value<string>
    Key!: Value<string>
    RoleArn!: Value<string>

    constructor(properties: S3Action) {
        Object.assign(this, properties)
    }
}

export class SqsAction {
    QueueUrl!: Value<string>
    RoleArn!: Value<string>
    UseBase64?: Value<boolean>

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
    MessageFormat?: Value<string>
    RoleArn!: Value<string>
    TargetArn!: Value<string>

    constructor(properties: SnsAction) {
        Object.assign(this, properties)
    }
}

export class FirehoseAction {
    DeliveryStreamName!: Value<string>
    RoleArn!: Value<string>
    Separator?: Value<string>

    constructor(properties: FirehoseAction) {
        Object.assign(this, properties)
    }
}

export class LambdaAction {
    FunctionArn?: Value<string>

    constructor(properties: LambdaAction) {
        Object.assign(this, properties)
    }
}

export class ElasticsearchAction {
    Endpoint!: Value<string>
    Id!: Value<string>
    Index!: Value<string>
    RoleArn!: Value<string>
    Type!: Value<string>

    constructor(properties: ElasticsearchAction) {
        Object.assign(this, properties)
    }
}

export class DynamoDBAction {
    HashKeyField!: Value<string>
    HashKeyType?: Value<string>
    HashKeyValue!: Value<string>
    PayloadField?: Value<string>
    RangeKeyField?: Value<string>
    RangeKeyType?: Value<string>
    RangeKeyValue?: Value<string>
    RoleArn!: Value<string>
    TableName!: Value<string>

    constructor(properties: DynamoDBAction) {
        Object.assign(this, properties)
    }
}

export class KinesisAction {
    PartitionKey?: Value<string>
    RoleArn!: Value<string>
    StreamName!: Value<string>

    constructor(properties: KinesisAction) {
        Object.assign(this, properties)
    }
}

export class Action {
    CloudwatchAlarm?: CloudwatchAlarmAction
    CloudwatchMetric?: CloudwatchMetricAction
    DynamoDB?: DynamoDBAction
    DynamoDBv2?: DynamoDBv2Action
    Elasticsearch?: ElasticsearchAction
    Firehose?: FirehoseAction
    IotAnalytics?: IotAnalyticsAction
    Kinesis?: KinesisAction
    Lambda?: LambdaAction
    Republish?: RepublishAction
    S3?: S3Action
    Sns?: SnsAction
    Sqs?: SqsAction
    StepFunctions?: StepFunctionsAction

    constructor(properties: Action) {
        Object.assign(this, properties)
    }
}

export class IotAnalyticsAction {
    ChannelName!: Value<string>
    RoleArn!: Value<string>

    constructor(properties: IotAnalyticsAction) {
        Object.assign(this, properties)
    }
}

export class RepublishAction {
    RoleArn!: Value<string>
    Topic!: Value<string>

    constructor(properties: RepublishAction) {
        Object.assign(this, properties)
    }
}

export class StepFunctionsAction {
    ExecutionNamePrefix?: Value<string>
    RoleArn!: Value<string>
    StateMachineName!: Value<string>

    constructor(properties: StepFunctionsAction) {
        Object.assign(this, properties)
    }
}

export class TopicRulePayload {
    Actions!: List<Action>
    AwsIotSqlVersion?: Value<string>
    Description?: Value<string>
    ErrorAction?: Action
    RuleDisabled!: Value<boolean>
    Sql!: Value<string>

    constructor(properties: TopicRulePayload) {
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

export class CloudwatchAlarmAction {
    AlarmName!: Value<string>
    RoleArn!: Value<string>
    StateReason!: Value<string>
    StateValue!: Value<string>

    constructor(properties: CloudwatchAlarmAction) {
        Object.assign(this, properties)
    }
}

export class CloudwatchMetricAction {
    MetricName!: Value<string>
    MetricNamespace!: Value<string>
    MetricTimestamp?: Value<string>
    MetricUnit!: Value<string>
    MetricValue!: Value<string>
    RoleArn!: Value<string>

    constructor(properties: CloudwatchMetricAction) {
        Object.assign(this, properties)
    }
}

export interface TopicRuleProperties {
    RuleName?: Value<string>
    TopicRulePayload: TopicRulePayload
}

export default class TopicRule extends ResourceBase<TopicRuleProperties> {
    static S3Action = S3Action
    static SqsAction = SqsAction
    static PutItemInput = PutItemInput
    static SnsAction = SnsAction
    static FirehoseAction = FirehoseAction
    static LambdaAction = LambdaAction
    static ElasticsearchAction = ElasticsearchAction
    static DynamoDBAction = DynamoDBAction
    static KinesisAction = KinesisAction
    static Action = Action
    static IotAnalyticsAction = IotAnalyticsAction
    static RepublishAction = RepublishAction
    static StepFunctionsAction = StepFunctionsAction
    static TopicRulePayload = TopicRulePayload
    static DynamoDBv2Action = DynamoDBv2Action
    static CloudwatchAlarmAction = CloudwatchAlarmAction
    static CloudwatchMetricAction = CloudwatchMetricAction

    constructor(properties: TopicRuleProperties) {
        super('AWS::IoT::TopicRule', properties)
    }
}
