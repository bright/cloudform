import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface CloudWatchLoggingOptionsProperties {
    Enabled?: Value<boolean>
    LogGroupName?: Value<string>
    LogStreamName?: Value<string>
}

export default class CloudWatchLoggingOptions extends ResourceBase {
    constructor(properties: CloudWatchLoggingOptionsProperties, dependsOn?: Value<string>) {
        super('AWS::KinesisFirehose::CloudWatchLoggingOptions', properties, dependsOn)
    }
}