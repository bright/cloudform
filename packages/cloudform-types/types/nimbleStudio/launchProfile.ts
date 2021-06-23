/* Generated from: 
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class StreamConfiguration {
    ClipboardMode!: Value<string>
    StreamingImageIds!: List<Value<string>>
    Ec2InstanceTypes!: List<Value<string>>
    MaxSessionLengthInMinutes?: Value<number>

    constructor(properties: StreamConfiguration) {
        Object.assign(this, properties)
    }
}

export interface LaunchProfileProperties {
    Description?: Value<string>
    Name: Value<string>
    Ec2SubnetIds: List<Value<string>>
    StreamConfiguration: StreamConfiguration
    StudioComponentIds: List<Value<string>>
    LaunchProfileProtocolVersions: List<Value<string>>
    StudioId: Value<string>
    Tags?: {[key: string]: Value<string>}
}

export default class LaunchProfile extends ResourceBase<LaunchProfileProperties> {
    static StreamConfiguration = StreamConfiguration

    constructor(properties: LaunchProfileProperties) {
        super('AWS::NimbleStudio::LaunchProfile', properties)
    }
}
