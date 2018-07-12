"use strict";
/* Generated from:
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class S3ReferenceDataSource {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3ReferenceDataSource = S3ReferenceDataSource;
class MappingParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MappingParameters = MappingParameters;
class JSONMappingParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.JSONMappingParameters = JSONMappingParameters;
class RecordFormat {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RecordFormat = RecordFormat;
class RecordColumn {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RecordColumn = RecordColumn;
class CSVMappingParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CSVMappingParameters = CSVMappingParameters;
class ReferenceSchema {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ReferenceSchema = ReferenceSchema;
class ReferenceDataSource {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ReferenceDataSource = ReferenceDataSource;
class ApplicationReferenceDataSource extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::KinesisAnalytics::ApplicationReferenceDataSource', properties);
    }
}
ApplicationReferenceDataSource.S3ReferenceDataSource = S3ReferenceDataSource;
ApplicationReferenceDataSource.MappingParameters = MappingParameters;
ApplicationReferenceDataSource.JSONMappingParameters = JSONMappingParameters;
ApplicationReferenceDataSource.RecordFormat = RecordFormat;
ApplicationReferenceDataSource.RecordColumn = RecordColumn;
ApplicationReferenceDataSource.CSVMappingParameters = CSVMappingParameters;
ApplicationReferenceDataSource.ReferenceSchema = ReferenceSchema;
ApplicationReferenceDataSource.ReferenceDataSource = ReferenceDataSource;
exports.default = ApplicationReferenceDataSource;
