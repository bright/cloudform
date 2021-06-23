"use strict";
/* Generated from:
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class AssetModelCompositeModel {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AssetModelCompositeModel = AssetModelCompositeModel;
class MetricWindow {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MetricWindow = MetricWindow;
class TumblingWindow {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TumblingWindow = TumblingWindow;
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
class VariableValue {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VariableValue = VariableValue;
class Transform {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Transform = Transform;
class AssetModelHierarchy {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AssetModelHierarchy = AssetModelHierarchy;
class Metric {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Metric = Metric;
class AssetModelProperty {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AssetModelProperty = AssetModelProperty;
class PropertyType {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PropertyType = PropertyType;
class AssetModel extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::IoTSiteWise::AssetModel', properties);
    }
}
exports.default = AssetModel;
AssetModel.AssetModelCompositeModel = AssetModelCompositeModel;
AssetModel.MetricWindow = MetricWindow;
AssetModel.TumblingWindow = TumblingWindow;
AssetModel.Attribute = Attribute;
AssetModel.ExpressionVariable = ExpressionVariable;
AssetModel.VariableValue = VariableValue;
AssetModel.Transform = Transform;
AssetModel.AssetModelHierarchy = AssetModelHierarchy;
AssetModel.Metric = Metric;
AssetModel.AssetModelProperty = AssetModelProperty;
AssetModel.PropertyType = PropertyType;
