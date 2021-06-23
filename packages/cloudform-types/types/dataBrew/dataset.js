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
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class FilterExpression {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FilterExpression = FilterExpression;
class PathParameter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PathParameter = PathParameter;
class DatabaseInputDefinition {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DatabaseInputDefinition = DatabaseInputDefinition;
class PathOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PathOptions = PathOptions;
class DatasetParameter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DatasetParameter = DatasetParameter;
class FilesLimit {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FilesLimit = FilesLimit;
class CsvOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CsvOptions = CsvOptions;
class FormatOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FormatOptions = FormatOptions;
class ExcelOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ExcelOptions = ExcelOptions;
class JsonOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.JsonOptions = JsonOptions;
class Input {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Input = Input;
class FilterValue {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FilterValue = FilterValue;
class DataCatalogInputDefinition {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DataCatalogInputDefinition = DataCatalogInputDefinition;
class DatetimeOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DatetimeOptions = DatetimeOptions;
class S3Location {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3Location = S3Location;
class Dataset extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::DataBrew::Dataset', properties);
    }
}
exports.default = Dataset;
Dataset.FilterExpression = FilterExpression;
Dataset.PathParameter = PathParameter;
Dataset.DatabaseInputDefinition = DatabaseInputDefinition;
Dataset.PathOptions = PathOptions;
Dataset.DatasetParameter = DatasetParameter;
Dataset.FilesLimit = FilesLimit;
Dataset.CsvOptions = CsvOptions;
Dataset.FormatOptions = FormatOptions;
Dataset.ExcelOptions = ExcelOptions;
Dataset.JsonOptions = JsonOptions;
Dataset.Input = Input;
Dataset.FilterValue = FilterValue;
Dataset.DataCatalogInputDefinition = DataCatalogInputDefinition;
Dataset.DatetimeOptions = DatetimeOptions;
Dataset.S3Location = S3Location;
