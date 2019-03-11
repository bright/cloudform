"use strict";
/* Generated from:
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class LambdaOutput {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LambdaOutput = LambdaOutput;
class KinesisFirehoseOutput {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KinesisFirehoseOutput = KinesisFirehoseOutput;
class KinesisStreamsOutput {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KinesisStreamsOutput = KinesisStreamsOutput;
class DestinationSchema {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DestinationSchema = DestinationSchema;
class Output {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Output = Output;
class ApplicationOutput extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::KinesisAnalyticsV2::ApplicationOutput', properties);
    }
}
ApplicationOutput.LambdaOutput = LambdaOutput;
ApplicationOutput.KinesisFirehoseOutput = KinesisFirehoseOutput;
ApplicationOutput.KinesisStreamsOutput = KinesisStreamsOutput;
ApplicationOutput.DestinationSchema = DestinationSchema;
ApplicationOutput.Output = Output;
exports.default = ApplicationOutput;
