"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class ElasticsearchDestinationConfiguration extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::KinesisFirehose::ElasticsearchDestinationConfiguration', properties, dependsOn);
    }
}
exports.ElasticsearchDestinationConfiguration = ElasticsearchDestinationConfiguration;
class ElasticsearchBufferingHints extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::KinesisFirehose::ElasticsearchBufferingHints', properties, dependsOn);
    }
}
exports.ElasticsearchBufferingHints = ElasticsearchBufferingHints;
class EncryptionConfiguration extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::KinesisFirehose::EncryptionConfiguration', properties, dependsOn);
    }
}
exports.EncryptionConfiguration = EncryptionConfiguration;
class CloudWatchLoggingOptions extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::KinesisFirehose::CloudWatchLoggingOptions', properties, dependsOn);
    }
}
exports.CloudWatchLoggingOptions = CloudWatchLoggingOptions;
class ProcessingConfiguration extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::KinesisFirehose::ProcessingConfiguration', properties, dependsOn);
    }
}
exports.ProcessingConfiguration = ProcessingConfiguration;
class BufferingHints extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::KinesisFirehose::BufferingHints', properties, dependsOn);
    }
}
exports.BufferingHints = BufferingHints;
class KinesisStreamSourceConfiguration extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::KinesisFirehose::KinesisStreamSourceConfiguration', properties, dependsOn);
    }
}
exports.KinesisStreamSourceConfiguration = KinesisStreamSourceConfiguration;
class ProcessorParameter extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::KinesisFirehose::ProcessorParameter', properties, dependsOn);
    }
}
exports.ProcessorParameter = ProcessorParameter;
class Processor extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::KinesisFirehose::Processor', properties, dependsOn);
    }
}
exports.Processor = Processor;
class CopyCommand extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::KinesisFirehose::CopyCommand', properties, dependsOn);
    }
}
exports.CopyCommand = CopyCommand;
class S3DestinationConfiguration extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::KinesisFirehose::S3DestinationConfiguration', properties, dependsOn);
    }
}
exports.S3DestinationConfiguration = S3DestinationConfiguration;
class ElasticsearchRetryOptions extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::KinesisFirehose::ElasticsearchRetryOptions', properties, dependsOn);
    }
}
exports.ElasticsearchRetryOptions = ElasticsearchRetryOptions;
class KMSEncryptionConfig extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::KinesisFirehose::KMSEncryptionConfig', properties, dependsOn);
    }
}
exports.KMSEncryptionConfig = KMSEncryptionConfig;
class ExtendedS3DestinationConfiguration extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::KinesisFirehose::ExtendedS3DestinationConfiguration', properties, dependsOn);
    }
}
exports.ExtendedS3DestinationConfiguration = ExtendedS3DestinationConfiguration;
class RedshiftDestinationConfiguration extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::KinesisFirehose::RedshiftDestinationConfiguration', properties, dependsOn);
    }
}
exports.RedshiftDestinationConfiguration = RedshiftDestinationConfiguration;
class DeliveryStream extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::KinesisFirehose::DeliveryStream', properties, dependsOn);
    }
}
exports.default = DeliveryStream;
