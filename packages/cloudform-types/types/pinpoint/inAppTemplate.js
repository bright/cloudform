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
exports.OverrideButtonConfiguration = exports.InAppMessageContent = exports.HeaderConfig = exports.DefaultButtonConfiguration = exports.ButtonConfig = exports.BodyConfig = void 0;
const resource_1 = require("../resource");
class BodyConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BodyConfig = BodyConfig;
class ButtonConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ButtonConfig = ButtonConfig;
class DefaultButtonConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DefaultButtonConfiguration = DefaultButtonConfiguration;
class HeaderConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HeaderConfig = HeaderConfig;
class InAppMessageContent {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InAppMessageContent = InAppMessageContent;
class OverrideButtonConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OverrideButtonConfiguration = OverrideButtonConfiguration;
class InAppTemplate extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::Pinpoint::InAppTemplate', properties);
    }
}
exports.default = InAppTemplate;
InAppTemplate.BodyConfig = BodyConfig;
InAppTemplate.ButtonConfig = ButtonConfig;
InAppTemplate.DefaultButtonConfiguration = DefaultButtonConfiguration;
InAppTemplate.HeaderConfig = HeaderConfig;
InAppTemplate.InAppMessageContent = InAppMessageContent;
InAppTemplate.OverrideButtonConfiguration = OverrideButtonConfiguration;
