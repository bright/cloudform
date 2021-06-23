"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class CustomArtifactConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CustomArtifactConfiguration = CustomArtifactConfiguration;
class S3ContentLocation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3ContentLocation = S3ContentLocation;
class DeployAsApplicationConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DeployAsApplicationConfiguration = DeployAsApplicationConfiguration;
class PropertyGroup {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PropertyGroup = PropertyGroup;
class MappingParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MappingParameters = MappingParameters;
class InputParallelism {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InputParallelism = InputParallelism;
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
class ParallelismConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ParallelismConfiguration = ParallelismConfiguration;
class MonitoringConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MonitoringConfiguration = MonitoringConfiguration;
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
class ApplicationCodeConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ApplicationCodeConfiguration = ApplicationCodeConfiguration;
class ZeppelinApplicationConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ZeppelinApplicationConfiguration = ZeppelinApplicationConfiguration;
class MavenReference {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MavenReference = MavenReference;
class KinesisStreamsInput {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KinesisStreamsInput = KinesisStreamsInput;
class CheckpointConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CheckpointConfiguration = CheckpointConfiguration;
class ZeppelinMonitoringConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ZeppelinMonitoringConfiguration = ZeppelinMonitoringConfiguration;
class S3ContentBaseLocation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3ContentBaseLocation = S3ContentBaseLocation;
class InputLambdaProcessor {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InputLambdaProcessor = InputLambdaProcessor;
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
class RecordFormat {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RecordFormat = RecordFormat;
class GlueDataCatalogConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GlueDataCatalogConfiguration = GlueDataCatalogConfiguration;
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
class ApplicationConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ApplicationConfiguration = ApplicationConfiguration;
class EnvironmentProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EnvironmentProperties = EnvironmentProperties;
class CatalogConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CatalogConfiguration = CatalogConfiguration;
class Application extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::KinesisAnalyticsV2::Application', properties);
    }
}
exports.default = Application;
Application.CustomArtifactConfiguration = CustomArtifactConfiguration;
Application.S3ContentLocation = S3ContentLocation;
Application.DeployAsApplicationConfiguration = DeployAsApplicationConfiguration;
Application.PropertyGroup = PropertyGroup;
Application.MappingParameters = MappingParameters;
Application.InputParallelism = InputParallelism;
Application.FlinkApplicationConfiguration = FlinkApplicationConfiguration;
Application.Input = Input;
Application.ApplicationSnapshotConfiguration = ApplicationSnapshotConfiguration;
Application.KinesisFirehoseInput = KinesisFirehoseInput;
Application.InputSchema = InputSchema;
Application.ParallelismConfiguration = ParallelismConfiguration;
Application.MonitoringConfiguration = MonitoringConfiguration;
Application.SqlApplicationConfiguration = SqlApplicationConfiguration;
Application.InputProcessingConfiguration = InputProcessingConfiguration;
Application.ApplicationCodeConfiguration = ApplicationCodeConfiguration;
Application.ZeppelinApplicationConfiguration = ZeppelinApplicationConfiguration;
Application.MavenReference = MavenReference;
Application.KinesisStreamsInput = KinesisStreamsInput;
Application.CheckpointConfiguration = CheckpointConfiguration;
Application.ZeppelinMonitoringConfiguration = ZeppelinMonitoringConfiguration;
Application.S3ContentBaseLocation = S3ContentBaseLocation;
Application.InputLambdaProcessor = InputLambdaProcessor;
Application.RecordColumn = RecordColumn;
Application.CSVMappingParameters = CSVMappingParameters;
Application.RecordFormat = RecordFormat;
Application.GlueDataCatalogConfiguration = GlueDataCatalogConfiguration;
Application.JSONMappingParameters = JSONMappingParameters;
Application.CodeContent = CodeContent;
Application.ApplicationConfiguration = ApplicationConfiguration;
Application.EnvironmentProperties = EnvironmentProperties;
Application.CatalogConfiguration = CatalogConfiguration;
