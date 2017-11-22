"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class S3ReferenceDataSource extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::KinesisAnalytics::S3ReferenceDataSource', properties, dependsOn);
    }
}
exports.S3ReferenceDataSource = S3ReferenceDataSource;
class MappingParameters extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::KinesisAnalytics::MappingParameters', properties, dependsOn);
    }
}
exports.MappingParameters = MappingParameters;
class JSONMappingParameters extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::KinesisAnalytics::JSONMappingParameters', properties, dependsOn);
    }
}
exports.JSONMappingParameters = JSONMappingParameters;
class RecordFormat extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::KinesisAnalytics::RecordFormat', properties, dependsOn);
    }
}
exports.RecordFormat = RecordFormat;
class RecordColumn extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::KinesisAnalytics::RecordColumn', properties, dependsOn);
    }
}
exports.RecordColumn = RecordColumn;
class CSVMappingParameters extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::KinesisAnalytics::CSVMappingParameters', properties, dependsOn);
    }
}
exports.CSVMappingParameters = CSVMappingParameters;
class ReferenceSchema extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::KinesisAnalytics::ReferenceSchema', properties, dependsOn);
    }
}
exports.ReferenceSchema = ReferenceSchema;
class ReferenceDataSource extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::KinesisAnalytics::ReferenceDataSource', properties, dependsOn);
    }
}
exports.ReferenceDataSource = ReferenceDataSource;
class ApplicationReferenceDataSource extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::KinesisAnalytics::ApplicationReferenceDataSource', properties, dependsOn);
    }
}
exports.default = ApplicationReferenceDataSource;
