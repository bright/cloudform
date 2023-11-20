/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class DestinationConfiguration {
    S3?: S3DestinationConfiguration

    constructor(properties: DestinationConfiguration) {
        Object.assign(this, properties)
    }
}

export class RenditionConfiguration {
    RenditionSelection?: Value<string>
    Renditions?: List<Value<string>>

    constructor(properties: RenditionConfiguration) {
        Object.assign(this, properties)
    }
}

export class S3DestinationConfiguration {
    BucketName!: Value<string>

    constructor(properties: S3DestinationConfiguration) {
        Object.assign(this, properties)
    }
}

export class ThumbnailConfiguration {
    TargetIntervalSeconds?: Value<number>
    Storage?: List<Value<string>>
    RecordingMode?: Value<string>
    Resolution?: Value<string>

    constructor(properties: ThumbnailConfiguration) {
        Object.assign(this, properties)
    }
}

export interface RecordingConfigurationProperties {
    DestinationConfiguration: DestinationConfiguration
    RenditionConfiguration?: RenditionConfiguration
    RecordingReconnectWindowSeconds?: Value<number>
    Tags?: List<ResourceTag>
    ThumbnailConfiguration?: ThumbnailConfiguration
    Name?: Value<string>
}

export default class RecordingConfiguration extends ResourceBase<RecordingConfigurationProperties> {
    static DestinationConfiguration = DestinationConfiguration
    static RenditionConfiguration = RenditionConfiguration
    static S3DestinationConfiguration = S3DestinationConfiguration
    static ThumbnailConfiguration = ThumbnailConfiguration

    constructor(properties: RecordingConfigurationProperties) {
        super('AWS::IVS::RecordingConfiguration', properties)
    }
}
