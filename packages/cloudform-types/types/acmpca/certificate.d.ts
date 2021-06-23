import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Extensions {
    CertificatePolicies?: List<PolicyInformation>;
    ExtendedKeyUsage?: List<ExtendedKeyUsage>;
    KeyUsage?: KeyUsage;
    SubjectAlternativeNames?: List<GeneralName>;
    constructor(properties: Extensions);
}
export declare class Subject {
    Country?: Value<string>;
    Organization?: Value<string>;
    OrganizationalUnit?: Value<string>;
    DistinguishedNameQualifier?: Value<string>;
    State?: Value<string>;
    CommonName?: Value<string>;
    SerialNumber?: Value<string>;
    Locality?: Value<string>;
    Title?: Value<string>;
    Surname?: Value<string>;
    GivenName?: Value<string>;
    Initials?: Value<string>;
    Pseudonym?: Value<string>;
    GenerationQualifier?: Value<string>;
    constructor(properties: Subject);
}
export declare class PolicyInformation {
    CertPolicyId: Value<string>;
    PolicyQualifiers?: List<PolicyQualifierInfo>;
    constructor(properties: PolicyInformation);
}
export declare class PolicyQualifierInfo {
    PolicyQualifierId: Value<string>;
    Qualifier: Qualifier;
    constructor(properties: PolicyQualifierInfo);
}
export declare class Qualifier {
    CpsUri: Value<string>;
    constructor(properties: Qualifier);
}
export declare class GeneralName {
    OtherName?: OtherName;
    Rfc822Name?: Value<string>;
    DnsName?: Value<string>;
    DirectoryName?: Subject;
    EdiPartyName?: EdiPartyName;
    UniformResourceIdentifier?: Value<string>;
    IpAddress?: Value<string>;
    RegisteredId?: Value<string>;
    constructor(properties: GeneralName);
}
export declare class ApiPassthrough {
    Extensions?: Extensions;
    Subject?: Subject;
    constructor(properties: ApiPassthrough);
}
export declare class EdiPartyName {
    PartyName: Value<string>;
    NameAssigner: Value<string>;
    constructor(properties: EdiPartyName);
}
export declare class OtherName {
    TypeId: Value<string>;
    Value: Value<string>;
    constructor(properties: OtherName);
}
export declare class Validity {
    Value: Value<number>;
    Type: Value<string>;
    constructor(properties: Validity);
}
export declare class ExtendedKeyUsage {
    ExtendedKeyUsageType?: Value<string>;
    ExtendedKeyUsageObjectIdentifier?: Value<string>;
    constructor(properties: ExtendedKeyUsage);
}
export declare class KeyUsage {
    DigitalSignature?: Value<boolean>;
    NonRepudiation?: Value<boolean>;
    KeyEncipherment?: Value<boolean>;
    DataEncipherment?: Value<boolean>;
    KeyAgreement?: Value<boolean>;
    KeyCertSign?: Value<boolean>;
    CRLSign?: Value<boolean>;
    EncipherOnly?: Value<boolean>;
    DecipherOnly?: Value<boolean>;
    constructor(properties: KeyUsage);
}
export interface CertificateProperties {
    ApiPassthrough?: ApiPassthrough;
    CertificateAuthorityArn: Value<string>;
    CertificateSigningRequest: Value<string>;
    SigningAlgorithm: Value<string>;
    TemplateArn?: Value<string>;
    Validity: Validity;
    ValidityNotBefore?: Validity;
}
export default class Certificate extends ResourceBase<CertificateProperties> {
    static Extensions: typeof Extensions;
    static Subject: typeof Subject;
    static PolicyInformation: typeof PolicyInformation;
    static PolicyQualifierInfo: typeof PolicyQualifierInfo;
    static Qualifier: typeof Qualifier;
    static GeneralName: typeof GeneralName;
    static ApiPassthrough: typeof ApiPassthrough;
    static EdiPartyName: typeof EdiPartyName;
    static OtherName: typeof OtherName;
    static Validity: typeof Validity;
    static ExtendedKeyUsage: typeof ExtendedKeyUsage;
    static KeyUsage: typeof KeyUsage;
    constructor(properties: CertificateProperties);
}
