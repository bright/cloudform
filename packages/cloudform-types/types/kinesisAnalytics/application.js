"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
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
exports.RecordFormat = exports.RecordColumn = exports.MappingParameters = exports.KinesisStreamsInput = exports.KinesisFirehoseInput = exports.JSONMappingParameters = exports.InputSchema = exports.InputProcessingConfiguration = exports.InputParallelism = exports.InputLambdaProcessor = exports.Input = exports.CSVMappingParameters = void 0;
const resource_1 = require("../resource");
class CSVMappingParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CSVMappingParameters = CSVMappingParameters;
class Input {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Input = Input;
class InputLambdaProcessor {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InputLambdaProcessor = InputLambdaProcessor;
class InputParallelism {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InputParallelism = InputParallelism;
class InputProcessingConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InputProcessingConfiguration = InputProcessingConfiguration;
class InputSchema {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InputSchema = InputSchema;
class JSONMappingParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.JSONMappingParameters = JSONMappingParameters;
class KinesisFirehoseInput {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KinesisFirehoseInput = KinesisFirehoseInput;
class KinesisStreamsInput {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KinesisStreamsInput = KinesisStreamsInput;
class MappingParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MappingParameters = MappingParameters;
class RecordColumn {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RecordColumn = RecordColumn;
class RecordFormat {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RecordFormat = RecordFormat;
class Application extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::KinesisAnalytics::Application', properties);
    }
}
exports.default = Application;
Application.CSVMappingParameters = CSVMappingParameters;
Application.Input = Input;
Application.InputLambdaProcessor = InputLambdaProcessor;
Application.InputParallelism = InputParallelism;
Application.InputProcessingConfiguration = InputProcessingConfiguration;
Application.InputSchema = InputSchema;
Application.JSONMappingParameters = JSONMappingParameters;
Application.KinesisFirehoseInput = KinesisFirehoseInput;
Application.KinesisStreamsInput = KinesisStreamsInput;
Application.MappingParameters = MappingParameters;
Application.RecordColumn = RecordColumn;
Application.RecordFormat = RecordFormat;
