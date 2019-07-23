"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
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
class MappingParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MappingParameters = MappingParameters;
class KinesisStreamsInput {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KinesisStreamsInput = KinesisStreamsInput;
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
class KinesisFirehoseInput {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KinesisFirehoseInput = KinesisFirehoseInput;
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
class InputLambdaProcessor {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InputLambdaProcessor = InputLambdaProcessor;
class Application extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::KinesisAnalytics::Application', properties);
    }
}
Application.CSVMappingParameters = CSVMappingParameters;
Application.Input = Input;
Application.InputSchema = InputSchema;
Application.JSONMappingParameters = JSONMappingParameters;
Application.MappingParameters = MappingParameters;
Application.KinesisStreamsInput = KinesisStreamsInput;
Application.RecordColumn = RecordColumn;
Application.RecordFormat = RecordFormat;
Application.KinesisFirehoseInput = KinesisFirehoseInput;
Application.InputParallelism = InputParallelism;
Application.InputProcessingConfiguration = InputProcessingConfiguration;
Application.InputLambdaProcessor = InputLambdaProcessor;
exports.default = Application;
