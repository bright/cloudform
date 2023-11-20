"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequiredFieldInfo = exports.ReadOnlyFieldInfo = exports.InvisibleFieldInfo = exports.FieldIdentifier = exports.Field = exports.DefaultFieldValue = exports.Constraints = void 0;
const resource_1 = require("../resource");
class Constraints {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Constraints = Constraints;
class DefaultFieldValue {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DefaultFieldValue = DefaultFieldValue;
class Field {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Field = Field;
class FieldIdentifier {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FieldIdentifier = FieldIdentifier;
class InvisibleFieldInfo {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InvisibleFieldInfo = InvisibleFieldInfo;
class ReadOnlyFieldInfo {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ReadOnlyFieldInfo = ReadOnlyFieldInfo;
class RequiredFieldInfo {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RequiredFieldInfo = RequiredFieldInfo;
class TaskTemplate extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::Connect::TaskTemplate', properties);
    }
}
exports.default = TaskTemplate;
TaskTemplate.Constraints = Constraints;
TaskTemplate.DefaultFieldValue = DefaultFieldValue;
TaskTemplate.Field = Field;
TaskTemplate.FieldIdentifier = FieldIdentifier;
TaskTemplate.InvisibleFieldInfo = InvisibleFieldInfo;
TaskTemplate.ReadOnlyFieldInfo = ReadOnlyFieldInfo;
TaskTemplate.RequiredFieldInfo = RequiredFieldInfo;
