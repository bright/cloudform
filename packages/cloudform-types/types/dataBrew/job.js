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
exports.ValidationConfiguration = exports.StatisticsConfiguration = exports.StatisticOverride = exports.S3TableOutputOptions = exports.S3Location = exports.Recipe = exports.ProfileConfiguration = exports.OutputLocation = exports.OutputFormatOptions = exports.Output = exports.JobSample = exports.EntityDetectorConfiguration = exports.DatabaseTableOutputOptions = exports.DatabaseOutput = exports.DataCatalogOutput = exports.CsvOutputOptions = exports.ColumnStatisticsConfiguration = exports.ColumnSelector = exports.AllowedStatistics = void 0;
const resource_1 = require("../resource");
class AllowedStatistics {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AllowedStatistics = AllowedStatistics;
class ColumnSelector {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ColumnSelector = ColumnSelector;
class ColumnStatisticsConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ColumnStatisticsConfiguration = ColumnStatisticsConfiguration;
class CsvOutputOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CsvOutputOptions = CsvOutputOptions;
class DataCatalogOutput {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DataCatalogOutput = DataCatalogOutput;
class DatabaseOutput {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DatabaseOutput = DatabaseOutput;
class DatabaseTableOutputOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DatabaseTableOutputOptions = DatabaseTableOutputOptions;
class EntityDetectorConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EntityDetectorConfiguration = EntityDetectorConfiguration;
class JobSample {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.JobSample = JobSample;
class Output {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Output = Output;
class OutputFormatOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OutputFormatOptions = OutputFormatOptions;
class OutputLocation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OutputLocation = OutputLocation;
class ProfileConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ProfileConfiguration = ProfileConfiguration;
class Recipe {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Recipe = Recipe;
class S3Location {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3Location = S3Location;
class S3TableOutputOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3TableOutputOptions = S3TableOutputOptions;
class StatisticOverride {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StatisticOverride = StatisticOverride;
class StatisticsConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StatisticsConfiguration = StatisticsConfiguration;
class ValidationConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ValidationConfiguration = ValidationConfiguration;
class Job extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::DataBrew::Job', properties);
    }
}
exports.default = Job;
Job.AllowedStatistics = AllowedStatistics;
Job.ColumnSelector = ColumnSelector;
Job.ColumnStatisticsConfiguration = ColumnStatisticsConfiguration;
Job.CsvOutputOptions = CsvOutputOptions;
Job.DataCatalogOutput = DataCatalogOutput;
Job.DatabaseOutput = DatabaseOutput;
Job.DatabaseTableOutputOptions = DatabaseTableOutputOptions;
Job.EntityDetectorConfiguration = EntityDetectorConfiguration;
Job.JobSample = JobSample;
Job.Output = Output;
Job.OutputFormatOptions = OutputFormatOptions;
Job.OutputLocation = OutputLocation;
Job.ProfileConfiguration = ProfileConfiguration;
Job.Recipe = Recipe;
Job.S3Location = S3Location;
Job.S3TableOutputOptions = S3TableOutputOptions;
Job.StatisticOverride = StatisticOverride;
Job.StatisticsConfiguration = StatisticsConfiguration;
Job.ValidationConfiguration = ValidationConfiguration;
