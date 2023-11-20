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
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class AdvancedEventSelector {
    FieldSelectors!: List<AdvancedFieldSelector>
    Name?: Value<string>

    constructor(properties: AdvancedEventSelector) {
        Object.assign(this, properties)
    }
}

export class AdvancedFieldSelector {
    Field!: Value<string>
    Equals?: List<Value<string>>
    NotStartsWith?: List<Value<string>>
    NotEndsWith?: List<Value<string>>
    StartsWith?: List<Value<string>>
    EndsWith?: List<Value<string>>
    NotEquals?: List<Value<string>>

    constructor(properties: AdvancedFieldSelector) {
        Object.assign(this, properties)
    }
}

export class DataResource {
    Type!: Value<string>
    Values?: List<Value<string>>

    constructor(properties: DataResource) {
        Object.assign(this, properties)
    }
}

export class EventSelector {
    IncludeManagementEvents?: Value<boolean>
    ReadWriteType?: Value<string>
    ExcludeManagementEventSources?: List<Value<string>>
    DataResources?: List<DataResource>

    constructor(properties: EventSelector) {
        Object.assign(this, properties)
    }
}

export class InsightSelector {
    InsightType?: Value<string>

    constructor(properties: InsightSelector) {
        Object.assign(this, properties)
    }
}

export interface TrailProperties {
    IncludeGlobalServiceEvents?: Value<boolean>
    EventSelectors?: List<EventSelector>
    KMSKeyId?: Value<string>
    CloudWatchLogsRoleArn?: Value<string>
    S3KeyPrefix?: Value<string>
    AdvancedEventSelectors?: List<AdvancedEventSelector>
    TrailName?: Value<string>
    IsOrganizationTrail?: Value<boolean>
    InsightSelectors?: List<InsightSelector>
    CloudWatchLogsLogGroupArn?: Value<string>
    SnsTopicName?: Value<string>
    IsMultiRegionTrail?: Value<boolean>
    S3BucketName: Value<string>
    EnableLogFileValidation?: Value<boolean>
    Tags?: List<ResourceTag>
    IsLogging: Value<boolean>
}

export default class Trail extends ResourceBase<TrailProperties> {
    static AdvancedEventSelector = AdvancedEventSelector
    static AdvancedFieldSelector = AdvancedFieldSelector
    static DataResource = DataResource
    static EventSelector = EventSelector
    static InsightSelector = InsightSelector

    constructor(properties: TrailProperties) {
        super('AWS::CloudTrail::Trail', properties)
    }
}
