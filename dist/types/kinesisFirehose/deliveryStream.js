"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.13.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class ElasticsearchDestinationConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ElasticsearchDestinationConfiguration = ElasticsearchDestinationConfiguration;
class ElasticsearchBufferingHints {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ElasticsearchBufferingHints = ElasticsearchBufferingHints;
class EncryptionConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EncryptionConfiguration = EncryptionConfiguration;
class CloudWatchLoggingOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CloudWatchLoggingOptions = CloudWatchLoggingOptions;
class ProcessingConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ProcessingConfiguration = ProcessingConfiguration;
class BufferingHints {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BufferingHints = BufferingHints;
class KinesisStreamSourceConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KinesisStreamSourceConfiguration = KinesisStreamSourceConfiguration;
class ProcessorParameter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ProcessorParameter = ProcessorParameter;
class Processor {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Processor = Processor;
class CopyCommand {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CopyCommand = CopyCommand;
class S3DestinationConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3DestinationConfiguration = S3DestinationConfiguration;
class ElasticsearchRetryOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ElasticsearchRetryOptions = ElasticsearchRetryOptions;
class KMSEncryptionConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KMSEncryptionConfig = KMSEncryptionConfig;
class ExtendedS3DestinationConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ExtendedS3DestinationConfiguration = ExtendedS3DestinationConfiguration;
class RedshiftDestinationConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RedshiftDestinationConfiguration = RedshiftDestinationConfiguration;
class DeliveryStream extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::KinesisFirehose::DeliveryStream', properties);
    }
}
exports.default = DeliveryStream;
