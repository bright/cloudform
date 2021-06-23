"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class KeyMap {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KeyMap = KeyMap;
class FieldMap {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FieldMap = FieldMap;
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
ObjectType.KeyMap = KeyMap;
ObjectType.FieldMap = FieldMap;
ObjectType.ObjectTypeField = ObjectTypeField;
ObjectType.ObjectTypeKey = ObjectTypeKey;
