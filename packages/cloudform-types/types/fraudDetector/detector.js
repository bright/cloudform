"use strict";
/* Generated from:
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rule = exports.Outcome = exports.Model = exports.Label = exports.EventVariable = exports.EventType = exports.EntityType = void 0;
const resource_1 = require("../resource");
class EntityType {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EntityType = EntityType;
class EventType {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EventType = EventType;
class EventVariable {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EventVariable = EventVariable;
class Label {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Label = Label;
class Model {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Model = Model;
class Outcome {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Outcome = Outcome;
class Rule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Rule = Rule;
class Detector extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::FraudDetector::Detector', properties);
    }
}
exports.default = Detector;
Detector.EntityType = EntityType;
Detector.EventType = EventType;
Detector.EventVariable = EventVariable;
Detector.Label = Label;
Detector.Model = Model;
Detector.Outcome = Outcome;
Detector.Rule = Rule;
