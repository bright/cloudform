import {ResourceBase} from '../resource'
import {Value} from '../internal'
import BufferingHints from './bufferingHints'
import RetryOptions from './retryOptions'
import CloudWatchLoggingOptions from './cloudWatchLoggingOptions'
import S3Configuration from './s3Configuration'

export type S3BackupMode = "*" | "FailedDocumentsOnly" | "AllDocuments"

export interface ElasticsearchDestinationConfigurationProperties {
    BufferingHints: BufferingHints
    DomainARN: Value<string>
    IndexName: Value<string>
    IndexRotationPeriod: Value<string>
    RetryOptions?: RetryOptions
    RoleARN: Value<string>
    S3BackupMode: Value<S3BackupMode>
    TypeName: Value<string>
    CloudWatchLoggingOptions?: CloudWatchLoggingOptions
    S3Configuration: S3Configuration
}

export default class ElasticsearchDestinationConfiguration extends ResourceBase {
    constructor(properties: ElasticsearchDestinationConfigurationProperties, dependsOn?: Value<string>) {
        super('AWS::KinesisFirehose::ElasticsearchDestinationConfiguration', properties, dependsOn)
    }
}