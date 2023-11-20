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
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.WriteTreatmentResource = exports.TemplateConfiguration = exports.Template = exports.SetDimension = exports.Schedule = exports.QuietTime = exports.OverrideButtonConfiguration = exports.MetricDimension = exports.MessageConfiguration = exports.Message = exports.Limits = exports.InAppMessageHeaderConfig = exports.InAppMessageContent = exports.InAppMessageButton = exports.InAppMessageBodyConfig = exports.EventDimensions = exports.DefaultButtonConfiguration = exports.CustomDeliveryConfiguration = exports.CampaignSmsMessage = exports.CampaignInAppMessage = exports.CampaignHook = exports.CampaignEventFilter = exports.CampaignEmailMessage = exports.CampaignCustomMessage = exports.AttributeDimension = void 0;
const resource_1 = require("../resource");
class AttributeDimension {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AttributeDimension = AttributeDimension;
class CampaignCustomMessage {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CampaignCustomMessage = CampaignCustomMessage;
class CampaignEmailMessage {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CampaignEmailMessage = CampaignEmailMessage;
class CampaignEventFilter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CampaignEventFilter = CampaignEventFilter;
class CampaignHook {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CampaignHook = CampaignHook;
class CampaignInAppMessage {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CampaignInAppMessage = CampaignInAppMessage;
class CampaignSmsMessage {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CampaignSmsMessage = CampaignSmsMessage;
class CustomDeliveryConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CustomDeliveryConfiguration = CustomDeliveryConfiguration;
class DefaultButtonConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DefaultButtonConfiguration = DefaultButtonConfiguration;
class EventDimensions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EventDimensions = EventDimensions;
class InAppMessageBodyConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InAppMessageBodyConfig = InAppMessageBodyConfig;
class InAppMessageButton {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InAppMessageButton = InAppMessageButton;
class InAppMessageContent {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InAppMessageContent = InAppMessageContent;
class InAppMessageHeaderConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InAppMessageHeaderConfig = InAppMessageHeaderConfig;
class Limits {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Limits = Limits;
class Message {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Message = Message;
class MessageConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MessageConfiguration = MessageConfiguration;
class MetricDimension {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MetricDimension = MetricDimension;
class OverrideButtonConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OverrideButtonConfiguration = OverrideButtonConfiguration;
class QuietTime {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.QuietTime = QuietTime;
class Schedule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Schedule = Schedule;
class SetDimension {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SetDimension = SetDimension;
class Template {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Template = Template;
class TemplateConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TemplateConfiguration = TemplateConfiguration;
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
Campaign.AttributeDimension = AttributeDimension;
Campaign.CampaignCustomMessage = CampaignCustomMessage;
Campaign.CampaignEmailMessage = CampaignEmailMessage;
Campaign.CampaignEventFilter = CampaignEventFilter;
Campaign.CampaignHook = CampaignHook;
Campaign.CampaignInAppMessage = CampaignInAppMessage;
Campaign.CampaignSmsMessage = CampaignSmsMessage;
Campaign.CustomDeliveryConfiguration = CustomDeliveryConfiguration;
Campaign.DefaultButtonConfiguration = DefaultButtonConfiguration;
Campaign.EventDimensions = EventDimensions;
Campaign.InAppMessageBodyConfig = InAppMessageBodyConfig;
Campaign.InAppMessageButton = InAppMessageButton;
Campaign.InAppMessageContent = InAppMessageContent;
Campaign.InAppMessageHeaderConfig = InAppMessageHeaderConfig;
Campaign.Limits = Limits;
Campaign.Message = Message;
Campaign.MessageConfiguration = MessageConfiguration;
Campaign.MetricDimension = MetricDimension;
Campaign.OverrideButtonConfiguration = OverrideButtonConfiguration;
Campaign.QuietTime = QuietTime;
Campaign.Schedule = Schedule;
Campaign.SetDimension = SetDimension;
Campaign.Template = Template;
Campaign.TemplateConfiguration = TemplateConfiguration;
Campaign.WriteTreatmentResource = WriteTreatmentResource;
