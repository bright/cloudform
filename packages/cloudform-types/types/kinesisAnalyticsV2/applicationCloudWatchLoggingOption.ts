/* Generated from: 
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class CloudWatchLoggingOption {
    LogStreamARN!: Value<string>

    constructor(properties: CloudWatchLoggingOption) {
        Object.assign(this, properties)
    }
}

export interface ApplicationCloudWatchLoggingOptionProperties {
    ApplicationName: Value<string>
    CloudWatchLoggingOption: CloudWatchLoggingOption
}

export default class ApplicationCloudWatchLoggingOption extends ResourceBase {
    static CloudWatchLoggingOption = CloudWatchLoggingOption

    constructor(properties?: ApplicationCloudWatchLoggingOptionProperties) {
        super('AWS::KinesisAnalyticsV2::ApplicationCloudWatchLoggingOption', properties)
    }
}
