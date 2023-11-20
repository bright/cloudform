/* Generated from: 
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class DataInputConfiguration {
    InferenceInputNameConfiguration?: InputNameConfiguration
    S3InputConfiguration!: S3InputConfiguration
    InputTimeZoneOffset?: Value<string>

    constructor(properties: DataInputConfiguration) {
        Object.assign(this, properties)
    }
}

export class DataOutputConfiguration {
    KmsKeyId?: Value<string>
    S3OutputConfiguration!: S3OutputConfiguration

    constructor(properties: DataOutputConfiguration) {
        Object.assign(this, properties)
    }
}

export class InputNameConfiguration {
    ComponentTimestampDelimiter?: Value<string>
    TimestampFormat?: Value<string>

    constructor(properties: InputNameConfiguration) {
        Object.assign(this, properties)
    }
}

export class S3InputConfiguration {
    Bucket!: Value<string>
    Prefix?: Value<string>

    constructor(properties: S3InputConfiguration) {
        Object.assign(this, properties)
    }
}

export class S3OutputConfiguration {
    Bucket!: Value<string>
    Prefix?: Value<string>

    constructor(properties: S3OutputConfiguration) {
        Object.assign(this, properties)
    }
}

export interface InferenceSchedulerProperties {
    InferenceSchedulerName?: Value<string>
    DataUploadFrequency: Value<string>
    ModelName: Value<string>
    DataInputConfiguration: DataInputConfiguration
    DataOutputConfiguration: DataOutputConfiguration
    ServerSideKmsKeyId?: Value<string>
    DataDelayOffsetInMinutes?: Value<number>
    RoleArn: Value<string>
    Tags?: List<ResourceTag>
}

export default class InferenceScheduler extends ResourceBase<InferenceSchedulerProperties> {
    static DataInputConfiguration = DataInputConfiguration
    static DataOutputConfiguration = DataOutputConfiguration
    static InputNameConfiguration = InputNameConfiguration
    static S3InputConfiguration = S3InputConfiguration
    static S3OutputConfiguration = S3OutputConfiguration

    constructor(properties: InferenceSchedulerProperties) {
        super('AWS::LookoutEquipment::InferenceScheduler', properties)
    }
}
