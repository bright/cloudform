"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.12.0 */
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
class RepublishAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RepublishAction = RepublishAction;
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
class TopicRulePayload {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TopicRulePayload = TopicRulePayload;
class LambdaAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LambdaAction = LambdaAction;
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
class CloudwatchAlarmAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CloudwatchAlarmAction = CloudwatchAlarmAction;
class Action {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Action = Action;
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
