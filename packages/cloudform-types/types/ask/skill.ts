/* Generated from: 
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
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

export class SkillPackage {
    S3BucketRole?: Value<string>
    S3ObjectVersion?: Value<string>
    S3Bucket!: Value<string>
    S3Key!: Value<string>
    Overrides?: Overrides

    constructor(properties: SkillPackage) {
        Object.assign(this, properties)
    }
}

export class AuthenticationConfiguration {
    RefreshToken!: Value<string>
    ClientSecret!: Value<string>
    ClientId!: Value<string>

    constructor(properties: AuthenticationConfiguration) {
        Object.assign(this, properties)
    }
}

export class Overrides {
    Manifest?: {[key: string]: any}

    constructor(properties: Overrides) {
        Object.assign(this, properties)
    }
}

export interface SkillProperties {
    AuthenticationConfiguration: AuthenticationConfiguration
    VendorId: Value<string>
    SkillPackage: SkillPackage
}

export default class Skill extends ResourceBase<SkillProperties> {
    static SkillPackage = SkillPackage
    static AuthenticationConfiguration = AuthenticationConfiguration
    static Overrides = Overrides

    constructor(properties: SkillProperties) {
        super('AWS::ASK::Skill', properties)
    }
}
