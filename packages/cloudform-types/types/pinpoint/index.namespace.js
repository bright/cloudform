"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pinpoint = void 0;
const admChannel_1 = require("./admChannel");
const apnsChannel_1 = require("./apnsChannel");
const apnsSandboxChannel_1 = require("./apnsSandboxChannel");
const apnsVoipChannel_1 = require("./apnsVoipChannel");
const apnsVoipSandboxChannel_1 = require("./apnsVoipSandboxChannel");
const app_1 = require("./app");
const applicationSettings_1 = require("./applicationSettings");
const baiduChannel_1 = require("./baiduChannel");
const campaign_1 = require("./campaign");
const emailChannel_1 = require("./emailChannel");
const emailTemplate_1 = require("./emailTemplate");
const eventStream_1 = require("./eventStream");
const gcmChannel_1 = require("./gcmChannel");
const inAppTemplate_1 = require("./inAppTemplate");
const pushTemplate_1 = require("./pushTemplate");
const smsChannel_1 = require("./smsChannel");
const segment_1 = require("./segment");
const smsTemplate_1 = require("./smsTemplate");
const voiceChannel_1 = require("./voiceChannel");
var Pinpoint;
(function (Pinpoint) {
    Pinpoint.ADMChannel = admChannel_1.default;
    Pinpoint.APNSChannel = apnsChannel_1.default;
    Pinpoint.APNSSandboxChannel = apnsSandboxChannel_1.default;
    Pinpoint.APNSVoipChannel = apnsVoipChannel_1.default;
    Pinpoint.APNSVoipSandboxChannel = apnsVoipSandboxChannel_1.default;
    Pinpoint.App = app_1.default;
    Pinpoint.ApplicationSettings = applicationSettings_1.default;
    Pinpoint.BaiduChannel = baiduChannel_1.default;
    Pinpoint.Campaign = campaign_1.default;
    Pinpoint.EmailChannel = emailChannel_1.default;
    Pinpoint.EmailTemplate = emailTemplate_1.default;
    Pinpoint.EventStream = eventStream_1.default;
    Pinpoint.GCMChannel = gcmChannel_1.default;
    Pinpoint.InAppTemplate = inAppTemplate_1.default;
    Pinpoint.PushTemplate = pushTemplate_1.default;
    Pinpoint.SMSChannel = smsChannel_1.default;
    Pinpoint.Segment = segment_1.default;
    Pinpoint.SmsTemplate = smsTemplate_1.default;
    Pinpoint.VoiceChannel = voiceChannel_1.default;
})(Pinpoint = exports.Pinpoint || (exports.Pinpoint = {}));
