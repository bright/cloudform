"use strict";
/* Generated from:
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgressiveDialerConfig = exports.PredictiveDialerConfig = exports.OutboundCallConfig = exports.DialerConfig = exports.AnswerMachineDetectionConfig = exports.AgentlessDialerConfig = void 0;
const resource_1 = require("../resource");
class AgentlessDialerConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AgentlessDialerConfig = AgentlessDialerConfig;
class AnswerMachineDetectionConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AnswerMachineDetectionConfig = AnswerMachineDetectionConfig;
class DialerConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DialerConfig = DialerConfig;
class OutboundCallConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OutboundCallConfig = OutboundCallConfig;
class PredictiveDialerConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PredictiveDialerConfig = PredictiveDialerConfig;
class ProgressiveDialerConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ProgressiveDialerConfig = ProgressiveDialerConfig;
class Campaign extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::ConnectCampaigns::Campaign', properties);
    }
}
exports.default = Campaign;
Campaign.AgentlessDialerConfig = AgentlessDialerConfig;
Campaign.AnswerMachineDetectionConfig = AnswerMachineDetectionConfig;
Campaign.DialerConfig = DialerConfig;
Campaign.OutboundCallConfig = OutboundCallConfig;
Campaign.PredictiveDialerConfig = PredictiveDialerConfig;
Campaign.ProgressiveDialerConfig = ProgressiveDialerConfig;
