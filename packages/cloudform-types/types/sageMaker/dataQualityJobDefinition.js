"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
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
exports.VpcConfig = exports.StoppingCondition = exports.StatisticsResource = exports.S3Output = exports.NetworkConfig = exports.MonitoringResources = exports.MonitoringOutputConfig = exports.MonitoringOutput = exports.Json = exports.EndpointInput = exports.DatasetFormat = exports.DataQualityJobInput = exports.DataQualityBaselineConfig = exports.DataQualityAppSpecification = exports.Csv = exports.ConstraintsResource = exports.ClusterConfig = exports.BatchTransformInput = void 0;
const resource_1 = require("../resource");
class BatchTransformInput {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BatchTransformInput = BatchTransformInput;
class ClusterConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ClusterConfig = ClusterConfig;
class ConstraintsResource {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ConstraintsResource = ConstraintsResource;
class Csv {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Csv = Csv;
class DataQualityAppSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DataQualityAppSpecification = DataQualityAppSpecification;
class DataQualityBaselineConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DataQualityBaselineConfig = DataQualityBaselineConfig;
class DataQualityJobInput {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DataQualityJobInput = DataQualityJobInput;
class DatasetFormat {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DatasetFormat = DatasetFormat;
class EndpointInput {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EndpointInput = EndpointInput;
class Json {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Json = Json;
class MonitoringOutput {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MonitoringOutput = MonitoringOutput;
class MonitoringOutputConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MonitoringOutputConfig = MonitoringOutputConfig;
class MonitoringResources {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MonitoringResources = MonitoringResources;
class NetworkConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NetworkConfig = NetworkConfig;
class S3Output {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3Output = S3Output;
class StatisticsResource {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StatisticsResource = StatisticsResource;
class StoppingCondition {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StoppingCondition = StoppingCondition;
class VpcConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VpcConfig = VpcConfig;
class DataQualityJobDefinition extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::SageMaker::DataQualityJobDefinition', properties);
    }
}
exports.default = DataQualityJobDefinition;
DataQualityJobDefinition.BatchTransformInput = BatchTransformInput;
DataQualityJobDefinition.ClusterConfig = ClusterConfig;
DataQualityJobDefinition.ConstraintsResource = ConstraintsResource;
DataQualityJobDefinition.Csv = Csv;
DataQualityJobDefinition.DataQualityAppSpecification = DataQualityAppSpecification;
DataQualityJobDefinition.DataQualityBaselineConfig = DataQualityBaselineConfig;
DataQualityJobDefinition.DataQualityJobInput = DataQualityJobInput;
DataQualityJobDefinition.DatasetFormat = DatasetFormat;
DataQualityJobDefinition.EndpointInput = EndpointInput;
DataQualityJobDefinition.Json = Json;
DataQualityJobDefinition.MonitoringOutput = MonitoringOutput;
DataQualityJobDefinition.MonitoringOutputConfig = MonitoringOutputConfig;
DataQualityJobDefinition.MonitoringResources = MonitoringResources;
DataQualityJobDefinition.NetworkConfig = NetworkConfig;
DataQualityJobDefinition.S3Output = S3Output;
DataQualityJobDefinition.StatisticsResource = StatisticsResource;
DataQualityJobDefinition.StoppingCondition = StoppingCondition;
DataQualityJobDefinition.VpcConfig = VpcConfig;
