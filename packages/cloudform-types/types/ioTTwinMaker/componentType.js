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
exports.Status = exports.RelationshipValue = exports.Relationship = exports.PropertyGroup = exports.PropertyDefinition = exports.LambdaFunction = exports.Function = exports.Error = exports.DataValue = exports.DataType = exports.DataConnector = void 0;
const resource_1 = require("../resource");
class DataConnector {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DataConnector = DataConnector;
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
class Error {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Error = Error;
class Function {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Function = Function;
class LambdaFunction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LambdaFunction = LambdaFunction;
class PropertyDefinition {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PropertyDefinition = PropertyDefinition;
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
class ComponentType extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::IoTTwinMaker::ComponentType', properties);
    }
}
exports.default = ComponentType;
ComponentType.DataConnector = DataConnector;
ComponentType.DataType = DataType;
ComponentType.DataValue = DataValue;
ComponentType.Error = Error;
ComponentType.Function = Function;
ComponentType.LambdaFunction = LambdaFunction;
ComponentType.PropertyDefinition = PropertyDefinition;
ComponentType.PropertyGroup = PropertyGroup;
ComponentType.Relationship = Relationship;
ComponentType.RelationshipValue = RelationshipValue;
ComponentType.Status = Status;
