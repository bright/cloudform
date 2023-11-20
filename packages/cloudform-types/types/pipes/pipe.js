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
exports.SelfManagedKafkaAccessConfigurationVpc = exports.SelfManagedKafkaAccessConfigurationCredentials = exports.SageMakerPipelineParameter = exports.PlacementStrategy = exports.PlacementConstraint = exports.PipeTargetStateMachineParameters = exports.PipeTargetSqsQueueParameters = exports.PipeTargetSageMakerPipelineParameters = exports.PipeTargetRedshiftDataParameters = exports.PipeTargetParameters = exports.PipeTargetLambdaFunctionParameters = exports.PipeTargetKinesisStreamParameters = exports.PipeTargetHttpParameters = exports.PipeTargetEventBridgeEventBusParameters = exports.PipeTargetEcsTaskParameters = exports.PipeTargetCloudWatchLogsParameters = exports.PipeTargetBatchJobParameters = exports.PipeSourceSqsQueueParameters = exports.PipeSourceSelfManagedKafkaParameters = exports.PipeSourceRabbitMQBrokerParameters = exports.PipeSourceParameters = exports.PipeSourceManagedStreamingKafkaParameters = exports.PipeSourceKinesisStreamParameters = exports.PipeSourceDynamoDBStreamParameters = exports.PipeSourceActiveMQBrokerParameters = exports.PipeEnrichmentParameters = exports.PipeEnrichmentHttpParameters = exports.NetworkConfiguration = exports.MSKAccessCredentials = exports.MQBrokerAccessCredentials = exports.FilterCriteria = exports.Filter = exports.EcsTaskOverride = exports.EcsResourceRequirement = exports.EcsInferenceAcceleratorOverride = exports.EcsEphemeralStorage = exports.EcsEnvironmentVariable = exports.EcsEnvironmentFile = exports.EcsContainerOverride = exports.DeadLetterConfig = exports.CapacityProviderStrategyItem = exports.BatchRetryStrategy = exports.BatchResourceRequirement = exports.BatchJobDependency = exports.BatchEnvironmentVariable = exports.BatchContainerOverrides = exports.BatchArrayProperties = exports.AwsVpcConfiguration = void 0;
const resource_1 = require("../resource");
class AwsVpcConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AwsVpcConfiguration = AwsVpcConfiguration;
class BatchArrayProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BatchArrayProperties = BatchArrayProperties;
class BatchContainerOverrides {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BatchContainerOverrides = BatchContainerOverrides;
class BatchEnvironmentVariable {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BatchEnvironmentVariable = BatchEnvironmentVariable;
class BatchJobDependency {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BatchJobDependency = BatchJobDependency;
class BatchResourceRequirement {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BatchResourceRequirement = BatchResourceRequirement;
class BatchRetryStrategy {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BatchRetryStrategy = BatchRetryStrategy;
class CapacityProviderStrategyItem {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CapacityProviderStrategyItem = CapacityProviderStrategyItem;
class DeadLetterConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DeadLetterConfig = DeadLetterConfig;
class EcsContainerOverride {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EcsContainerOverride = EcsContainerOverride;
class EcsEnvironmentFile {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EcsEnvironmentFile = EcsEnvironmentFile;
class EcsEnvironmentVariable {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EcsEnvironmentVariable = EcsEnvironmentVariable;
class EcsEphemeralStorage {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EcsEphemeralStorage = EcsEphemeralStorage;
class EcsInferenceAcceleratorOverride {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EcsInferenceAcceleratorOverride = EcsInferenceAcceleratorOverride;
class EcsResourceRequirement {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EcsResourceRequirement = EcsResourceRequirement;
class EcsTaskOverride {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EcsTaskOverride = EcsTaskOverride;
class Filter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Filter = Filter;
class FilterCriteria {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FilterCriteria = FilterCriteria;
class MQBrokerAccessCredentials {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MQBrokerAccessCredentials = MQBrokerAccessCredentials;
class MSKAccessCredentials {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MSKAccessCredentials = MSKAccessCredentials;
class NetworkConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NetworkConfiguration = NetworkConfiguration;
class PipeEnrichmentHttpParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PipeEnrichmentHttpParameters = PipeEnrichmentHttpParameters;
class PipeEnrichmentParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PipeEnrichmentParameters = PipeEnrichmentParameters;
class PipeSourceActiveMQBrokerParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PipeSourceActiveMQBrokerParameters = PipeSourceActiveMQBrokerParameters;
class PipeSourceDynamoDBStreamParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PipeSourceDynamoDBStreamParameters = PipeSourceDynamoDBStreamParameters;
class PipeSourceKinesisStreamParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PipeSourceKinesisStreamParameters = PipeSourceKinesisStreamParameters;
class PipeSourceManagedStreamingKafkaParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PipeSourceManagedStreamingKafkaParameters = PipeSourceManagedStreamingKafkaParameters;
class PipeSourceParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PipeSourceParameters = PipeSourceParameters;
class PipeSourceRabbitMQBrokerParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PipeSourceRabbitMQBrokerParameters = PipeSourceRabbitMQBrokerParameters;
class PipeSourceSelfManagedKafkaParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PipeSourceSelfManagedKafkaParameters = PipeSourceSelfManagedKafkaParameters;
class PipeSourceSqsQueueParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PipeSourceSqsQueueParameters = PipeSourceSqsQueueParameters;
class PipeTargetBatchJobParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PipeTargetBatchJobParameters = PipeTargetBatchJobParameters;
class PipeTargetCloudWatchLogsParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PipeTargetCloudWatchLogsParameters = PipeTargetCloudWatchLogsParameters;
class PipeTargetEcsTaskParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PipeTargetEcsTaskParameters = PipeTargetEcsTaskParameters;
class PipeTargetEventBridgeEventBusParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PipeTargetEventBridgeEventBusParameters = PipeTargetEventBridgeEventBusParameters;
class PipeTargetHttpParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PipeTargetHttpParameters = PipeTargetHttpParameters;
class PipeTargetKinesisStreamParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PipeTargetKinesisStreamParameters = PipeTargetKinesisStreamParameters;
class PipeTargetLambdaFunctionParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PipeTargetLambdaFunctionParameters = PipeTargetLambdaFunctionParameters;
class PipeTargetParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PipeTargetParameters = PipeTargetParameters;
class PipeTargetRedshiftDataParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PipeTargetRedshiftDataParameters = PipeTargetRedshiftDataParameters;
class PipeTargetSageMakerPipelineParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PipeTargetSageMakerPipelineParameters = PipeTargetSageMakerPipelineParameters;
class PipeTargetSqsQueueParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PipeTargetSqsQueueParameters = PipeTargetSqsQueueParameters;
class PipeTargetStateMachineParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PipeTargetStateMachineParameters = PipeTargetStateMachineParameters;
class PlacementConstraint {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PlacementConstraint = PlacementConstraint;
class PlacementStrategy {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PlacementStrategy = PlacementStrategy;
class SageMakerPipelineParameter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SageMakerPipelineParameter = SageMakerPipelineParameter;
class SelfManagedKafkaAccessConfigurationCredentials {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SelfManagedKafkaAccessConfigurationCredentials = SelfManagedKafkaAccessConfigurationCredentials;
class SelfManagedKafkaAccessConfigurationVpc {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SelfManagedKafkaAccessConfigurationVpc = SelfManagedKafkaAccessConfigurationVpc;
class Pipe extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::Pipes::Pipe', properties);
    }
}
exports.default = Pipe;
Pipe.AwsVpcConfiguration = AwsVpcConfiguration;
Pipe.BatchArrayProperties = BatchArrayProperties;
Pipe.BatchContainerOverrides = BatchContainerOverrides;
Pipe.BatchEnvironmentVariable = BatchEnvironmentVariable;
Pipe.BatchJobDependency = BatchJobDependency;
Pipe.BatchResourceRequirement = BatchResourceRequirement;
Pipe.BatchRetryStrategy = BatchRetryStrategy;
Pipe.CapacityProviderStrategyItem = CapacityProviderStrategyItem;
Pipe.DeadLetterConfig = DeadLetterConfig;
Pipe.EcsContainerOverride = EcsContainerOverride;
Pipe.EcsEnvironmentFile = EcsEnvironmentFile;
Pipe.EcsEnvironmentVariable = EcsEnvironmentVariable;
Pipe.EcsEphemeralStorage = EcsEphemeralStorage;
Pipe.EcsInferenceAcceleratorOverride = EcsInferenceAcceleratorOverride;
Pipe.EcsResourceRequirement = EcsResourceRequirement;
Pipe.EcsTaskOverride = EcsTaskOverride;
Pipe.Filter = Filter;
Pipe.FilterCriteria = FilterCriteria;
Pipe.MQBrokerAccessCredentials = MQBrokerAccessCredentials;
Pipe.MSKAccessCredentials = MSKAccessCredentials;
Pipe.NetworkConfiguration = NetworkConfiguration;
Pipe.PipeEnrichmentHttpParameters = PipeEnrichmentHttpParameters;
Pipe.PipeEnrichmentParameters = PipeEnrichmentParameters;
Pipe.PipeSourceActiveMQBrokerParameters = PipeSourceActiveMQBrokerParameters;
Pipe.PipeSourceDynamoDBStreamParameters = PipeSourceDynamoDBStreamParameters;
Pipe.PipeSourceKinesisStreamParameters = PipeSourceKinesisStreamParameters;
Pipe.PipeSourceManagedStreamingKafkaParameters = PipeSourceManagedStreamingKafkaParameters;
Pipe.PipeSourceParameters = PipeSourceParameters;
Pipe.PipeSourceRabbitMQBrokerParameters = PipeSourceRabbitMQBrokerParameters;
Pipe.PipeSourceSelfManagedKafkaParameters = PipeSourceSelfManagedKafkaParameters;
Pipe.PipeSourceSqsQueueParameters = PipeSourceSqsQueueParameters;
Pipe.PipeTargetBatchJobParameters = PipeTargetBatchJobParameters;
Pipe.PipeTargetCloudWatchLogsParameters = PipeTargetCloudWatchLogsParameters;
Pipe.PipeTargetEcsTaskParameters = PipeTargetEcsTaskParameters;
Pipe.PipeTargetEventBridgeEventBusParameters = PipeTargetEventBridgeEventBusParameters;
Pipe.PipeTargetHttpParameters = PipeTargetHttpParameters;
Pipe.PipeTargetKinesisStreamParameters = PipeTargetKinesisStreamParameters;
Pipe.PipeTargetLambdaFunctionParameters = PipeTargetLambdaFunctionParameters;
Pipe.PipeTargetParameters = PipeTargetParameters;
Pipe.PipeTargetRedshiftDataParameters = PipeTargetRedshiftDataParameters;
Pipe.PipeTargetSageMakerPipelineParameters = PipeTargetSageMakerPipelineParameters;
Pipe.PipeTargetSqsQueueParameters = PipeTargetSqsQueueParameters;
Pipe.PipeTargetStateMachineParameters = PipeTargetStateMachineParameters;
Pipe.PlacementConstraint = PlacementConstraint;
Pipe.PlacementStrategy = PlacementStrategy;
Pipe.SageMakerPipelineParameter = SageMakerPipelineParameter;
Pipe.SelfManagedKafkaAccessConfigurationCredentials = SelfManagedKafkaAccessConfigurationCredentials;
Pipe.SelfManagedKafkaAccessConfigurationVpc = SelfManagedKafkaAccessConfigurationVpc;
