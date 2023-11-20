"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProperty = exports.TopicRulePayload = exports.TimestreamTimestamp = exports.TimestreamDimension = exports.TimestreamAction = exports.Timestamp = exports.StepFunctionsAction = exports.SqsAction = exports.SnsAction = exports.SigV4Authorization = exports.S3Action = exports.RepublishActionHeaders = exports.RepublishAction = exports.PutItemInput = exports.PutAssetPropertyValueEntry = exports.OpenSearchAction = exports.LocationAction = exports.LambdaAction = exports.KinesisAction = exports.KafkaActionHeader = exports.KafkaAction = exports.IotSiteWiseAction = exports.IotEventsAction = exports.IotAnalyticsAction = exports.HttpAuthorization = exports.HttpActionHeader = exports.HttpAction = exports.FirehoseAction = exports.ElasticsearchAction = exports.DynamoDBv2Action = exports.DynamoDBAction = exports.CloudwatchMetricAction = exports.CloudwatchLogsAction = exports.CloudwatchAlarmAction = exports.AssetPropertyVariant = exports.AssetPropertyValue = exports.AssetPropertyTimestamp = exports.Action = void 0;
const resource_1 = require("../resource");
class Action {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Action = Action;
class AssetPropertyTimestamp {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AssetPropertyTimestamp = AssetPropertyTimestamp;
class AssetPropertyValue {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AssetPropertyValue = AssetPropertyValue;
class AssetPropertyVariant {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AssetPropertyVariant = AssetPropertyVariant;
class CloudwatchAlarmAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CloudwatchAlarmAction = CloudwatchAlarmAction;
class CloudwatchLogsAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CloudwatchLogsAction = CloudwatchLogsAction;
class CloudwatchMetricAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CloudwatchMetricAction = CloudwatchMetricAction;
class DynamoDBAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DynamoDBAction = DynamoDBAction;
class DynamoDBv2Action {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DynamoDBv2Action = DynamoDBv2Action;
class ElasticsearchAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ElasticsearchAction = ElasticsearchAction;
class FirehoseAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FirehoseAction = FirehoseAction;
class HttpAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HttpAction = HttpAction;
class HttpActionHeader {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HttpActionHeader = HttpActionHeader;
class HttpAuthorization {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HttpAuthorization = HttpAuthorization;
class IotAnalyticsAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.IotAnalyticsAction = IotAnalyticsAction;
class IotEventsAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.IotEventsAction = IotEventsAction;
class IotSiteWiseAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.IotSiteWiseAction = IotSiteWiseAction;
class KafkaAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KafkaAction = KafkaAction;
class KafkaActionHeader {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KafkaActionHeader = KafkaActionHeader;
class KinesisAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KinesisAction = KinesisAction;
class LambdaAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LambdaAction = LambdaAction;
class LocationAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LocationAction = LocationAction;
class OpenSearchAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OpenSearchAction = OpenSearchAction;
class PutAssetPropertyValueEntry {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PutAssetPropertyValueEntry = PutAssetPropertyValueEntry;
class PutItemInput {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PutItemInput = PutItemInput;
class RepublishAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RepublishAction = RepublishAction;
class RepublishActionHeaders {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RepublishActionHeaders = RepublishActionHeaders;
class S3Action {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3Action = S3Action;
class SigV4Authorization {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SigV4Authorization = SigV4Authorization;
class SnsAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SnsAction = SnsAction;
class SqsAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SqsAction = SqsAction;
class StepFunctionsAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StepFunctionsAction = StepFunctionsAction;
class Timestamp {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Timestamp = Timestamp;
class TimestreamAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TimestreamAction = TimestreamAction;
class TimestreamDimension {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TimestreamDimension = TimestreamDimension;
class TimestreamTimestamp {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TimestreamTimestamp = TimestreamTimestamp;
class TopicRulePayload {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TopicRulePayload = TopicRulePayload;
class UserProperty {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.UserProperty = UserProperty;
class TopicRule extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::IoT::TopicRule', properties);
    }
}
exports.default = TopicRule;
TopicRule.Action = Action;
TopicRule.AssetPropertyTimestamp = AssetPropertyTimestamp;
TopicRule.AssetPropertyValue = AssetPropertyValue;
TopicRule.AssetPropertyVariant = AssetPropertyVariant;
TopicRule.CloudwatchAlarmAction = CloudwatchAlarmAction;
TopicRule.CloudwatchLogsAction = CloudwatchLogsAction;
TopicRule.CloudwatchMetricAction = CloudwatchMetricAction;
TopicRule.DynamoDBAction = DynamoDBAction;
TopicRule.DynamoDBv2Action = DynamoDBv2Action;
TopicRule.ElasticsearchAction = ElasticsearchAction;
TopicRule.FirehoseAction = FirehoseAction;
TopicRule.HttpAction = HttpAction;
TopicRule.HttpActionHeader = HttpActionHeader;
TopicRule.HttpAuthorization = HttpAuthorization;
TopicRule.IotAnalyticsAction = IotAnalyticsAction;
TopicRule.IotEventsAction = IotEventsAction;
TopicRule.IotSiteWiseAction = IotSiteWiseAction;
TopicRule.KafkaAction = KafkaAction;
TopicRule.KafkaActionHeader = KafkaActionHeader;
TopicRule.KinesisAction = KinesisAction;
TopicRule.LambdaAction = LambdaAction;
TopicRule.LocationAction = LocationAction;
TopicRule.OpenSearchAction = OpenSearchAction;
TopicRule.PutAssetPropertyValueEntry = PutAssetPropertyValueEntry;
TopicRule.PutItemInput = PutItemInput;
TopicRule.RepublishAction = RepublishAction;
TopicRule.RepublishActionHeaders = RepublishActionHeaders;
TopicRule.S3Action = S3Action;
TopicRule.SigV4Authorization = SigV4Authorization;
TopicRule.SnsAction = SnsAction;
TopicRule.SqsAction = SqsAction;
TopicRule.StepFunctionsAction = StepFunctionsAction;
TopicRule.Timestamp = Timestamp;
TopicRule.TimestreamAction = TimestreamAction;
TopicRule.TimestreamDimension = TimestreamDimension;
TopicRule.TimestreamTimestamp = TimestreamTimestamp;
TopicRule.TopicRulePayload = TopicRulePayload;
TopicRule.UserProperty = UserProperty;
