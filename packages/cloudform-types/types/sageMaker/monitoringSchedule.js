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
exports.VpcConfig = exports.StoppingCondition = exports.StatisticsResource = exports.ScheduleConfig = exports.S3Output = exports.NetworkConfig = exports.MonitoringScheduleConfig = exports.MonitoringResources = exports.MonitoringOutputConfig = exports.MonitoringOutput = exports.MonitoringJobDefinition = exports.MonitoringInput = exports.MonitoringExecutionSummary = exports.MonitoringAppSpecification = exports.Json = exports.EndpointInput = exports.DatasetFormat = exports.Csv = exports.ConstraintsResource = exports.ClusterConfig = exports.BatchTransformInput = exports.BaselineConfig = void 0;
const resource_1 = require("../resource");
class BaselineConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BaselineConfig = BaselineConfig;
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
class MonitoringAppSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MonitoringAppSpecification = MonitoringAppSpecification;
class MonitoringExecutionSummary {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MonitoringExecutionSummary = MonitoringExecutionSummary;
class MonitoringInput {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MonitoringInput = MonitoringInput;
class MonitoringJobDefinition {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MonitoringJobDefinition = MonitoringJobDefinition;
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
class MonitoringScheduleConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MonitoringScheduleConfig = MonitoringScheduleConfig;
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
class ScheduleConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ScheduleConfig = ScheduleConfig;
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
class MonitoringSchedule extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::SageMaker::MonitoringSchedule', properties);
    }
}
exports.default = MonitoringSchedule;
MonitoringSchedule.BaselineConfig = BaselineConfig;
MonitoringSchedule.BatchTransformInput = BatchTransformInput;
MonitoringSchedule.ClusterConfig = ClusterConfig;
MonitoringSchedule.ConstraintsResource = ConstraintsResource;
MonitoringSchedule.Csv = Csv;
MonitoringSchedule.DatasetFormat = DatasetFormat;
MonitoringSchedule.EndpointInput = EndpointInput;
MonitoringSchedule.Json = Json;
MonitoringSchedule.MonitoringAppSpecification = MonitoringAppSpecification;
MonitoringSchedule.MonitoringExecutionSummary = MonitoringExecutionSummary;
MonitoringSchedule.MonitoringInput = MonitoringInput;
MonitoringSchedule.MonitoringJobDefinition = MonitoringJobDefinition;
MonitoringSchedule.MonitoringOutput = MonitoringOutput;
MonitoringSchedule.MonitoringOutputConfig = MonitoringOutputConfig;
MonitoringSchedule.MonitoringResources = MonitoringResources;
MonitoringSchedule.MonitoringScheduleConfig = MonitoringScheduleConfig;
MonitoringSchedule.NetworkConfig = NetworkConfig;
MonitoringSchedule.S3Output = S3Output;
MonitoringSchedule.ScheduleConfig = ScheduleConfig;
MonitoringSchedule.StatisticsResource = StatisticsResource;
MonitoringSchedule.StoppingCondition = StoppingCondition;
MonitoringSchedule.VpcConfig = VpcConfig;
