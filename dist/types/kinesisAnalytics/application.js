"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class MappingParameters extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::KinesisAnalytics::MappingParameters', properties, dependsOn);
    }
}
exports.MappingParameters = MappingParameters;
class CSVMappingParameters extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::KinesisAnalytics::CSVMappingParameters', properties, dependsOn);
    }
}
exports.CSVMappingParameters = CSVMappingParameters;
class KinesisStreamsInput extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::KinesisAnalytics::KinesisStreamsInput', properties, dependsOn);
    }
}
exports.KinesisStreamsInput = KinesisStreamsInput;
class Input extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::KinesisAnalytics::Input', properties, dependsOn);
    }
}
exports.Input = Input;
class InputSchema extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::KinesisAnalytics::InputSchema', properties, dependsOn);
    }
}
exports.InputSchema = InputSchema;
class RecordColumn extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::KinesisAnalytics::RecordColumn', properties, dependsOn);
    }
}
exports.RecordColumn = RecordColumn;
class RecordFormat extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::KinesisAnalytics::RecordFormat', properties, dependsOn);
    }
}
exports.RecordFormat = RecordFormat;
class KinesisFirehoseInput extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::KinesisAnalytics::KinesisFirehoseInput', properties, dependsOn);
    }
}
exports.KinesisFirehoseInput = KinesisFirehoseInput;
class InputParallelism extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::KinesisAnalytics::InputParallelism', properties, dependsOn);
    }
}
exports.InputParallelism = InputParallelism;
class InputProcessingConfiguration extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::KinesisAnalytics::InputProcessingConfiguration', properties, dependsOn);
    }
}
exports.InputProcessingConfiguration = InputProcessingConfiguration;
class JSONMappingParameters extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::KinesisAnalytics::JSONMappingParameters', properties, dependsOn);
    }
}
exports.JSONMappingParameters = JSONMappingParameters;
class InputLambdaProcessor extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::KinesisAnalytics::InputLambdaProcessor', properties, dependsOn);
    }
}
exports.InputLambdaProcessor = InputLambdaProcessor;
class Application extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::KinesisAnalytics::Application', properties, dependsOn);
    }
}
exports.default = Application;
