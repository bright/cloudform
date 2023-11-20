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
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class ApiPassthrough {
    Extensions?: Extensions
    Subject?: Subject

    constructor(properties: ApiPassthrough) {
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

export class CustomExtension {
    Value!: Value<string>
    Critical?: Value<boolean>
    ObjectIdentifier!: Value<string>

    constructor(properties: CustomExtension) {
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

export class ExtendedKeyUsage {
    ExtendedKeyUsageType?: Value<string>
    ExtendedKeyUsageObjectIdentifier?: Value<string>

    constructor(properties: ExtendedKeyUsage) {
        Object.assign(this, properties)
    }
}

export class Extensions {
    CustomExtensions?: List<CustomExtension>
    CertificatePolicies?: List<PolicyInformation>
    KeyUsage?: KeyUsage
    SubjectAlternativeNames?: List<GeneralName>
    ExtendedKeyUsage?: List<ExtendedKeyUsage>

    constructor(properties: Extensions) {
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

export class OtherName {
    TypeId!: Value<string>
    Value!: Value<string>

    constructor(properties: OtherName) {
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
    Qualifier!: Qualifier
    PolicyQualifierId!: Value<string>

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

export class Validity {
    Type!: Value<string>
    Value!: Value<number>

    constructor(properties: Validity) {
        Object.assign(this, properties)
    }
}

export interface CertificateProperties {
    TemplateArn?: Value<string>
    CertificateAuthorityArn: Value<string>
    Validity: Validity
    CertificateSigningRequest: Value<string>
    SigningAlgorithm: Value<string>
    ApiPassthrough?: ApiPassthrough
    ValidityNotBefore?: Validity
}

export default class Certificate extends ResourceBase<CertificateProperties> {
    static ApiPassthrough = ApiPassthrough
    static CustomAttribute = CustomAttribute
    static CustomExtension = CustomExtension
    static EdiPartyName = EdiPartyName
    static ExtendedKeyUsage = ExtendedKeyUsage
    static Extensions = Extensions
    static GeneralName = GeneralName
    static KeyUsage = KeyUsage
    static OtherName = OtherName
    static PolicyInformation = PolicyInformation
    static PolicyQualifierInfo = PolicyQualifierInfo
    static Qualifier = Qualifier
    static Subject = Subject
    static Validity = Validity

    constructor(properties: CertificateProperties) {
        super('AWS::ACMPCA::Certificate', properties)
    }
}
