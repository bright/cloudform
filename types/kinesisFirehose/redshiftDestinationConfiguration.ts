import {ResourceBase} from '../resource'
import {Value} from '../internal'
import CopyCommand from './copyCommand'
import CloudWatchLoggingOptions from './cloudWatchLoggingOptions'
import S3Configuration from './s3Configuration'



export interface RedshiftDestinationConfigurationProperties {
    ClusterJDBCURL: Value<string>
    CopyCommand: CopyCommand
    Password: Value<string>
    RoleARN: Value<string>
    Username: Value<string>
    CloudWatchLoggingOptions?: CloudWatchLoggingOptions
    S3Configuration: S3Configuration
}

export default class RedshiftDestinationConfiguration extends ResourceBase {
    constructor(properties: RedshiftDestinationConfigurationProperties, dependsOn?: Value<string>) {
        super('AWS::KinesisFirehose::RedshiftDestinationConfiguration', properties, dependsOn)
    }
}