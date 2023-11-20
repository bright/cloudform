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
exports.ObjectTypeKey = exports.ObjectTypeField = exports.KeyMap = exports.FieldMap = void 0;
const resource_1 = require("../resource");
class FieldMap {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FieldMap = FieldMap;
class KeyMap {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KeyMap = KeyMap;
class ObjectTypeField {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ObjectTypeField = ObjectTypeField;
class ObjectTypeKey {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ObjectTypeKey = ObjectTypeKey;
class ObjectType extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::CustomerProfiles::ObjectType', properties);
    }
}
exports.default = ObjectType;
ObjectType.FieldMap = FieldMap;
ObjectType.KeyMap = KeyMap;
ObjectType.ObjectTypeField = ObjectTypeField;
ObjectType.ObjectTypeKey = ObjectTypeKey;
