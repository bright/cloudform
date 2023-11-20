/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class StreamingImageEncryptionConfiguration {
    KeyType!: Value<string>
    KeyArn?: Value<string>

    constructor(properties: StreamingImageEncryptionConfiguration) {
        Object.assign(this, properties)
    }
}

export interface StreamingImageProperties {
    Description?: Value<string>
    Ec2ImageId: Value<string>
    StudioId: Value<string>
    Tags?: {[key: string]: Value<string>}
    Name: Value<string>
}

export default class StreamingImage extends ResourceBase<StreamingImageProperties> {
    static StreamingImageEncryptionConfiguration = StreamingImageEncryptionConfiguration

    constructor(properties: StreamingImageProperties) {
        super('AWS::NimbleStudio::StreamingImage', properties)
    }
}
