"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sqs = exports.Sns = exports.SimpleRule = exports.Payload = exports.Lambda = exports.IotTopicPublish = exports.IotSiteWise = exports.IotEvents = exports.InitializationConfiguration = exports.Firehose = exports.DynamoDBv2 = exports.DynamoDB = exports.AssetPropertyVariant = exports.AssetPropertyValue = exports.AssetPropertyTimestamp = exports.AlarmRule = exports.AlarmEventActions = exports.AlarmCapabilities = exports.AlarmAction = exports.AcknowledgeFlow = void 0;
const resource_1 = require("../resource");
class AcknowledgeFlow {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AcknowledgeFlow = AcknowledgeFlow;
class AlarmAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AlarmAction = AlarmAction;
class AlarmCapabilities {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AlarmCapabilities = AlarmCapabilities;
class AlarmEventActions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AlarmEventActions = AlarmEventActions;
class AlarmRule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AlarmRule = AlarmRule;
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
class DynamoDB {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DynamoDB = DynamoDB;
class DynamoDBv2 {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DynamoDBv2 = DynamoDBv2;
class Firehose {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Firehose = Firehose;
class InitializationConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InitializationConfiguration = InitializationConfiguration;
class IotEvents {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.IotEvents = IotEvents;
class IotSiteWise {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.IotSiteWise = IotSiteWise;
class IotTopicPublish {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.IotTopicPublish = IotTopicPublish;
class Lambda {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Lambda = Lambda;
class Payload {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Payload = Payload;
class SimpleRule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SimpleRule = SimpleRule;
class Sns {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Sns = Sns;
class Sqs {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Sqs = Sqs;
class AlarmModel extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::IoTEvents::AlarmModel', properties);
    }
}
exports.default = AlarmModel;
AlarmModel.AcknowledgeFlow = AcknowledgeFlow;
AlarmModel.AlarmAction = AlarmAction;
AlarmModel.AlarmCapabilities = AlarmCapabilities;
AlarmModel.AlarmEventActions = AlarmEventActions;
AlarmModel.AlarmRule = AlarmRule;
AlarmModel.AssetPropertyTimestamp = AssetPropertyTimestamp;
AlarmModel.AssetPropertyValue = AssetPropertyValue;
AlarmModel.AssetPropertyVariant = AssetPropertyVariant;
AlarmModel.DynamoDB = DynamoDB;
AlarmModel.DynamoDBv2 = DynamoDBv2;
AlarmModel.Firehose = Firehose;
AlarmModel.InitializationConfiguration = InitializationConfiguration;
AlarmModel.IotEvents = IotEvents;
AlarmModel.IotSiteWise = IotSiteWise;
AlarmModel.IotTopicPublish = IotTopicPublish;
AlarmModel.Lambda = Lambda;
AlarmModel.Payload = Payload;
AlarmModel.SimpleRule = SimpleRule;
AlarmModel.Sns = Sns;
AlarmModel.Sqs = Sqs;
