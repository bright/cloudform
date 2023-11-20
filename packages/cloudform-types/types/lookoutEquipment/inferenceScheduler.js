"use strict";
/* Generated from:
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.S3OutputConfiguration = exports.S3InputConfiguration = exports.InputNameConfiguration = exports.DataOutputConfiguration = exports.DataInputConfiguration = void 0;
const resource_1 = require("../resource");
class DataInputConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DataInputConfiguration = DataInputConfiguration;
class DataOutputConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DataOutputConfiguration = DataOutputConfiguration;
class InputNameConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InputNameConfiguration = InputNameConfiguration;
class S3InputConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3InputConfiguration = S3InputConfiguration;
class S3OutputConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3OutputConfiguration = S3OutputConfiguration;
class InferenceScheduler extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::LookoutEquipment::InferenceScheduler', properties);
    }
}
exports.default = InferenceScheduler;
InferenceScheduler.DataInputConfiguration = DataInputConfiguration;
InferenceScheduler.DataOutputConfiguration = DataOutputConfiguration;
InferenceScheduler.InputNameConfiguration = InputNameConfiguration;
InferenceScheduler.S3InputConfiguration = S3InputConfiguration;
InferenceScheduler.S3OutputConfiguration = S3OutputConfiguration;
