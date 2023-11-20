"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Status = exports.RelationshipValue = exports.Relationship = exports.PropertyGroup = exports.Property = exports.Error = exports.Definition = exports.DataValue = exports.DataType = exports.Component = void 0;
const resource_1 = require("../resource");
class Component {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Component = Component;
class DataType {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DataType = DataType;
class DataValue {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DataValue = DataValue;
class Definition {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Definition = Definition;
class Error {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Error = Error;
class Property {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Property = Property;
class PropertyGroup {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PropertyGroup = PropertyGroup;
class Relationship {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Relationship = Relationship;
class RelationshipValue {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RelationshipValue = RelationshipValue;
class Status {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Status = Status;
class Entity extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::IoTTwinMaker::Entity', properties);
    }
}
exports.default = Entity;
Entity.Component = Component;
Entity.DataType = DataType;
Entity.DataValue = DataValue;
Entity.Definition = Definition;
Entity.Error = Error;
Entity.Property = Property;
Entity.PropertyGroup = PropertyGroup;
Entity.Relationship = Relationship;
Entity.RelationshipValue = RelationshipValue;
Entity.Status = Status;
