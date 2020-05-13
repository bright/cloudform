/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class Subject {
    Country?: Value<string>
    Organization?: Value<string>
    OrganizationalUnit?: Value<string>
    DistinguishedNameQualifier?: Value<string>
    State?: Value<string>
    CommonName?: Value<string>
    SerialNumber?: Value<string>
    Locality?: Value<string>
    Title?: Value<string>
    Surname?: Value<string>
    GivenName?: Value<string>
    Initials?: Value<string>
    Pseudonym?: Value<string>
    GenerationQualifier?: Value<string>

    constructor(properties: Subject) {
        Object.assign(this, properties)
    }
}

export class RevocationConfiguration {
    CrlConfiguration?: CrlConfiguration

    constructor(properties: RevocationConfiguration) {
        Object.assign(this, properties)
    }
}

export class CrlConfiguration {
    Enabled?: Value<boolean>
    ExpirationInDays?: Value<number>
    CustomCname?: Value<string>
    S3BucketName?: Value<string>

    constructor(properties: CrlConfiguration) {
        Object.assign(this, properties)
    }
}

export interface CertificateAuthorityProperties {
    Type: Value<string>
    KeyAlgorithm: Value<string>
    SigningAlgorithm: Value<string>
    Subject: Subject
    RevocationConfiguration?: RevocationConfiguration
    Tags?: List<ResourceTag>
}

export default class CertificateAuthority extends ResourceBase<CertificateAuthorityProperties> {
    static Subject = Subject
    static RevocationConfiguration = RevocationConfiguration
    static CrlConfiguration = CrlConfiguration

    constructor(properties: CertificateAuthorityProperties) {
        super('AWS::ACMPCA::CertificateAuthority', properties)
    }
}
