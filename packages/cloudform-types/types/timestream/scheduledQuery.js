"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimestreamConfiguration = exports.TargetConfiguration = exports.SnsConfiguration = exports.ScheduleConfiguration = exports.S3Configuration = exports.NotificationConfiguration = exports.MultiMeasureMappings = exports.MultiMeasureAttributeMapping = exports.MixedMeasureMapping = exports.ErrorReportConfiguration = exports.DimensionMapping = void 0;
const resource_1 = require("../resource");
class DimensionMapping {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DimensionMapping = DimensionMapping;
class ErrorReportConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ErrorReportConfiguration = ErrorReportConfiguration;
class MixedMeasureMapping {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MixedMeasureMapping = MixedMeasureMapping;
class MultiMeasureAttributeMapping {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MultiMeasureAttributeMapping = MultiMeasureAttributeMapping;
class MultiMeasureMappings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MultiMeasureMappings = MultiMeasureMappings;
class NotificationConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NotificationConfiguration = NotificationConfiguration;
class S3Configuration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3Configuration = S3Configuration;
class ScheduleConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ScheduleConfiguration = ScheduleConfiguration;
class SnsConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SnsConfiguration = SnsConfiguration;
class TargetConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TargetConfiguration = TargetConfiguration;
class TimestreamConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TimestreamConfiguration = TimestreamConfiguration;
class ScheduledQuery extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::Timestream::ScheduledQuery', properties);
    }
}
exports.default = ScheduledQuery;
ScheduledQuery.DimensionMapping = DimensionMapping;
ScheduledQuery.ErrorReportConfiguration = ErrorReportConfiguration;
ScheduledQuery.MixedMeasureMapping = MixedMeasureMapping;
ScheduledQuery.MultiMeasureAttributeMapping = MultiMeasureAttributeMapping;
ScheduledQuery.MultiMeasureMappings = MultiMeasureMappings;
ScheduledQuery.NotificationConfiguration = NotificationConfiguration;
ScheduledQuery.S3Configuration = S3Configuration;
ScheduledQuery.ScheduleConfiguration = ScheduleConfiguration;
ScheduledQuery.SnsConfiguration = SnsConfiguration;
ScheduledQuery.TargetConfiguration = TargetConfiguration;
ScheduledQuery.TimestreamConfiguration = TimestreamConfiguration;
