"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.VpcConfiguration = exports.TimestampColumn = exports.S3SourceConfig = exports.RedshiftSourceConfig = exports.RDSSourceConfig = exports.MetricSource = exports.MetricSet = exports.Metric = exports.JsonFormatDescriptor = exports.FileFormatDescriptor = exports.CsvFormatDescriptor = exports.CloudwatchConfig = exports.AppFlowConfig = exports.AnomalyDetectorConfig = void 0;
const resource_1 = require("../resource");
class AnomalyDetectorConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AnomalyDetectorConfig = AnomalyDetectorConfig;
class AppFlowConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AppFlowConfig = AppFlowConfig;
class CloudwatchConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CloudwatchConfig = CloudwatchConfig;
class CsvFormatDescriptor {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CsvFormatDescriptor = CsvFormatDescriptor;
class FileFormatDescriptor {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FileFormatDescriptor = FileFormatDescriptor;
class JsonFormatDescriptor {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.JsonFormatDescriptor = JsonFormatDescriptor;
class Metric {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Metric = Metric;
class MetricSet {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MetricSet = MetricSet;
class MetricSource {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MetricSource = MetricSource;
class RDSSourceConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RDSSourceConfig = RDSSourceConfig;
class RedshiftSourceConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RedshiftSourceConfig = RedshiftSourceConfig;
class S3SourceConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3SourceConfig = S3SourceConfig;
class TimestampColumn {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TimestampColumn = TimestampColumn;
class VpcConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VpcConfiguration = VpcConfiguration;
class AnomalyDetector extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::LookoutMetrics::AnomalyDetector', properties);
    }
}
exports.default = AnomalyDetector;
AnomalyDetector.AnomalyDetectorConfig = AnomalyDetectorConfig;
AnomalyDetector.AppFlowConfig = AppFlowConfig;
AnomalyDetector.CloudwatchConfig = CloudwatchConfig;
AnomalyDetector.CsvFormatDescriptor = CsvFormatDescriptor;
AnomalyDetector.FileFormatDescriptor = FileFormatDescriptor;
AnomalyDetector.JsonFormatDescriptor = JsonFormatDescriptor;
AnomalyDetector.Metric = Metric;
AnomalyDetector.MetricSet = MetricSet;
AnomalyDetector.MetricSource = MetricSource;
AnomalyDetector.RDSSourceConfig = RDSSourceConfig;
AnomalyDetector.RedshiftSourceConfig = RedshiftSourceConfig;
AnomalyDetector.S3SourceConfig = S3SourceConfig;
AnomalyDetector.TimestampColumn = TimestampColumn;
AnomalyDetector.VpcConfiguration = VpcConfiguration;
