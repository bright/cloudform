/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class AccessDescription {
    AccessMethod!: AccessMethod
    AccessLocation!: GeneralName

    constructor(properties: AccessDescription) {
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

export class CrlConfiguration {
    CustomCname?: Value<string>
    S3ObjectAcl?: Value<string>
    ExpirationInDays?: Value<number>
    Enabled?: Value<boolean>
    S3BucketName?: Value<string>

    constructor(properties: CrlConfiguration) {
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

export class CustomAttribute {
    Value!: Value<string>
    ObjectIdentifier!: Value<string>

    constructor(properties: CustomAttribute) {
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

export class GeneralName {
    UniformResourceIdentifier?: Value<string>
    DnsName?: Value<string>
    EdiPartyName?: EdiPartyName
    RegisteredId?: Value<string>
    Rfc822Name?: Value<string>
    OtherName?: OtherName
    IpAddress?: Value<string>
    DirectoryName?: Subject

    constructor(properties: GeneralName) {
        Object.assign(this, properties)
    }
}

export class KeyUsage {
    KeyEncipherment?: Value<boolean>
    DataEncipherment?: Value<boolean>
    DigitalSignature?: Value<boolean>
    KeyCertSign?: Value<boolean>
    DecipherOnly?: Value<boolean>
    KeyAgreement?: Value<boolean>
    NonRepudiation?: Value<boolean>
    CRLSign?: Value<boolean>
    EncipherOnly?: Value<boolean>

    constructor(properties: KeyUsage) {
        Object.assign(this, properties)
    }
}

export class OcspConfiguration {
    OcspCustomCname?: Value<string>
    Enabled?: Value<boolean>

    constructor(properties: OcspConfiguration) {
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

export class RevocationConfiguration {
    OcspConfiguration?: OcspConfiguration
    CrlConfiguration?: CrlConfiguration

    constructor(properties: RevocationConfiguration) {
        Object.assign(this, properties)
    }
}

export class Subject {
    Organization?: Value<string>
    OrganizationalUnit?: Value<string>
    Locality?: Value<string>
    Title?: Value<string>
    GivenName?: Value<string>
    GenerationQualifier?: Value<string>
    Initials?: Value<string>
    CustomAttributes?: List<CustomAttribute>
    SerialNumber?: Value<string>
    State?: Value<string>
    Country?: Value<string>
    Surname?: Value<string>
    DistinguishedNameQualifier?: Value<string>
    CommonName?: Value<string>
    Pseudonym?: Value<string>

    constructor(properties: Subject) {
        Object.assign(this, properties)
    }
}

export interface CertificateAuthorityProperties {
    CsrExtensions?: CsrExtensions
    Type: Value<string>
    RevocationConfiguration?: RevocationConfiguration
    UsageMode?: Value<string>
    SigningAlgorithm: Value<string>
    KeyStorageSecurityStandard?: Value<string>
    Subject: Subject
    Tags?: List<ResourceTag>
    KeyAlgorithm: Value<string>
}

export default class CertificateAuthority extends ResourceBase<CertificateAuthorityProperties> {
    static AccessDescription = AccessDescription
    static AccessMethod = AccessMethod
    static CrlConfiguration = CrlConfiguration
    static CsrExtensions = CsrExtensions
    static CustomAttribute = CustomAttribute
    static EdiPartyName = EdiPartyName
    static GeneralName = GeneralName
    static KeyUsage = KeyUsage
    static OcspConfiguration = OcspConfiguration
    static OtherName = OtherName
    static RevocationConfiguration = RevocationConfiguration
    static Subject = Subject

    constructor(properties: CertificateAuthorityProperties) {
        super('AWS::ACMPCA::CertificateAuthority', properties)
    }
}
