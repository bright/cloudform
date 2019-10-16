"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class RunCommandParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RunCommandParameters = RunCommandParameters;
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
Rule.RunCommandParameters = RunCommandParameters;
Rule.NetworkConfiguration = NetworkConfiguration;
Rule.RunCommandTarget = RunCommandTarget;
Rule.InputTransformer = InputTransformer;
Rule.SqsParameters = SqsParameters;
Rule.Target = Target;
Rule.KinesisParameters = KinesisParameters;
Rule.EcsParameters = EcsParameters;
Rule.AwsVpcConfiguration = AwsVpcConfiguration;
exports.default = Rule;
