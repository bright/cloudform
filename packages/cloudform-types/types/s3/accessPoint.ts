/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class PublicAccessBlockConfiguration {
    BlockPublicAcls?: Value<boolean>
    IgnorePublicAcls?: Value<boolean>
    BlockPublicPolicy?: Value<boolean>
    RestrictPublicBuckets?: Value<boolean>

    constructor(properties: PublicAccessBlockConfiguration) {
        Object.assign(this, properties)
    }
}

export class VpcConfiguration {
    VpcId?: Value<string>

    constructor(properties: VpcConfiguration) {
        Object.assign(this, properties)
    }
}

export interface AccessPointProperties {
    Name?: Value<string>
    Bucket: Value<string>
    VpcConfiguration?: VpcConfiguration
    PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration
    Policy?: {[key: string]: any}
    PolicyStatus?: {[key: string]: any}
    NetworkOrigin?: Value<string>
    CreationDate?: Value<string>
}

export default class AccessPoint extends ResourceBase<AccessPointProperties> {
    static PublicAccessBlockConfiguration = PublicAccessBlockConfiguration
    static VpcConfiguration = VpcConfiguration

    constructor(properties: AccessPointProperties) {
        super('AWS::S3::AccessPoint', properties)
    }
}
