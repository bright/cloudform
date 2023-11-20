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
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.VariableValue = exports.TumblingWindow = exports.Transform = exports.PropertyType = exports.MetricWindow = exports.Metric = exports.ExpressionVariable = exports.Attribute = exports.AssetModelProperty = exports.AssetModelHierarchy = exports.AssetModelCompositeModel = void 0;
const resource_1 = require("../resource");
class AssetModelCompositeModel {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AssetModelCompositeModel = AssetModelCompositeModel;
class AssetModelHierarchy {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AssetModelHierarchy = AssetModelHierarchy;
class AssetModelProperty {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AssetModelProperty = AssetModelProperty;
class Attribute {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Attribute = Attribute;
class ExpressionVariable {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ExpressionVariable = ExpressionVariable;
class Metric {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Metric = Metric;
class MetricWindow {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MetricWindow = MetricWindow;
class PropertyType {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PropertyType = PropertyType;
class Transform {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Transform = Transform;
class TumblingWindow {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TumblingWindow = TumblingWindow;
class VariableValue {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VariableValue = VariableValue;
class AssetModel extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::IoTSiteWise::AssetModel', properties);
    }
}
exports.default = AssetModel;
AssetModel.AssetModelCompositeModel = AssetModelCompositeModel;
AssetModel.AssetModelHierarchy = AssetModelHierarchy;
AssetModel.AssetModelProperty = AssetModelProperty;
AssetModel.Attribute = Attribute;
AssetModel.ExpressionVariable = ExpressionVariable;
AssetModel.Metric = Metric;
AssetModel.MetricWindow = MetricWindow;
AssetModel.PropertyType = PropertyType;
AssetModel.Transform = Transform;
AssetModel.TumblingWindow = TumblingWindow;
AssetModel.VariableValue = VariableValue;
