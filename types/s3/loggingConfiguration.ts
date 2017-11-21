import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface LoggingConfigurationProperties {
    DestinationBucketName?: Value<string>
    LogFilePrefix?: Value<string>
}

export default class LoggingConfiguration extends ResourceBase {
    constructor(properties: LoggingConfigurationProperties, dependsOn?: Value<string>) {
        super('AWS::S3::LoggingConfiguration', properties, dependsOn)
    }
}