"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
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
class BatchRetryStrategy {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BatchRetryStrategy = BatchRetryStrategy;
class HttpParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HttpParameters = HttpParameters;
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
class RunCommandParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RunCommandParameters = RunCommandParameters;
class DeadLetterConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DeadLetterConfig = DeadLetterConfig;
class NetworkConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NetworkConfiguration = NetworkConfiguration;
class RunCommandTarget {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RunCommandTarget = RunCommandTarget;
class InputTransformer {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InputTransformer = InputTransformer;
class SqsParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SqsParameters = SqsParameters;
class RetryPolicy {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RetryPolicy = RetryPolicy;
class Target {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Target = Target;
class KinesisParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KinesisParameters = KinesisParameters;
class RedshiftDataParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RedshiftDataParameters = RedshiftDataParameters;
class EcsParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EcsParameters = EcsParameters;
class AwsVpcConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AwsVpcConfiguration = AwsVpcConfiguration;
class Rule extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::Events::Rule', properties || {});
    }
}
exports.default = Rule;
Rule.BatchRetryStrategy = BatchRetryStrategy;
Rule.HttpParameters = HttpParameters;
Rule.BatchArrayProperties = BatchArrayProperties;
Rule.BatchParameters = BatchParameters;
Rule.RunCommandParameters = RunCommandParameters;
Rule.DeadLetterConfig = DeadLetterConfig;
Rule.NetworkConfiguration = NetworkConfiguration;
Rule.RunCommandTarget = RunCommandTarget;
Rule.InputTransformer = InputTransformer;
Rule.SqsParameters = SqsParameters;
Rule.RetryPolicy = RetryPolicy;
Rule.Target = Target;
Rule.KinesisParameters = KinesisParameters;
Rule.RedshiftDataParameters = RedshiftDataParameters;
Rule.EcsParameters = EcsParameters;
Rule.AwsVpcConfiguration = AwsVpcConfiguration;
