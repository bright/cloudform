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
exports.VpcConfig = exports.TracingConfig = exports.SnapStartResponse = exports.SnapStart = exports.RuntimeManagementConfig = exports.ImageConfig = exports.FileSystemConfig = exports.EphemeralStorage = exports.Environment = exports.DeadLetterConfig = exports.Code = void 0;
const resource_1 = require("../resource");
class Code {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Code = Code;
class DeadLetterConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DeadLetterConfig = DeadLetterConfig;
class Environment {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Environment = Environment;
class EphemeralStorage {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EphemeralStorage = EphemeralStorage;
class FileSystemConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FileSystemConfig = FileSystemConfig;
class ImageConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ImageConfig = ImageConfig;
class RuntimeManagementConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RuntimeManagementConfig = RuntimeManagementConfig;
class SnapStart {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SnapStart = SnapStart;
class SnapStartResponse {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SnapStartResponse = SnapStartResponse;
class TracingConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TracingConfig = TracingConfig;
class VpcConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VpcConfig = VpcConfig;
class Function extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::Lambda::Function', properties);
    }
}
exports.default = Function;
Function.Code = Code;
Function.DeadLetterConfig = DeadLetterConfig;
Function.Environment = Environment;
Function.EphemeralStorage = EphemeralStorage;
Function.FileSystemConfig = FileSystemConfig;
Function.ImageConfig = ImageConfig;
Function.RuntimeManagementConfig = RuntimeManagementConfig;
Function.SnapStart = SnapStart;
Function.SnapStartResponse = SnapStartResponse;
Function.TracingConfig = TracingConfig;
Function.VpcConfig = VpcConfig;
