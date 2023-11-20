import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AccessDescription {
    AccessMethod: AccessMethod;
    AccessLocation: GeneralName;
    constructor(properties: AccessDescription);
}
export declare class AccessMethod {
    CustomObjectIdentifier?: Value<string>;
    AccessMethodType?: Value<string>;
    constructor(properties: AccessMethod);
}
export declare class CrlConfiguration {
    CustomCname?: Value<string>;
    S3ObjectAcl?: Value<string>;
    ExpirationInDays?: Value<number>;
    Enabled?: Value<boolean>;
    S3BucketName?: Value<string>;
    constructor(properties: CrlConfiguration);
}
export declare class CsrExtensions {
    KeyUsage?: KeyUsage;
    SubjectInformationAccess?: List<AccessDescription>;
    constructor(properties: CsrExtensions);
}
export declare class CustomAttribute {
    Value: Value<string>;
    ObjectIdentifier: Value<string>;
    constructor(properties: CustomAttribute);
}
export declare class EdiPartyName {
    PartyName: Value<string>;
    NameAssigner: Value<string>;
    constructor(properties: EdiPartyName);
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
export declare class OcspConfiguration {
    OcspCustomCname?: Value<string>;
    Enabled?: Value<boolean>;
    constructor(properties: OcspConfiguration);
}
export declare class OtherName {
    TypeId: Value<string>;
    Value: Value<string>;
    constructor(properties: OtherName);
}
export declare class RevocationConfiguration {
    OcspConfiguration?: OcspConfiguration;
    CrlConfiguration?: CrlConfiguration;
    constructor(properties: RevocationConfiguration);
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
export interface CertificateAuthorityProperties {
    CsrExtensions?: CsrExtensions;
    Type: Value<string>;
    RevocationConfiguration?: RevocationConfiguration;
    UsageMode?: Value<string>;
    SigningAlgorithm: Value<string>;
    KeyStorageSecurityStandard?: Value<string>;
    Subject: Subject;
    Tags?: List<ResourceTag>;
    KeyAlgorithm: Value<string>;
}
export default class CertificateAuthority extends ResourceBase<CertificateAuthorityProperties> {
    static AccessDescription: typeof AccessDescription;
    static AccessMethod: typeof AccessMethod;
    static CrlConfiguration: typeof CrlConfiguration;
    static CsrExtensions: typeof CsrExtensions;
    static CustomAttribute: typeof CustomAttribute;
    static EdiPartyName: typeof EdiPartyName;
    static GeneralName: typeof GeneralName;
    static KeyUsage: typeof KeyUsage;
    static OcspConfiguration: typeof OcspConfiguration;
    static OtherName: typeof OtherName;
    static RevocationConfiguration: typeof RevocationConfiguration;
    static Subject: typeof Subject;
    constructor(properties: CertificateAuthorityProperties);
}
