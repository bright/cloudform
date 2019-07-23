"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class S3Action {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3Action = S3Action;
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
class IotAnalyticsAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.IotAnalyticsAction = IotAnalyticsAction;
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
TopicRule.S3Action = S3Action;
TopicRule.SqsAction = SqsAction;
TopicRule.PutItemInput = PutItemInput;
TopicRule.SnsAction = SnsAction;
TopicRule.FirehoseAction = FirehoseAction;
TopicRule.LambdaAction = LambdaAction;
TopicRule.ElasticsearchAction = ElasticsearchAction;
TopicRule.DynamoDBAction = DynamoDBAction;
TopicRule.KinesisAction = KinesisAction;
TopicRule.Action = Action;
TopicRule.IotAnalyticsAction = IotAnalyticsAction;
TopicRule.RepublishAction = RepublishAction;
TopicRule.StepFunctionsAction = StepFunctionsAction;
TopicRule.TopicRulePayload = TopicRulePayload;
TopicRule.DynamoDBv2Action = DynamoDBv2Action;
TopicRule.CloudwatchAlarmAction = CloudwatchAlarmAction;
TopicRule.CloudwatchMetricAction = CloudwatchMetricAction;
exports.default = TopicRule;
