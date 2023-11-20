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
exports.TransitionEvent = exports.State = exports.Sqs = exports.Sns = exports.SetVariable = exports.SetTimer = exports.ResetTimer = exports.Payload = exports.OnInput = exports.OnExit = exports.OnEnter = exports.Lambda = exports.IotTopicPublish = exports.IotSiteWise = exports.IotEvents = exports.Firehose = exports.Event = exports.DynamoDBv2 = exports.DynamoDB = exports.DetectorModelDefinition = exports.ClearTimer = exports.AssetPropertyVariant = exports.AssetPropertyValue = exports.AssetPropertyTimestamp = exports.Action = void 0;
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
class ClearTimer {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ClearTimer = ClearTimer;
class DetectorModelDefinition {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DetectorModelDefinition = DetectorModelDefinition;
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
class Event {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Event = Event;
class Firehose {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Firehose = Firehose;
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
class OnEnter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OnEnter = OnEnter;
class OnExit {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OnExit = OnExit;
class OnInput {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OnInput = OnInput;
class Payload {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Payload = Payload;
class ResetTimer {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ResetTimer = ResetTimer;
class SetTimer {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SetTimer = SetTimer;
class SetVariable {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SetVariable = SetVariable;
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
class State {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.State = State;
class TransitionEvent {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TransitionEvent = TransitionEvent;
class DetectorModel extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::IoTEvents::DetectorModel', properties);
    }
}
exports.default = DetectorModel;
DetectorModel.Action = Action;
DetectorModel.AssetPropertyTimestamp = AssetPropertyTimestamp;
DetectorModel.AssetPropertyValue = AssetPropertyValue;
DetectorModel.AssetPropertyVariant = AssetPropertyVariant;
DetectorModel.ClearTimer = ClearTimer;
DetectorModel.DetectorModelDefinition = DetectorModelDefinition;
DetectorModel.DynamoDB = DynamoDB;
DetectorModel.DynamoDBv2 = DynamoDBv2;
DetectorModel.Event = Event;
DetectorModel.Firehose = Firehose;
DetectorModel.IotEvents = IotEvents;
DetectorModel.IotSiteWise = IotSiteWise;
DetectorModel.IotTopicPublish = IotTopicPublish;
DetectorModel.Lambda = Lambda;
DetectorModel.OnEnter = OnEnter;
DetectorModel.OnExit = OnExit;
DetectorModel.OnInput = OnInput;
DetectorModel.Payload = Payload;
DetectorModel.ResetTimer = ResetTimer;
DetectorModel.SetTimer = SetTimer;
DetectorModel.SetVariable = SetVariable;
DetectorModel.Sns = Sns;
DetectorModel.Sqs = Sqs;
DetectorModel.State = State;
DetectorModel.TransitionEvent = TransitionEvent;
