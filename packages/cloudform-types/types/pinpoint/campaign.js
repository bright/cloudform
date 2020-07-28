"use strict";
/* Generated from:
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class MetricDimension {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MetricDimension = MetricDimension;
class SetDimension {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SetDimension = SetDimension;
class EventDimensions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EventDimensions = EventDimensions;
class Schedule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Schedule = Schedule;
class Limits {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Limits = Limits;
class AttributeDimension {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AttributeDimension = AttributeDimension;
class MessageConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MessageConfiguration = MessageConfiguration;
class QuietTime {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.QuietTime = QuietTime;
class CampaignHook {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CampaignHook = CampaignHook;
class Message {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Message = Message;
class CampaignEventFilter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CampaignEventFilter = CampaignEventFilter;
class CampaignSmsMessage {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CampaignSmsMessage = CampaignSmsMessage;
class CampaignEmailMessage {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CampaignEmailMessage = CampaignEmailMessage;
class WriteTreatmentResource {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.WriteTreatmentResource = WriteTreatmentResource;
class Campaign extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::Pinpoint::Campaign', properties);
    }
}
exports.default = Campaign;
Campaign.MetricDimension = MetricDimension;
Campaign.SetDimension = SetDimension;
Campaign.EventDimensions = EventDimensions;
Campaign.Schedule = Schedule;
Campaign.Limits = Limits;
Campaign.AttributeDimension = AttributeDimension;
Campaign.MessageConfiguration = MessageConfiguration;
Campaign.QuietTime = QuietTime;
Campaign.CampaignHook = CampaignHook;
Campaign.Message = Message;
Campaign.CampaignEventFilter = CampaignEventFilter;
Campaign.CampaignSmsMessage = CampaignSmsMessage;
Campaign.CampaignEmailMessage = CampaignEmailMessage;
Campaign.WriteTreatmentResource = WriteTreatmentResource;
