"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class KinesisFirehoseOutput extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::KinesisAnalytics::KinesisFirehoseOutput', properties, dependsOn);
    }
}
exports.KinesisFirehoseOutput = KinesisFirehoseOutput;
class KinesisStreamsOutput extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::KinesisAnalytics::KinesisStreamsOutput', properties, dependsOn);
    }
}
exports.KinesisStreamsOutput = KinesisStreamsOutput;
class Output extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::KinesisAnalytics::Output', properties, dependsOn);
    }
}
exports.Output = Output;
class DestinationSchema extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::KinesisAnalytics::DestinationSchema', properties, dependsOn);
    }
}
exports.DestinationSchema = DestinationSchema;
class ApplicationOutput extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::KinesisAnalytics::ApplicationOutput', properties, dependsOn);
    }
}
exports.default = ApplicationOutput;
