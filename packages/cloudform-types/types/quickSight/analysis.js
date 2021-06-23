"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class DecimalParameter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DecimalParameter = DecimalParameter;
class ResourcePermission {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ResourcePermission = ResourcePermission;
class AnalysisSourceTemplate {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AnalysisSourceTemplate = AnalysisSourceTemplate;
class Sheet {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Sheet = Sheet;
class AnalysisSourceEntity {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AnalysisSourceEntity = AnalysisSourceEntity;
class DataSetReference {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DataSetReference = DataSetReference;
class DateTimeParameter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DateTimeParameter = DateTimeParameter;
class IntegerParameter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.IntegerParameter = IntegerParameter;
class Parameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Parameters = Parameters;
class StringParameter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StringParameter = StringParameter;
class AnalysisError {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AnalysisError = AnalysisError;
class Analysis extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::QuickSight::Analysis', properties);
    }
}
exports.default = Analysis;
Analysis.DecimalParameter = DecimalParameter;
Analysis.ResourcePermission = ResourcePermission;
Analysis.AnalysisSourceTemplate = AnalysisSourceTemplate;
Analysis.Sheet = Sheet;
Analysis.AnalysisSourceEntity = AnalysisSourceEntity;
Analysis.DataSetReference = DataSetReference;
Analysis.DateTimeParameter = DateTimeParameter;
Analysis.IntegerParameter = IntegerParameter;
Analysis.Parameters = Parameters;
Analysis.StringParameter = StringParameter;
Analysis.AnalysisError = AnalysisError;
