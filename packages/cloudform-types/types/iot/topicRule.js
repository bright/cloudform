"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class AssetPropertyVariant {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AssetPropertyVariant = AssetPropertyVariant;
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
class SqsAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SqsAction = SqsAction;
class PutItemInput {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PutItemInput = PutItemInput;
class SnsAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SnsAction = SnsAction;
class HttpAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HttpAction = HttpAction;
class PutAssetPropertyValueEntry {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PutAssetPropertyValueEntry = PutAssetPropertyValueEntry;
class FirehoseAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FirehoseAction = FirehoseAction;
class LambdaAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LambdaAction = LambdaAction;
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
class ElasticsearchAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ElasticsearchAction = ElasticsearchAction;
class DynamoDBAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DynamoDBAction = DynamoDBAction;
class KinesisAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KinesisAction = KinesisAction;
class Action {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Action = Action;
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
class HttpActionHeader {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HttpActionHeader = HttpActionHeader;
class IotSiteWiseAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.IotSiteWiseAction = IotSiteWiseAction;
class RepublishAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RepublishAction = RepublishAction;
class StepFunctionsAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StepFunctionsAction = StepFunctionsAction;
class TopicRulePayload {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TopicRulePayload = TopicRulePayload;
class DynamoDBv2Action {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DynamoDBv2Action = DynamoDBv2Action;
class CloudwatchAlarmAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CloudwatchAlarmAction = CloudwatchAlarmAction;
class CloudwatchMetricAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CloudwatchMetricAction = CloudwatchMetricAction;
class TopicRule extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::IoT::TopicRule', properties);
    }
}
exports.default = TopicRule;
TopicRule.AssetPropertyVariant = AssetPropertyVariant;
TopicRule.S3Action = S3Action;
TopicRule.SigV4Authorization = SigV4Authorization;
TopicRule.SqsAction = SqsAction;
TopicRule.PutItemInput = PutItemInput;
TopicRule.SnsAction = SnsAction;
TopicRule.HttpAction = HttpAction;
TopicRule.PutAssetPropertyValueEntry = PutAssetPropertyValueEntry;
TopicRule.FirehoseAction = FirehoseAction;
TopicRule.LambdaAction = LambdaAction;
TopicRule.AssetPropertyTimestamp = AssetPropertyTimestamp;
TopicRule.AssetPropertyValue = AssetPropertyValue;
TopicRule.ElasticsearchAction = ElasticsearchAction;
TopicRule.DynamoDBAction = DynamoDBAction;
TopicRule.KinesisAction = KinesisAction;
TopicRule.Action = Action;
TopicRule.HttpAuthorization = HttpAuthorization;
TopicRule.IotAnalyticsAction = IotAnalyticsAction;
TopicRule.IotEventsAction = IotEventsAction;
TopicRule.HttpActionHeader = HttpActionHeader;
TopicRule.IotSiteWiseAction = IotSiteWiseAction;
TopicRule.RepublishAction = RepublishAction;
TopicRule.StepFunctionsAction = StepFunctionsAction;
TopicRule.TopicRulePayload = TopicRulePayload;
TopicRule.DynamoDBv2Action = DynamoDBv2Action;
TopicRule.CloudwatchAlarmAction = CloudwatchAlarmAction;
TopicRule.CloudwatchMetricAction = CloudwatchMetricAction;
