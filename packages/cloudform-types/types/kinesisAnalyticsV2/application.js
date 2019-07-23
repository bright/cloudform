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
class S3ContentLocation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3ContentLocation = S3ContentLocation;
class PropertyGroup {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PropertyGroup = PropertyGroup;
class KinesisStreamsInput {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KinesisStreamsInput = KinesisStreamsInput;
class MappingParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MappingParameters = MappingParameters;
class CheckpointConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CheckpointConfiguration = CheckpointConfiguration;
class InputParallelism {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InputParallelism = InputParallelism;
class InputLambdaProcessor {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InputLambdaProcessor = InputLambdaProcessor;
class FlinkApplicationConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FlinkApplicationConfiguration = FlinkApplicationConfiguration;
class Input {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Input = Input;
class ApplicationSnapshotConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ApplicationSnapshotConfiguration = ApplicationSnapshotConfiguration;
class KinesisFirehoseInput {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KinesisFirehoseInput = KinesisFirehoseInput;
class InputSchema {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InputSchema = InputSchema;
class RecordColumn {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RecordColumn = RecordColumn;
class ParallelismConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ParallelismConfiguration = ParallelismConfiguration;
class CSVMappingParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CSVMappingParameters = CSVMappingParameters;
class MonitoringConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MonitoringConfiguration = MonitoringConfiguration;
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
class CodeContent {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CodeContent = CodeContent;
class SqlApplicationConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SqlApplicationConfiguration = SqlApplicationConfiguration;
class InputProcessingConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InputProcessingConfiguration = InputProcessingConfiguration;
class ApplicationConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ApplicationConfiguration = ApplicationConfiguration;
class ApplicationCodeConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ApplicationCodeConfiguration = ApplicationCodeConfiguration;
class EnvironmentProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EnvironmentProperties = EnvironmentProperties;
class Application extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::KinesisAnalyticsV2::Application', properties);
    }
}
Application.S3ContentLocation = S3ContentLocation;
Application.PropertyGroup = PropertyGroup;
Application.KinesisStreamsInput = KinesisStreamsInput;
Application.MappingParameters = MappingParameters;
Application.CheckpointConfiguration = CheckpointConfiguration;
Application.InputParallelism = InputParallelism;
Application.InputLambdaProcessor = InputLambdaProcessor;
Application.FlinkApplicationConfiguration = FlinkApplicationConfiguration;
Application.Input = Input;
Application.ApplicationSnapshotConfiguration = ApplicationSnapshotConfiguration;
Application.KinesisFirehoseInput = KinesisFirehoseInput;
Application.InputSchema = InputSchema;
Application.RecordColumn = RecordColumn;
Application.ParallelismConfiguration = ParallelismConfiguration;
Application.CSVMappingParameters = CSVMappingParameters;
Application.MonitoringConfiguration = MonitoringConfiguration;
Application.RecordFormat = RecordFormat;
Application.JSONMappingParameters = JSONMappingParameters;
Application.CodeContent = CodeContent;
Application.SqlApplicationConfiguration = SqlApplicationConfiguration;
Application.InputProcessingConfiguration = InputProcessingConfiguration;
Application.ApplicationConfiguration = ApplicationConfiguration;
Application.ApplicationCodeConfiguration = ApplicationCodeConfiguration;
Application.EnvironmentProperties = EnvironmentProperties;
exports.default = Application;
