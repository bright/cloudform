/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class ServerSideEncryptionConfiguration {
    KmsKeyId?: Value<string>

    constructor(properties: ServerSideEncryptionConfiguration) {
        Object.assign(this, properties)
    }
}

export interface AssistantProperties {
    Type: Value<string>
    Description?: Value<string>
    ServerSideEncryptionConfiguration?: ServerSideEncryptionConfiguration
    Tags?: List<ResourceTag>
    Name: Value<string>
}

export default class Assistant extends ResourceBase<AssistantProperties> {
    static ServerSideEncryptionConfiguration = ServerSideEncryptionConfiguration

    constructor(properties: AssistantProperties) {
        super('AWS::Wisdom::Assistant', properties)
    }
}
