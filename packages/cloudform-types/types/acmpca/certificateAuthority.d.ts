import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class RevocationConfiguration {
    CrlConfiguration?: CrlConfiguration;
    constructor(properties: RevocationConfiguration);
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
export declare class CsrExtensions {
    KeyUsage?: KeyUsage;
    SubjectInformationAccess?: List<AccessDescription>;
    constructor(properties: CsrExtensions);
}
export declare class AccessDescription {
    AccessMethod: AccessMethod;
    AccessLocation: GeneralName;
    constructor(properties: AccessDescription);
}
export declare class EdiPartyName {
    PartyName: Value<string>;
    NameAssigner: Value<string>;
    constructor(properties: EdiPartyName);
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
export declare class AccessMethod {
    CustomObjectIdentifier?: Value<string>;
    AccessMethodType?: Value<string>;
    constructor(properties: AccessMethod);
}
export declare class OtherName {
    TypeId: Value<string>;
    Value: Value<string>;
    constructor(properties: OtherName);
}
export declare class CrlConfiguration {
    Enabled?: Value<boolean>;
    ExpirationInDays?: Value<number>;
    CustomCname?: Value<string>;
    S3BucketName?: Value<string>;
    S3ObjectAcl?: Value<string>;
    constructor(properties: CrlConfiguration);
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
export interface CertificateAuthorityProperties {
    Type: Value<string>;
    KeyAlgorithm: Value<string>;
    SigningAlgorithm: Value<string>;
    Subject: Subject;
    RevocationConfiguration?: RevocationConfiguration;
    Tags?: List<ResourceTag>;
    CsrExtensions?: CsrExtensions;
    KeyStorageSecurityStandard?: Value<string>;
}
export default class CertificateAuthority extends ResourceBase<CertificateAuthorityProperties> {
    static RevocationConfiguration: typeof RevocationConfiguration;
    static KeyUsage: typeof KeyUsage;
    static CsrExtensions: typeof CsrExtensions;
    static AccessDescription: typeof AccessDescription;
    static EdiPartyName: typeof EdiPartyName;
    static Subject: typeof Subject;
    static AccessMethod: typeof AccessMethod;
    static OtherName: typeof OtherName;
    static CrlConfiguration: typeof CrlConfiguration;
    static GeneralName: typeof GeneralName;
    constructor(properties: CertificateAuthorityProperties);
}
