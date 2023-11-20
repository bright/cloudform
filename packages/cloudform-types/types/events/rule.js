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
exports.Target = exports.SqsParameters = exports.SageMakerPipelineParameters = exports.SageMakerPipelineParameter = exports.RunCommandTarget = exports.RunCommandParameters = exports.RetryPolicy = exports.RedshiftDataParameters = exports.PlacementStrategy = exports.PlacementConstraint = exports.NetworkConfiguration = exports.KinesisParameters = exports.InputTransformer = exports.HttpParameters = exports.EcsParameters = exports.DeadLetterConfig = exports.CapacityProviderStrategyItem = exports.BatchRetryStrategy = exports.BatchParameters = exports.BatchArrayProperties = exports.AwsVpcConfiguration = void 0;
const resource_1 = require("../resource");
class AwsVpcConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AwsVpcConfiguration = AwsVpcConfiguration;
class BatchArrayProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BatchArrayProperties = BatchArrayProperties;
class BatchParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BatchParameters = BatchParameters;
class BatchRetryStrategy {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BatchRetryStrategy = BatchRetryStrategy;
class CapacityProviderStrategyItem {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CapacityProviderStrategyItem = CapacityProviderStrategyItem;
class DeadLetterConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DeadLetterConfig = DeadLetterConfig;
class EcsParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EcsParameters = EcsParameters;
class HttpParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HttpParameters = HttpParameters;
class InputTransformer {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InputTransformer = InputTransformer;
class KinesisParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KinesisParameters = KinesisParameters;
class NetworkConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NetworkConfiguration = NetworkConfiguration;
class PlacementConstraint {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PlacementConstraint = PlacementConstraint;
class PlacementStrategy {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PlacementStrategy = PlacementStrategy;
class RedshiftDataParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RedshiftDataParameters = RedshiftDataParameters;
class RetryPolicy {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RetryPolicy = RetryPolicy;
class RunCommandParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RunCommandParameters = RunCommandParameters;
class RunCommandTarget {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RunCommandTarget = RunCommandTarget;
class SageMakerPipelineParameter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SageMakerPipelineParameter = SageMakerPipelineParameter;
class SageMakerPipelineParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SageMakerPipelineParameters = SageMakerPipelineParameters;
class SqsParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SqsParameters = SqsParameters;
class Target {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Target = Target;
class Rule extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::Events::Rule', properties || {});
    }
}
exports.default = Rule;
Rule.AwsVpcConfiguration = AwsVpcConfiguration;
Rule.BatchArrayProperties = BatchArrayProperties;
Rule.BatchParameters = BatchParameters;
Rule.BatchRetryStrategy = BatchRetryStrategy;
Rule.CapacityProviderStrategyItem = CapacityProviderStrategyItem;
Rule.DeadLetterConfig = DeadLetterConfig;
Rule.EcsParameters = EcsParameters;
Rule.HttpParameters = HttpParameters;
Rule.InputTransformer = InputTransformer;
Rule.KinesisParameters = KinesisParameters;
Rule.NetworkConfiguration = NetworkConfiguration;
Rule.PlacementConstraint = PlacementConstraint;
Rule.PlacementStrategy = PlacementStrategy;
Rule.RedshiftDataParameters = RedshiftDataParameters;
Rule.RetryPolicy = RetryPolicy;
Rule.RunCommandParameters = RunCommandParameters;
Rule.RunCommandTarget = RunCommandTarget;
Rule.SageMakerPipelineParameter = SageMakerPipelineParameter;
Rule.SageMakerPipelineParameters = SageMakerPipelineParameters;
Rule.SqsParameters = SqsParameters;
Rule.Target = Target;
