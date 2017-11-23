import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface S3ActionProperties {
    BucketName: Value<string>;
    Key: Value<string>;
    RoleArn: Value<string>;
}
export declare class S3Action extends ResourceBase {
    constructor(properties: S3ActionProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface SqsActionProperties {
    QueueUrl: Value<string>;
    RoleArn: Value<string>;
    UseBase64?: Value<boolean>;
}
export declare class SqsAction extends ResourceBase {
    constructor(properties: SqsActionProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface PutItemInputProperties {
    TableName: Value<string>;
}
export declare class PutItemInput extends ResourceBase {
    constructor(properties: PutItemInputProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface RepublishActionProperties {
    RoleArn: Value<string>;
    Topic: Value<string>;
}
export declare class RepublishAction extends ResourceBase {
    constructor(properties: RepublishActionProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface SnsActionProperties {
    MessageFormat?: Value<string>;
    RoleArn: Value<string>;
    TargetArn: Value<string>;
}
export declare class SnsAction extends ResourceBase {
    constructor(properties: SnsActionProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface FirehoseActionProperties {
    DeliveryStreamName: Value<string>;
    RoleArn: Value<string>;
    Separator?: Value<string>;
}
export declare class FirehoseAction extends ResourceBase {
    constructor(properties: FirehoseActionProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface TopicRulePayloadProperties {
    Actions: Action[];
    AwsIotSqlVersion?: Value<string>;
    Description?: Value<string>;
    RuleDisabled: Value<boolean>;
    Sql: Value<string>;
}
export declare class TopicRulePayload extends ResourceBase {
    constructor(properties: TopicRulePayloadProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface LambdaActionProperties {
    FunctionArn?: Value<string>;
}
export declare class LambdaAction extends ResourceBase {
    constructor(properties: LambdaActionProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface DynamoDBv2ActionProperties {
    PutItem?: PutItemInput;
    RoleArn?: Value<string>;
}
export declare class DynamoDBv2Action extends ResourceBase {
    constructor(properties: DynamoDBv2ActionProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface ElasticsearchActionProperties {
    Endpoint: Value<string>;
    Id: Value<string>;
    Index: Value<string>;
    RoleArn: Value<string>;
    Type: Value<string>;
}
export declare class ElasticsearchAction extends ResourceBase {
    constructor(properties: ElasticsearchActionProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface DynamoDBActionProperties {
    HashKeyField: Value<string>;
    HashKeyType?: Value<string>;
    HashKeyValue: Value<string>;
    PayloadField?: Value<string>;
    RangeKeyField: Value<string>;
    RangeKeyType?: Value<string>;
    RangeKeyValue: Value<string>;
    RoleArn: Value<string>;
    TableName: Value<string>;
}
export declare class DynamoDBAction extends ResourceBase {
    constructor(properties: DynamoDBActionProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface KinesisActionProperties {
    PartitionKey?: Value<string>;
    RoleArn: Value<string>;
    StreamName: Value<string>;
}
export declare class KinesisAction extends ResourceBase {
    constructor(properties: KinesisActionProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface CloudwatchAlarmActionProperties {
    AlarmName: Value<string>;
    RoleArn: Value<string>;
    StateReason: Value<string>;
    StateValue: Value<string>;
}
export declare class CloudwatchAlarmAction extends ResourceBase {
    constructor(properties: CloudwatchAlarmActionProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface ActionProperties {
    CloudwatchAlarm?: CloudwatchAlarmAction;
    CloudwatchMetric?: CloudwatchMetricAction;
    DynamoDB?: DynamoDBAction;
    DynamoDBv2?: DynamoDBv2Action;
    Elasticsearch?: ElasticsearchAction;
    Firehose?: FirehoseAction;
    Kinesis?: KinesisAction;
    Lambda?: LambdaAction;
    Republish?: RepublishAction;
    S3?: S3Action;
    Sns?: SnsAction;
    Sqs?: SqsAction;
}
export declare class Action extends ResourceBase {
    constructor(properties: ActionProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface CloudwatchMetricActionProperties {
    MetricName: Value<string>;
    MetricNamespace: Value<string>;
    MetricTimestamp?: Value<string>;
    MetricUnit: Value<string>;
    MetricValue: Value<string>;
    RoleArn: Value<string>;
}
export declare class CloudwatchMetricAction extends ResourceBase {
    constructor(properties: CloudwatchMetricActionProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface TopicRuleProperties {
    RuleName?: Value<string>;
    TopicRulePayload: TopicRulePayload;
}
export default class TopicRule extends ResourceBase {
    constructor(properties: TopicRuleProperties, dependsOn?: Value<string> | Value<string>[]);
}
