"use strict";
/* Generated from:
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Limits {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Limits = Limits;
class CampaignHook {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CampaignHook = CampaignHook;
class QuietTime {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.QuietTime = QuietTime;
class ApplicationSettings extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::Pinpoint::ApplicationSettings', properties);
    }
}
ApplicationSettings.Limits = Limits;
ApplicationSettings.CampaignHook = CampaignHook;
ApplicationSettings.QuietTime = QuietTime;
exports.default = ApplicationSettings;
