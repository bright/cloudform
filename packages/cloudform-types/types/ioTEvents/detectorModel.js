"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class SetTimer {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SetTimer = SetTimer;
class ResetTimer {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ResetTimer = ResetTimer;
class IotEvents {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.IotEvents = IotEvents;
class TransitionEvent {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TransitionEvent = TransitionEvent;
class OnInput {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OnInput = OnInput;
class SetVariable {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SetVariable = SetVariable;
class Firehose {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Firehose = Firehose;
class ClearTimer {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ClearTimer = ClearTimer;
class OnEnter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OnEnter = OnEnter;
class State {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.State = State;
class Event {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Event = Event;
class Sns {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Sns = Sns;
class OnExit {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OnExit = OnExit;
class Sqs {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Sqs = Sqs;
class DetectorModelDefinition {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DetectorModelDefinition = DetectorModelDefinition;
class IotTopicPublish {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.IotTopicPublish = IotTopicPublish;
class Action {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Action = Action;
class Lambda {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Lambda = Lambda;
class DetectorModel extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::IoTEvents::DetectorModel', properties || {});
    }
}
DetectorModel.SetTimer = SetTimer;
DetectorModel.ResetTimer = ResetTimer;
DetectorModel.IotEvents = IotEvents;
DetectorModel.TransitionEvent = TransitionEvent;
DetectorModel.OnInput = OnInput;
DetectorModel.SetVariable = SetVariable;
DetectorModel.Firehose = Firehose;
DetectorModel.ClearTimer = ClearTimer;
DetectorModel.OnEnter = OnEnter;
DetectorModel.State = State;
DetectorModel.Event = Event;
DetectorModel.Sns = Sns;
DetectorModel.OnExit = OnExit;
DetectorModel.Sqs = Sqs;
DetectorModel.DetectorModelDefinition = DetectorModelDefinition;
DetectorModel.IotTopicPublish = IotTopicPublish;
DetectorModel.Action = Action;
DetectorModel.Lambda = Lambda;
exports.default = DetectorModel;
