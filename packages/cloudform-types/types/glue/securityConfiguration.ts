/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class EncryptionConfiguration {


    constructor(properties: EncryptionConfiguration) {
        Object.assign(this, properties)
    }
}

export class JobBookmarksEncryption {
    KmsKeyArn?: Value<string>
    JobBookmarksEncryptionMode?: Value<string>

    constructor(properties: JobBookmarksEncryption) {
        Object.assign(this, properties)
    }
}

export type S3Encryptions = List<S3Encryption>

export class S3Encryption {
    KmsKeyArn?: Value<string>
    S3EncryptionMode?: Value<string>

    constructor(properties: S3Encryption) {
        Object.assign(this, properties)
    }
}

export class CloudWatchEncryption {
    KmsKeyArn?: Value<string>
    CloudWatchEncryptionMode?: Value<string>

    constructor(properties: CloudWatchEncryption) {
        Object.assign(this, properties)
    }
}

export interface SecurityConfigurationProperties {
    Name: Value<string>
}

export default class SecurityConfiguration extends ResourceBase<SecurityConfigurationProperties> {
    static EncryptionConfiguration = EncryptionConfiguration
    static JobBookmarksEncryption = JobBookmarksEncryption
    static S3Encryption = S3Encryption
    static CloudWatchEncryption = CloudWatchEncryption

    constructor(properties: SecurityConfigurationProperties) {
        super('AWS::Glue::SecurityConfiguration', properties)
    }
}
