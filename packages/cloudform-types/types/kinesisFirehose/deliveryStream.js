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
exports.VpcConfiguration = exports.SplunkRetryOptions = exports.SplunkDestinationConfiguration = exports.Serializer = exports.SchemaConfiguration = exports.S3DestinationConfiguration = exports.RetryOptions = exports.RedshiftRetryOptions = exports.RedshiftDestinationConfiguration = exports.ProcessorParameter = exports.Processor = exports.ProcessingConfiguration = exports.ParquetSerDe = exports.OutputFormatConfiguration = exports.OrcSerDe = exports.OpenXJsonSerDe = exports.MSKSourceConfiguration = exports.KinesisStreamSourceConfiguration = exports.KMSEncryptionConfig = exports.InputFormatConfiguration = exports.HttpEndpointRequestConfiguration = exports.HttpEndpointDestinationConfiguration = exports.HttpEndpointConfiguration = exports.HttpEndpointCommonAttribute = exports.HiveJsonSerDe = exports.ExtendedS3DestinationConfiguration = exports.EncryptionConfiguration = exports.ElasticsearchRetryOptions = exports.ElasticsearchDestinationConfiguration = exports.ElasticsearchBufferingHints = exports.DynamicPartitioningConfiguration = exports.DocumentIdOptions = exports.Deserializer = exports.DeliveryStreamEncryptionConfigurationInput = exports.DataFormatConversionConfiguration = exports.CopyCommand = exports.CloudWatchLoggingOptions = exports.BufferingHints = exports.AuthenticationConfiguration = exports.AmazonopensearchserviceRetryOptions = exports.AmazonopensearchserviceDestinationConfiguration = exports.AmazonopensearchserviceBufferingHints = exports.AmazonOpenSearchServerlessRetryOptions = exports.AmazonOpenSearchServerlessDestinationConfiguration = exports.AmazonOpenSearchServerlessBufferingHints = void 0;
const resource_1 = require("../resource");
class AmazonOpenSearchServerlessBufferingHints {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AmazonOpenSearchServerlessBufferingHints = AmazonOpenSearchServerlessBufferingHints;
class AmazonOpenSearchServerlessDestinationConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AmazonOpenSearchServerlessDestinationConfiguration = AmazonOpenSearchServerlessDestinationConfiguration;
class AmazonOpenSearchServerlessRetryOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AmazonOpenSearchServerlessRetryOptions = AmazonOpenSearchServerlessRetryOptions;
class AmazonopensearchserviceBufferingHints {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AmazonopensearchserviceBufferingHints = AmazonopensearchserviceBufferingHints;
class AmazonopensearchserviceDestinationConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AmazonopensearchserviceDestinationConfiguration = AmazonopensearchserviceDestinationConfiguration;
class AmazonopensearchserviceRetryOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AmazonopensearchserviceRetryOptions = AmazonopensearchserviceRetryOptions;
class AuthenticationConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AuthenticationConfiguration = AuthenticationConfiguration;
class BufferingHints {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BufferingHints = BufferingHints;
class CloudWatchLoggingOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CloudWatchLoggingOptions = CloudWatchLoggingOptions;
class CopyCommand {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CopyCommand = CopyCommand;
class DataFormatConversionConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DataFormatConversionConfiguration = DataFormatConversionConfiguration;
class DeliveryStreamEncryptionConfigurationInput {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DeliveryStreamEncryptionConfigurationInput = DeliveryStreamEncryptionConfigurationInput;
class Deserializer {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Deserializer = Deserializer;
class DocumentIdOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DocumentIdOptions = DocumentIdOptions;
class DynamicPartitioningConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DynamicPartitioningConfiguration = DynamicPartitioningConfiguration;
class ElasticsearchBufferingHints {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ElasticsearchBufferingHints = ElasticsearchBufferingHints;
class ElasticsearchDestinationConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ElasticsearchDestinationConfiguration = ElasticsearchDestinationConfiguration;
class ElasticsearchRetryOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ElasticsearchRetryOptions = ElasticsearchRetryOptions;
class EncryptionConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EncryptionConfiguration = EncryptionConfiguration;
class ExtendedS3DestinationConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ExtendedS3DestinationConfiguration = ExtendedS3DestinationConfiguration;
class HiveJsonSerDe {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HiveJsonSerDe = HiveJsonSerDe;
class HttpEndpointCommonAttribute {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HttpEndpointCommonAttribute = HttpEndpointCommonAttribute;
class HttpEndpointConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HttpEndpointConfiguration = HttpEndpointConfiguration;
class HttpEndpointDestinationConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HttpEndpointDestinationConfiguration = HttpEndpointDestinationConfiguration;
class HttpEndpointRequestConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HttpEndpointRequestConfiguration = HttpEndpointRequestConfiguration;
class InputFormatConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InputFormatConfiguration = InputFormatConfiguration;
class KMSEncryptionConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KMSEncryptionConfig = KMSEncryptionConfig;
class KinesisStreamSourceConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KinesisStreamSourceConfiguration = KinesisStreamSourceConfiguration;
class MSKSourceConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MSKSourceConfiguration = MSKSourceConfiguration;
class OpenXJsonSerDe {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OpenXJsonSerDe = OpenXJsonSerDe;
class OrcSerDe {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OrcSerDe = OrcSerDe;
class OutputFormatConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OutputFormatConfiguration = OutputFormatConfiguration;
class ParquetSerDe {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ParquetSerDe = ParquetSerDe;
class ProcessingConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ProcessingConfiguration = ProcessingConfiguration;
class Processor {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Processor = Processor;
class ProcessorParameter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ProcessorParameter = ProcessorParameter;
class RedshiftDestinationConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RedshiftDestinationConfiguration = RedshiftDestinationConfiguration;
class RedshiftRetryOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RedshiftRetryOptions = RedshiftRetryOptions;
class RetryOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RetryOptions = RetryOptions;
class S3DestinationConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3DestinationConfiguration = S3DestinationConfiguration;
class SchemaConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SchemaConfiguration = SchemaConfiguration;
class Serializer {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Serializer = Serializer;
class SplunkDestinationConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SplunkDestinationConfiguration = SplunkDestinationConfiguration;
class SplunkRetryOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SplunkRetryOptions = SplunkRetryOptions;
class VpcConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VpcConfiguration = VpcConfiguration;
class DeliveryStream extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::KinesisFirehose::DeliveryStream', properties || {});
    }
}
exports.default = DeliveryStream;
DeliveryStream.AmazonOpenSearchServerlessBufferingHints = AmazonOpenSearchServerlessBufferingHints;
DeliveryStream.AmazonOpenSearchServerlessDestinationConfiguration = AmazonOpenSearchServerlessDestinationConfiguration;
DeliveryStream.AmazonOpenSearchServerlessRetryOptions = AmazonOpenSearchServerlessRetryOptions;
DeliveryStream.AmazonopensearchserviceBufferingHints = AmazonopensearchserviceBufferingHints;
DeliveryStream.AmazonopensearchserviceDestinationConfiguration = AmazonopensearchserviceDestinationConfiguration;
DeliveryStream.AmazonopensearchserviceRetryOptions = AmazonopensearchserviceRetryOptions;
DeliveryStream.AuthenticationConfiguration = AuthenticationConfiguration;
DeliveryStream.BufferingHints = BufferingHints;
DeliveryStream.CloudWatchLoggingOptions = CloudWatchLoggingOptions;
DeliveryStream.CopyCommand = CopyCommand;
DeliveryStream.DataFormatConversionConfiguration = DataFormatConversionConfiguration;
DeliveryStream.DeliveryStreamEncryptionConfigurationInput = DeliveryStreamEncryptionConfigurationInput;
DeliveryStream.Deserializer = Deserializer;
DeliveryStream.DocumentIdOptions = DocumentIdOptions;
DeliveryStream.DynamicPartitioningConfiguration = DynamicPartitioningConfiguration;
DeliveryStream.ElasticsearchBufferingHints = ElasticsearchBufferingHints;
DeliveryStream.ElasticsearchDestinationConfiguration = ElasticsearchDestinationConfiguration;
DeliveryStream.ElasticsearchRetryOptions = ElasticsearchRetryOptions;
DeliveryStream.EncryptionConfiguration = EncryptionConfiguration;
DeliveryStream.ExtendedS3DestinationConfiguration = ExtendedS3DestinationConfiguration;
DeliveryStream.HiveJsonSerDe = HiveJsonSerDe;
DeliveryStream.HttpEndpointCommonAttribute = HttpEndpointCommonAttribute;
DeliveryStream.HttpEndpointConfiguration = HttpEndpointConfiguration;
DeliveryStream.HttpEndpointDestinationConfiguration = HttpEndpointDestinationConfiguration;
DeliveryStream.HttpEndpointRequestConfiguration = HttpEndpointRequestConfiguration;
DeliveryStream.InputFormatConfiguration = InputFormatConfiguration;
DeliveryStream.KMSEncryptionConfig = KMSEncryptionConfig;
DeliveryStream.KinesisStreamSourceConfiguration = KinesisStreamSourceConfiguration;
DeliveryStream.MSKSourceConfiguration = MSKSourceConfiguration;
DeliveryStream.OpenXJsonSerDe = OpenXJsonSerDe;
DeliveryStream.OrcSerDe = OrcSerDe;
DeliveryStream.OutputFormatConfiguration = OutputFormatConfiguration;
DeliveryStream.ParquetSerDe = ParquetSerDe;
DeliveryStream.ProcessingConfiguration = ProcessingConfiguration;
DeliveryStream.Processor = Processor;
DeliveryStream.ProcessorParameter = ProcessorParameter;
DeliveryStream.RedshiftDestinationConfiguration = RedshiftDestinationConfiguration;
DeliveryStream.RedshiftRetryOptions = RedshiftRetryOptions;
DeliveryStream.RetryOptions = RetryOptions;
DeliveryStream.S3DestinationConfiguration = S3DestinationConfiguration;
DeliveryStream.SchemaConfiguration = SchemaConfiguration;
DeliveryStream.Serializer = Serializer;
DeliveryStream.SplunkDestinationConfiguration = SplunkDestinationConfiguration;
DeliveryStream.SplunkRetryOptions = SplunkRetryOptions;
DeliveryStream.VpcConfiguration = VpcConfiguration;
