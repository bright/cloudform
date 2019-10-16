"use strict";
/* Generated from:
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class TemplateInner {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TemplateInner = TemplateInner;
class Template extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::SES::Template', properties || {});
    }
}
Template.Template = TemplateInner;
exports.default = Template;
