/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class RevocationConfiguration {
    CrlConfiguration?: CrlConfiguration

    constructor(properties: RevocationConfiguration) {
        Object.assign(this, properties)
    }
}

export class KeyUsage {
    DigitalSignature?: Value<boolean>
    NonRepudiation?: Value<boolean>
    KeyEncipherment?: Value<boolean>
    DataEncipherment?: Value<boolean>
    KeyAgreement?: Value<boolean>
    KeyCertSign?: Value<boolean>
    CRLSign?: Value<boolean>
    EncipherOnly?: Value<boolean>
    DecipherOnly?: Value<boolean>

    constructor(properties: KeyUsage) {
        Object.assign(this, properties)
    }
}

export class CsrExtensions {
    KeyUsage?: KeyUsage
    SubjectInformationAccess?: List<AccessDescription>

    constructor(properties: CsrExtensions) {
        Object.assign(this, properties)
    }
}

export class AccessDescription {
    AccessMethod!: AccessMethod
    AccessLocation!: GeneralName

    constructor(properties: AccessDescription) {
        Object.assign(this, properties)
    }
}

export class EdiPartyName {
    PartyName!: Value<string>
    NameAssigner!: Value<string>

    constructor(properties: EdiPartyName) {
        Object.assign(this, properties)
    }
}

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

export class AccessMethod {
    CustomObjectIdentifier?: Value<string>
    AccessMethodType?: Value<string>

    constructor(properties: AccessMethod) {
        Object.assign(this, properties)
    }
}

export class OtherName {
    TypeId!: Value<string>
    Value!: Value<string>

    constructor(properties: OtherName) {
        Object.assign(this, properties)
    }
}

export class CrlConfiguration {
    Enabled?: Value<boolean>
    ExpirationInDays?: Value<number>
    CustomCname?: Value<string>
    S3BucketName?: Value<string>
    S3ObjectAcl?: Value<string>

    constructor(properties: CrlConfiguration) {
        Object.assign(this, properties)
    }
}

export class GeneralName {
    OtherName?: OtherName
    Rfc822Name?: Value<string>
    DnsName?: Value<string>
    DirectoryName?: Subject
    EdiPartyName?: EdiPartyName
    UniformResourceIdentifier?: Value<string>
    IpAddress?: Value<string>
    RegisteredId?: Value<string>

    constructor(properties: GeneralName) {
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
    CsrExtensions?: CsrExtensions
    KeyStorageSecurityStandard?: Value<string>
}

export default class CertificateAuthority extends ResourceBase<CertificateAuthorityProperties> {
    static RevocationConfiguration = RevocationConfiguration
    static KeyUsage = KeyUsage
    static CsrExtensions = CsrExtensions
    static AccessDescription = AccessDescription
    static EdiPartyName = EdiPartyName
    static Subject = Subject
    static AccessMethod = AccessMethod
    static OtherName = OtherName
    static CrlConfiguration = CrlConfiguration
    static GeneralName = GeneralName

    constructor(properties: CertificateAuthorityProperties) {
        super('AWS::ACMPCA::CertificateAuthority', properties)
    }
}
