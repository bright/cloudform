"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class RecordColumn {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RecordColumn = RecordColumn;
class RecordFormat {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RecordFormat = RecordFormat;
class JSONMappingParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.JSONMappingParameters = JSONMappingParameters;
class ReferenceDataSource {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ReferenceDataSource = ReferenceDataSource;
class MappingParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MappingParameters = MappingParameters;
class S3ReferenceDataSource {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3ReferenceDataSource = S3ReferenceDataSource;
class ReferenceSchema {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ReferenceSchema = ReferenceSchema;
class CSVMappingParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CSVMappingParameters = CSVMappingParameters;
class ApplicationReferenceDataSource extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::KinesisAnalyticsV2::ApplicationReferenceDataSource', properties);
    }
}
ApplicationReferenceDataSource.RecordColumn = RecordColumn;
ApplicationReferenceDataSource.RecordFormat = RecordFormat;
ApplicationReferenceDataSource.JSONMappingParameters = JSONMappingParameters;
ApplicationReferenceDataSource.ReferenceDataSource = ReferenceDataSource;
ApplicationReferenceDataSource.MappingParameters = MappingParameters;
ApplicationReferenceDataSource.S3ReferenceDataSource = S3ReferenceDataSource;
ApplicationReferenceDataSource.ReferenceSchema = ReferenceSchema;
ApplicationReferenceDataSource.CSVMappingParameters = CSVMappingParameters;
exports.default = ApplicationReferenceDataSource;
