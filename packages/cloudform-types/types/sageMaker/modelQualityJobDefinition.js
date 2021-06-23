"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class ModelQualityJobInput {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ModelQualityJobInput = ModelQualityJobInput;
class MonitoringResources {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MonitoringResources = MonitoringResources;
class EndpointInput {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EndpointInput = EndpointInput;
class NetworkConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NetworkConfig = NetworkConfig;
class VpcConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VpcConfig = VpcConfig;
class ModelQualityAppSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ModelQualityAppSpecification = ModelQualityAppSpecification;
class MonitoringOutput {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MonitoringOutput = MonitoringOutput;
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
class S3Output {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3Output = S3Output;
class MonitoringGroundTruthS3Input {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MonitoringGroundTruthS3Input = MonitoringGroundTruthS3Input;
class ModelQualityBaselineConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ModelQualityBaselineConfig = ModelQualityBaselineConfig;
class StoppingCondition {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StoppingCondition = StoppingCondition;
class MonitoringOutputConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MonitoringOutputConfig = MonitoringOutputConfig;
class ModelQualityJobDefinition extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::SageMaker::ModelQualityJobDefinition', properties);
    }
}
exports.default = ModelQualityJobDefinition;
ModelQualityJobDefinition.ModelQualityJobInput = ModelQualityJobInput;
ModelQualityJobDefinition.MonitoringResources = MonitoringResources;
ModelQualityJobDefinition.EndpointInput = EndpointInput;
ModelQualityJobDefinition.NetworkConfig = NetworkConfig;
ModelQualityJobDefinition.VpcConfig = VpcConfig;
ModelQualityJobDefinition.ModelQualityAppSpecification = ModelQualityAppSpecification;
ModelQualityJobDefinition.MonitoringOutput = MonitoringOutput;
ModelQualityJobDefinition.ClusterConfig = ClusterConfig;
ModelQualityJobDefinition.ConstraintsResource = ConstraintsResource;
ModelQualityJobDefinition.S3Output = S3Output;
ModelQualityJobDefinition.MonitoringGroundTruthS3Input = MonitoringGroundTruthS3Input;
ModelQualityJobDefinition.ModelQualityBaselineConfig = ModelQualityBaselineConfig;
ModelQualityJobDefinition.StoppingCondition = StoppingCondition;
ModelQualityJobDefinition.MonitoringOutputConfig = MonitoringOutputConfig;
