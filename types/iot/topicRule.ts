/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export interface S3ActionProperties {
    BucketName: Value<string>
    Key: Value<string>
    RoleArn: Value<string>
}

export class S3Action extends ResourceBase {
    constructor(properties: S3ActionProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::IoT::S3Action', properties, dependsOn)
    }
}

export interface SqsActionProperties {
    QueueUrl: Value<string>
    RoleArn: Value<string>
    UseBase64?: Value<boolean>
}

export class SqsAction extends ResourceBase {
    constructor(properties: SqsActionProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::IoT::SqsAction', properties, dependsOn)
    }
}

export interface PutItemInputProperties {
    TableName: Value<string>
}

export class PutItemInput extends ResourceBase {
    constructor(properties: PutItemInputProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::IoT::PutItemInput', properties, dependsOn)
    }
}

export interface RepublishActionProperties {
    RoleArn: Value<string>
    Topic: Value<string>
}

export class RepublishAction extends ResourceBase {
    constructor(properties: RepublishActionProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::IoT::RepublishAction', properties, dependsOn)
    }
}

export interface SnsActionProperties {
    MessageFormat?: Value<string>
    RoleArn: Value<string>
    TargetArn: Value<string>
}

export class SnsAction extends ResourceBase {
    constructor(properties: SnsActionProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::IoT::SnsAction', properties, dependsOn)
    }
}

export interface FirehoseActionProperties {
    DeliveryStreamName: Value<string>
    RoleArn: Value<string>
    Separator?: Value<string>
}

export class FirehoseAction extends ResourceBase {
    constructor(properties: FirehoseActionProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::IoT::FirehoseAction', properties, dependsOn)
    }
}

export interface TopicRulePayloadProperties {
    Actions: List<Action>
    AwsIotSqlVersion?: Value<string>
    Description?: Value<string>
    RuleDisabled: Value<boolean>
    Sql: Value<string>
}

export class TopicRulePayload extends ResourceBase {
    constructor(properties: TopicRulePayloadProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::IoT::TopicRulePayload', properties, dependsOn)
    }
}

export interface LambdaActionProperties {
    FunctionArn?: Value<string>
}

export class LambdaAction extends ResourceBase {
    constructor(properties: LambdaActionProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::IoT::LambdaAction', properties, dependsOn)
    }
}

export interface DynamoDBv2ActionProperties {
    PutItem?: PutItemInput
    RoleArn?: Value<string>
}

export class DynamoDBv2Action extends ResourceBase {
    constructor(properties: DynamoDBv2ActionProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::IoT::DynamoDBv2Action', properties, dependsOn)
    }
}

export interface ElasticsearchActionProperties {
    Endpoint: Value<string>
    Id: Value<string>
    Index: Value<string>
    RoleArn: Value<string>
    Type: Value<string>
}

export class ElasticsearchAction extends ResourceBase {
    constructor(properties: ElasticsearchActionProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::IoT::ElasticsearchAction', properties, dependsOn)
    }
}

export interface DynamoDBActionProperties {
    HashKeyField: Value<string>
    HashKeyType?: Value<string>
    HashKeyValue: Value<string>
    PayloadField?: Value<string>
    RangeKeyField: Value<string>
    RangeKeyType?: Value<string>
    RangeKeyValue: Value<string>
    RoleArn: Value<string>
    TableName: Value<string>
}

export class DynamoDBAction extends ResourceBase {
    constructor(properties: DynamoDBActionProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::IoT::DynamoDBAction', properties, dependsOn)
    }
}

export interface KinesisActionProperties {
    PartitionKey?: Value<string>
    RoleArn: Value<string>
    StreamName: Value<string>
}

export class KinesisAction extends ResourceBase {
    constructor(properties: KinesisActionProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::IoT::KinesisAction', properties, dependsOn)
    }
}

export interface CloudwatchAlarmActionProperties {
    AlarmName: Value<string>
    RoleArn: Value<string>
    StateReason: Value<string>
    StateValue: Value<string>
}

export class CloudwatchAlarmAction extends ResourceBase {
    constructor(properties: CloudwatchAlarmActionProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::IoT::CloudwatchAlarmAction', properties, dependsOn)
    }
}

export interface ActionProperties {
    CloudwatchAlarm?: CloudwatchAlarmAction
    CloudwatchMetric?: CloudwatchMetricAction
    DynamoDB?: DynamoDBAction
    DynamoDBv2?: DynamoDBv2Action
    Elasticsearch?: ElasticsearchAction
    Firehose?: FirehoseAction
    Kinesis?: KinesisAction
    Lambda?: LambdaAction
    Republish?: RepublishAction
    S3?: S3Action
    Sns?: SnsAction
    Sqs?: SqsAction
}

export class Action extends ResourceBase {
    constructor(properties: ActionProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::IoT::Action', properties, dependsOn)
    }
}

export interface CloudwatchMetricActionProperties {
    MetricName: Value<string>
    MetricNamespace: Value<string>
    MetricTimestamp?: Value<string>
    MetricUnit: Value<string>
    MetricValue: Value<string>
    RoleArn: Value<string>
}

export class CloudwatchMetricAction extends ResourceBase {
    constructor(properties: CloudwatchMetricActionProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::IoT::CloudwatchMetricAction', properties, dependsOn)
    }
}

export interface TopicRuleProperties {
    RuleName?: Value<string>
    TopicRulePayload: TopicRulePayload
}

export default class TopicRule extends ResourceBase {
    constructor(properties: TopicRuleProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::IoT::TopicRule', properties, dependsOn)
    }
}
