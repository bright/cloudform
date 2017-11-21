import {ResourceBase, ResourceTag} from '../resource'
import {Value} from '../internal'




export interface TrailProperties {
    CloudWatchLogsLogGroupArn?: Value<string>
    CloudWatchLogsRoleArn?: Value<string>
    EnableLogFileValidation?: Value<boolean>
    IncludeGlobalServiceEvents?: Value<boolean>
    IsLogging: Value<boolean>
    IsMultiRegionTrail?: Value<boolean>
    KMSKeyId: Value<string>
    S3BucketName: Value<string>
    S3KeyPrefix?: Value<string>
    SnsTopicName?: Value<string>
    Tags?: ResourceTag[]
}

export default class Trail extends ResourceBase {
    constructor(properties: TrailProperties, dependsOn?: Value<string>) {
        super('AWS::CloudTrail::Trail', properties, dependsOn)
    }
}