/* Generated from: 
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class DestinationConfiguration {
    S3!: S3DestinationConfiguration

    constructor(properties: DestinationConfiguration) {
        Object.assign(this, properties)
    }
}

export class S3DestinationConfiguration {
    BucketName!: Value<string>

    constructor(properties: S3DestinationConfiguration) {
        Object.assign(this, properties)
    }
}

export interface RecordingConfigurationProperties {
    Name?: Value<string>
    DestinationConfiguration: DestinationConfiguration
    Tags?: List<ResourceTag>
}

export default class RecordingConfiguration extends ResourceBase<RecordingConfigurationProperties> {
    static DestinationConfiguration = DestinationConfiguration
    static S3DestinationConfiguration = S3DestinationConfiguration

    constructor(properties: RecordingConfigurationProperties) {
        super('AWS::IVS::RecordingConfiguration', properties)
    }
}
