/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class Extensions {
    CertificatePolicies?: List<PolicyInformation>
    ExtendedKeyUsage?: List<ExtendedKeyUsage>
    KeyUsage?: KeyUsage
    SubjectAlternativeNames?: List<GeneralName>

    constructor(properties: Extensions) {
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

export class PolicyInformation {
    CertPolicyId!: Value<string>
    PolicyQualifiers?: List<PolicyQualifierInfo>

    constructor(properties: PolicyInformation) {
        Object.assign(this, properties)
    }
}

export class PolicyQualifierInfo {
    PolicyQualifierId!: Value<string>
    Qualifier!: Qualifier

    constructor(properties: PolicyQualifierInfo) {
        Object.assign(this, properties)
    }
}

export class Qualifier {
    CpsUri!: Value<string>

    constructor(properties: Qualifier) {
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

export class ApiPassthrough {
    Extensions?: Extensions
    Subject?: Subject

    constructor(properties: ApiPassthrough) {
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

export class OtherName {
    TypeId!: Value<string>
    Value!: Value<string>

    constructor(properties: OtherName) {
        Object.assign(this, properties)
    }
}

export class Validity {
    Value!: Value<number>
    Type!: Value<string>

    constructor(properties: Validity) {
        Object.assign(this, properties)
    }
}

export class ExtendedKeyUsage {
    ExtendedKeyUsageType?: Value<string>
    ExtendedKeyUsageObjectIdentifier?: Value<string>

    constructor(properties: ExtendedKeyUsage) {
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

export interface CertificateProperties {
    ApiPassthrough?: ApiPassthrough
    CertificateAuthorityArn: Value<string>
    CertificateSigningRequest: Value<string>
    SigningAlgorithm: Value<string>
    TemplateArn?: Value<string>
    Validity: Validity
    ValidityNotBefore?: Validity
}

export default class Certificate extends ResourceBase<CertificateProperties> {
    static Extensions = Extensions
    static Subject = Subject
    static PolicyInformation = PolicyInformation
    static PolicyQualifierInfo = PolicyQualifierInfo
    static Qualifier = Qualifier
    static GeneralName = GeneralName
    static ApiPassthrough = ApiPassthrough
    static EdiPartyName = EdiPartyName
    static OtherName = OtherName
    static Validity = Validity
    static ExtendedKeyUsage = ExtendedKeyUsage
    static KeyUsage = KeyUsage

    constructor(properties: CertificateProperties) {
        super('AWS::ACMPCA::Certificate', properties)
    }
}
