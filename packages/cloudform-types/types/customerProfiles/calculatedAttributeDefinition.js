"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Threshold = exports.Range = exports.Conditions = exports.AttributeItem = exports.AttributeDetails = void 0;
const resource_1 = require("../resource");
class AttributeDetails {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AttributeDetails = AttributeDetails;
class AttributeItem {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AttributeItem = AttributeItem;
class Conditions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Conditions = Conditions;
class Range {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Range = Range;
class Threshold {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Threshold = Threshold;
class CalculatedAttributeDefinition extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::CustomerProfiles::CalculatedAttributeDefinition', properties);
    }
}
exports.default = CalculatedAttributeDefinition;
CalculatedAttributeDefinition.AttributeDetails = AttributeDetails;
CalculatedAttributeDefinition.AttributeItem = AttributeItem;
CalculatedAttributeDefinition.Conditions = Conditions;
CalculatedAttributeDefinition.Range = Range;
CalculatedAttributeDefinition.Threshold = Threshold;
