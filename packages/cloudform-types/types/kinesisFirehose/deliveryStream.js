"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0
 */
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
class SplunkDestinationConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SplunkDestinationConfiguration = SplunkDestinationConfiguration;
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
class SplunkRetryOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SplunkRetryOptions = SplunkRetryOptions;
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
DeliveryStream.ElasticsearchDestinationConfiguration = ElasticsearchDestinationConfiguration;
DeliveryStream.ElasticsearchBufferingHints = ElasticsearchBufferingHints;
DeliveryStream.SplunkDestinationConfiguration = SplunkDestinationConfiguration;
DeliveryStream.EncryptionConfiguration = EncryptionConfiguration;
DeliveryStream.CloudWatchLoggingOptions = CloudWatchLoggingOptions;
DeliveryStream.ProcessingConfiguration = ProcessingConfiguration;
DeliveryStream.BufferingHints = BufferingHints;
DeliveryStream.SplunkRetryOptions = SplunkRetryOptions;
DeliveryStream.KinesisStreamSourceConfiguration = KinesisStreamSourceConfiguration;
DeliveryStream.ProcessorParameter = ProcessorParameter;
DeliveryStream.Processor = Processor;
DeliveryStream.CopyCommand = CopyCommand;
DeliveryStream.S3DestinationConfiguration = S3DestinationConfiguration;
DeliveryStream.ElasticsearchRetryOptions = ElasticsearchRetryOptions;
DeliveryStream.KMSEncryptionConfig = KMSEncryptionConfig;
DeliveryStream.ExtendedS3DestinationConfiguration = ExtendedS3DestinationConfiguration;
DeliveryStream.RedshiftDestinationConfiguration = RedshiftDestinationConfiguration;
exports.default = DeliveryStream;
