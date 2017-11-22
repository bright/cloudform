"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class S3Action extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::IoT::S3Action', properties, dependsOn);
    }
}
exports.S3Action = S3Action;
class SqsAction extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::IoT::SqsAction', properties, dependsOn);
    }
}
exports.SqsAction = SqsAction;
class PutItemInput extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::IoT::PutItemInput', properties, dependsOn);
    }
}
exports.PutItemInput = PutItemInput;
class RepublishAction extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::IoT::RepublishAction', properties, dependsOn);
    }
}
exports.RepublishAction = RepublishAction;
class SnsAction extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::IoT::SnsAction', properties, dependsOn);
    }
}
exports.SnsAction = SnsAction;
class FirehoseAction extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::IoT::FirehoseAction', properties, dependsOn);
    }
}
exports.FirehoseAction = FirehoseAction;
class TopicRulePayload extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::IoT::TopicRulePayload', properties, dependsOn);
    }
}
exports.TopicRulePayload = TopicRulePayload;
class LambdaAction extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::IoT::LambdaAction', properties, dependsOn);
    }
}
exports.LambdaAction = LambdaAction;
class DynamoDBv2Action extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::IoT::DynamoDBv2Action', properties, dependsOn);
    }
}
exports.DynamoDBv2Action = DynamoDBv2Action;
class ElasticsearchAction extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::IoT::ElasticsearchAction', properties, dependsOn);
    }
}
exports.ElasticsearchAction = ElasticsearchAction;
class DynamoDBAction extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::IoT::DynamoDBAction', properties, dependsOn);
    }
}
exports.DynamoDBAction = DynamoDBAction;
class KinesisAction extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::IoT::KinesisAction', properties, dependsOn);
    }
}
exports.KinesisAction = KinesisAction;
class CloudwatchAlarmAction extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::IoT::CloudwatchAlarmAction', properties, dependsOn);
    }
}
exports.CloudwatchAlarmAction = CloudwatchAlarmAction;
class Action extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::IoT::Action', properties, dependsOn);
    }
}
exports.Action = Action;
class CloudwatchMetricAction extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::IoT::CloudwatchMetricAction', properties, dependsOn);
    }
}
exports.CloudwatchMetricAction = CloudwatchMetricAction;
class TopicRule extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::IoT::TopicRule', properties, dependsOn);
    }
}
exports.default = TopicRule;
