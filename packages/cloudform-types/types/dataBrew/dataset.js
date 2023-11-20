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
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.S3Location = exports.PathParameter = exports.PathOptions = exports.Metadata = exports.JsonOptions = exports.Input = exports.FormatOptions = exports.FilterValue = exports.FilterExpression = exports.FilesLimit = exports.ExcelOptions = exports.DatetimeOptions = exports.DatasetParameter = exports.DatabaseInputDefinition = exports.DataCatalogInputDefinition = exports.CsvOptions = void 0;
const resource_1 = require("../resource");
class CsvOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CsvOptions = CsvOptions;
class DataCatalogInputDefinition {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DataCatalogInputDefinition = DataCatalogInputDefinition;
class DatabaseInputDefinition {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DatabaseInputDefinition = DatabaseInputDefinition;
class DatasetParameter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DatasetParameter = DatasetParameter;
class DatetimeOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DatetimeOptions = DatetimeOptions;
class ExcelOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ExcelOptions = ExcelOptions;
class FilesLimit {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FilesLimit = FilesLimit;
class FilterExpression {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FilterExpression = FilterExpression;
class FilterValue {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FilterValue = FilterValue;
class FormatOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FormatOptions = FormatOptions;
class Input {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Input = Input;
class JsonOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.JsonOptions = JsonOptions;
class Metadata {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Metadata = Metadata;
class PathOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PathOptions = PathOptions;
class PathParameter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PathParameter = PathParameter;
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
Dataset.CsvOptions = CsvOptions;
Dataset.DataCatalogInputDefinition = DataCatalogInputDefinition;
Dataset.DatabaseInputDefinition = DatabaseInputDefinition;
Dataset.DatasetParameter = DatasetParameter;
Dataset.DatetimeOptions = DatetimeOptions;
Dataset.ExcelOptions = ExcelOptions;
Dataset.FilesLimit = FilesLimit;
Dataset.FilterExpression = FilterExpression;
Dataset.FilterValue = FilterValue;
Dataset.FormatOptions = FormatOptions;
Dataset.Input = Input;
Dataset.JsonOptions = JsonOptions;
Dataset.Metadata = Metadata;
Dataset.PathOptions = PathOptions;
Dataset.PathParameter = PathParameter;
Dataset.S3Location = S3Location;
