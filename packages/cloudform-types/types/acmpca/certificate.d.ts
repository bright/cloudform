import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ApiPassthrough {
    Extensions?: Extensions;
    Subject?: Subject;
    constructor(properties: ApiPassthrough);
}
export declare class CustomAttribute {
    Value: Value<string>;
    ObjectIdentifier: Value<string>;
    constructor(properties: CustomAttribute);
}
export declare class CustomExtension {
    Value: Value<string>;
    Critical?: Value<boolean>;
    ObjectIdentifier: Value<string>;
    constructor(properties: CustomExtension);
}
export declare class EdiPartyName {
    PartyName: Value<string>;
    NameAssigner: Value<string>;
    constructor(properties: EdiPartyName);
}
export declare class ExtendedKeyUsage {
    ExtendedKeyUsageType?: Value<string>;
    ExtendedKeyUsageObjectIdentifier?: Value<string>;
    constructor(properties: ExtendedKeyUsage);
}
export declare class Extensions {
    CustomExtensions?: List<CustomExtension>;
    CertificatePolicies?: List<PolicyInformation>;
    KeyUsage?: KeyUsage;
    SubjectAlternativeNames?: List<GeneralName>;
    ExtendedKeyUsage?: List<ExtendedKeyUsage>;
    constructor(properties: Extensions);
}
export declare class GeneralName {
    UniformResourceIdentifier?: Value<string>;
    DnsName?: Value<string>;
    EdiPartyName?: EdiPartyName;
    RegisteredId?: Value<string>;
    Rfc822Name?: Value<string>;
    OtherName?: OtherName;
    IpAddress?: Value<string>;
    DirectoryName?: Subject;
    constructor(properties: GeneralName);
}
export declare class KeyUsage {
    KeyEncipherment?: Value<boolean>;
    DataEncipherment?: Value<boolean>;
    DigitalSignature?: Value<boolean>;
    KeyCertSign?: Value<boolean>;
    DecipherOnly?: Value<boolean>;
    KeyAgreement?: Value<boolean>;
    NonRepudiation?: Value<boolean>;
    CRLSign?: Value<boolean>;
    EncipherOnly?: Value<boolean>;
    constructor(properties: KeyUsage);
}
export declare class OtherName {
    TypeId: Value<string>;
    Value: Value<string>;
    constructor(properties: OtherName);
}
export declare class PolicyInformation {
    CertPolicyId: Value<string>;
    PolicyQualifiers?: List<PolicyQualifierInfo>;
    constructor(properties: PolicyInformation);
}
export declare class PolicyQualifierInfo {
    Qualifier: Qualifier;
    PolicyQualifierId: Value<string>;
    constructor(properties: PolicyQualifierInfo);
}
export declare class Qualifier {
    CpsUri: Value<string>;
    constructor(properties: Qualifier);
}
export declare class Subject {
    Organization?: Value<string>;
    OrganizationalUnit?: Value<string>;
    Locality?: Value<string>;
    Title?: Value<string>;
    GivenName?: Value<string>;
    GenerationQualifier?: Value<string>;
    Initials?: Value<string>;
    CustomAttributes?: List<CustomAttribute>;
    SerialNumber?: Value<string>;
    State?: Value<string>;
    Country?: Value<string>;
    Surname?: Value<string>;
    DistinguishedNameQualifier?: Value<string>;
    CommonName?: Value<string>;
    Pseudonym?: Value<string>;
    constructor(properties: Subject);
}
export declare class Validity {
    Type: Value<string>;
    Value: Value<number>;
    constructor(properties: Validity);
}
export interface CertificateProperties {
    TemplateArn?: Value<string>;
    CertificateAuthorityArn: Value<string>;
    Validity: Validity;
    CertificateSigningRequest: Value<string>;
    SigningAlgorithm: Value<string>;
    ApiPassthrough?: ApiPassthrough;
    ValidityNotBefore?: Validity;
}
export default class Certificate extends ResourceBase<CertificateProperties> {
    static ApiPassthrough: typeof ApiPassthrough;
    static CustomAttribute: typeof CustomAttribute;
    static CustomExtension: typeof CustomExtension;
    static EdiPartyName: typeof EdiPartyName;
    static ExtendedKeyUsage: typeof ExtendedKeyUsage;
    static Extensions: typeof Extensions;
    static GeneralName: typeof GeneralName;
    static KeyUsage: typeof KeyUsage;
    static OtherName: typeof OtherName;
    static PolicyInformation: typeof PolicyInformation;
    static PolicyQualifierInfo: typeof PolicyQualifierInfo;
    static Qualifier: typeof Qualifier;
    static Subject: typeof Subject;
    static Validity: typeof Validity;
    constructor(properties: CertificateProperties);
}
