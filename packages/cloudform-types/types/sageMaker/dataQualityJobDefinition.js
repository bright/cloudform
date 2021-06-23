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
class DataQualityBaselineConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DataQualityBaselineConfig = DataQualityBaselineConfig;
class StatisticsResource {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StatisticsResource = StatisticsResource;
class ConstraintsResource {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ConstraintsResource = ConstraintsResource;
class DataQualityJobInput {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DataQualityJobInput = DataQualityJobInput;
class MonitoringResources {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MonitoringResources = MonitoringResources;
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
class DataQualityAppSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DataQualityAppSpecification = DataQualityAppSpecification;
class ClusterConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ClusterConfig = ClusterConfig;
class VpcConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VpcConfig = VpcConfig;
class S3Output {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3Output = S3Output;
class StoppingCondition {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StoppingCondition = StoppingCondition;
class NetworkConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NetworkConfig = NetworkConfig;
class EndpointInput {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EndpointInput = EndpointInput;
class DataQualityJobDefinition extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::SageMaker::DataQualityJobDefinition', properties);
    }
}
exports.default = DataQualityJobDefinition;
DataQualityJobDefinition.DataQualityBaselineConfig = DataQualityBaselineConfig;
DataQualityJobDefinition.StatisticsResource = StatisticsResource;
DataQualityJobDefinition.ConstraintsResource = ConstraintsResource;
DataQualityJobDefinition.DataQualityJobInput = DataQualityJobInput;
DataQualityJobDefinition.MonitoringResources = MonitoringResources;
DataQualityJobDefinition.MonitoringOutput = MonitoringOutput;
DataQualityJobDefinition.MonitoringOutputConfig = MonitoringOutputConfig;
DataQualityJobDefinition.DataQualityAppSpecification = DataQualityAppSpecification;
DataQualityJobDefinition.ClusterConfig = ClusterConfig;
DataQualityJobDefinition.VpcConfig = VpcConfig;
DataQualityJobDefinition.S3Output = S3Output;
DataQualityJobDefinition.StoppingCondition = StoppingCondition;
DataQualityJobDefinition.NetworkConfig = NetworkConfig;
DataQualityJobDefinition.EndpointInput = EndpointInput;
