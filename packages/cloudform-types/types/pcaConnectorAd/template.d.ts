import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ApplicationPolicies {
    Policies: List<ApplicationPolicy>;
    Critical?: Value<boolean>;
    constructor(properties: ApplicationPolicies);
}
export declare class ApplicationPolicy {
    PolicyType?: Value<string>;
    PolicyObjectIdentifier?: Value<string>;
    constructor(properties: ApplicationPolicy);
}
export declare class CertificateValidity {
    ValidityPeriod: ValidityPeriod;
    RenewalPeriod: ValidityPeriod;
    constructor(properties: CertificateValidity);
}
export declare class EnrollmentFlagsV2 {
    NoSecurityExtension?: Value<boolean>;
    IncludeSymmetricAlgorithms?: Value<boolean>;
    UserInteractionRequired?: Value<boolean>;
    EnableKeyReuseOnNtTokenKeysetStorageFull?: Value<boolean>;
    RemoveInvalidCertificateFromPersonalStore?: Value<boolean>;
    constructor(properties: EnrollmentFlagsV2);
}
export declare class EnrollmentFlagsV3 {
    NoSecurityExtension?: Value<boolean>;
    IncludeSymmetricAlgorithms?: Value<boolean>;
    UserInteractionRequired?: Value<boolean>;
    EnableKeyReuseOnNtTokenKeysetStorageFull?: Value<boolean>;
    RemoveInvalidCertificateFromPersonalStore?: Value<boolean>;
    constructor(properties: EnrollmentFlagsV3);
}
export declare class EnrollmentFlagsV4 {
    NoSecurityExtension?: Value<boolean>;
    IncludeSymmetricAlgorithms?: Value<boolean>;
    UserInteractionRequired?: Value<boolean>;
    EnableKeyReuseOnNtTokenKeysetStorageFull?: Value<boolean>;
    RemoveInvalidCertificateFromPersonalStore?: Value<boolean>;
    constructor(properties: EnrollmentFlagsV4);
}
export declare class ExtensionsV2 {
    ApplicationPolicies?: ApplicationPolicies;
    KeyUsage: KeyUsage;
    constructor(properties: ExtensionsV2);
}
export declare class ExtensionsV3 {
    ApplicationPolicies?: ApplicationPolicies;
    KeyUsage: KeyUsage;
    constructor(properties: ExtensionsV3);
}
export declare class ExtensionsV4 {
    ApplicationPolicies?: ApplicationPolicies;
    KeyUsage: KeyUsage;
    constructor(properties: ExtensionsV4);
}
export declare class GeneralFlagsV2 {
    AutoEnrollment?: Value<boolean>;
    MachineType?: Value<boolean>;
    constructor(properties: GeneralFlagsV2);
}
export declare class GeneralFlagsV3 {
    AutoEnrollment?: Value<boolean>;
    MachineType?: Value<boolean>;
    constructor(properties: GeneralFlagsV3);
}
export declare class GeneralFlagsV4 {
    AutoEnrollment?: Value<boolean>;
    MachineType?: Value<boolean>;
    constructor(properties: GeneralFlagsV4);
}
export declare class KeyUsage {
    Critical?: Value<boolean>;
    UsageFlags: KeyUsageFlags;
    constructor(properties: KeyUsage);
}
export declare class KeyUsageFlags {
    KeyEncipherment?: Value<boolean>;
    DataEncipherment?: Value<boolean>;
    DigitalSignature?: Value<boolean>;
    KeyAgreement?: Value<boolean>;
    NonRepudiation?: Value<boolean>;
    constructor(properties: KeyUsageFlags);
}
export declare class KeyUsageProperty {
    PropertyFlags?: KeyUsagePropertyFlags;
    PropertyType?: Value<string>;
    constructor(properties: KeyUsageProperty);
}
export declare class KeyUsagePropertyFlags {
    Decrypt?: Value<boolean>;
    Sign?: Value<boolean>;
    KeyAgreement?: Value<boolean>;
    constructor(properties: KeyUsagePropertyFlags);
}
export declare class PrivateKeyAttributesV2 {
    MinimalKeyLength: Value<number>;
    KeySpec: Value<string>;
    CryptoProviders?: List<Value<string>>;
    constructor(properties: PrivateKeyAttributesV2);
}
export declare class PrivateKeyAttributesV3 {
    MinimalKeyLength: Value<number>;
    KeySpec: Value<string>;
    KeyUsageProperty: KeyUsageProperty;
    Algorithm: Value<string>;
    CryptoProviders?: List<Value<string>>;
    constructor(properties: PrivateKeyAttributesV3);
}
export declare class PrivateKeyAttributesV4 {
    MinimalKeyLength: Value<number>;
    KeySpec: Value<string>;
    KeyUsageProperty?: KeyUsageProperty;
    Algorithm?: Value<string>;
    CryptoProviders?: List<Value<string>>;
    constructor(properties: PrivateKeyAttributesV4);
}
export declare class PrivateKeyFlagsV2 {
    ExportableKey?: Value<boolean>;
    StrongKeyProtectionRequired?: Value<boolean>;
    ClientVersion: Value<string>;
    constructor(properties: PrivateKeyFlagsV2);
}
export declare class PrivateKeyFlagsV3 {
    RequireAlternateSignatureAlgorithm?: Value<boolean>;
    ExportableKey?: Value<boolean>;
    StrongKeyProtectionRequired?: Value<boolean>;
    ClientVersion: Value<string>;
    constructor(properties: PrivateKeyFlagsV3);
}
export declare class PrivateKeyFlagsV4 {
    RequireAlternateSignatureAlgorithm?: Value<boolean>;
    ExportableKey?: Value<boolean>;
    UseLegacyProvider?: Value<boolean>;
    StrongKeyProtectionRequired?: Value<boolean>;
    RequireSameKeyRenewal?: Value<boolean>;
    ClientVersion: Value<string>;
    constructor(properties: PrivateKeyFlagsV4);
}
export declare class SubjectNameFlagsV2 {
    SanRequireEmail?: Value<boolean>;
    SanRequireDns?: Value<boolean>;
    RequireCommonName?: Value<boolean>;
    SanRequireUpn?: Value<boolean>;
    SanRequireDomainDns?: Value<boolean>;
    SanRequireSpn?: Value<boolean>;
    RequireEmail?: Value<boolean>;
    RequireDirectoryPath?: Value<boolean>;
    SanRequireDirectoryGuid?: Value<boolean>;
    RequireDnsAsCn?: Value<boolean>;
    constructor(properties: SubjectNameFlagsV2);
}
export declare class SubjectNameFlagsV3 {
    SanRequireEmail?: Value<boolean>;
    SanRequireDns?: Value<boolean>;
    RequireCommonName?: Value<boolean>;
    SanRequireUpn?: Value<boolean>;
    SanRequireDomainDns?: Value<boolean>;
    SanRequireSpn?: Value<boolean>;
    RequireEmail?: Value<boolean>;
    RequireDirectoryPath?: Value<boolean>;
    SanRequireDirectoryGuid?: Value<boolean>;
    RequireDnsAsCn?: Value<boolean>;
    constructor(properties: SubjectNameFlagsV3);
}
export declare class SubjectNameFlagsV4 {
    SanRequireEmail?: Value<boolean>;
    SanRequireDns?: Value<boolean>;
    RequireCommonName?: Value<boolean>;
    SanRequireUpn?: Value<boolean>;
    SanRequireDomainDns?: Value<boolean>;
    SanRequireSpn?: Value<boolean>;
    RequireEmail?: Value<boolean>;
    RequireDirectoryPath?: Value<boolean>;
    SanRequireDirectoryGuid?: Value<boolean>;
    RequireDnsAsCn?: Value<boolean>;
    constructor(properties: SubjectNameFlagsV4);
}
export declare class TemplateDefinition {
    TemplateV4?: TemplateV4;
    TemplateV3?: TemplateV3;
    TemplateV2?: TemplateV2;
    constructor(properties: TemplateDefinition);
}
export declare class TemplateV2 {
    SubjectNameFlags: SubjectNameFlagsV2;
    SupersededTemplates?: List<Value<string>>;
    PrivateKeyFlags: PrivateKeyFlagsV2;
    PrivateKeyAttributes: PrivateKeyAttributesV2;
    GeneralFlags: GeneralFlagsV2;
    CertificateValidity: CertificateValidity;
    Extensions: ExtensionsV2;
    EnrollmentFlags: EnrollmentFlagsV2;
    constructor(properties: TemplateV2);
}
export declare class TemplateV3 {
    SubjectNameFlags: SubjectNameFlagsV3;
    SupersededTemplates?: List<Value<string>>;
    PrivateKeyFlags: PrivateKeyFlagsV3;
    PrivateKeyAttributes: PrivateKeyAttributesV3;
    GeneralFlags: GeneralFlagsV3;
    CertificateValidity: CertificateValidity;
    Extensions: ExtensionsV3;
    EnrollmentFlags: EnrollmentFlagsV3;
    HashAlgorithm: Value<string>;
    constructor(properties: TemplateV3);
}
export declare class TemplateV4 {
    SubjectNameFlags: SubjectNameFlagsV4;
    SupersededTemplates?: List<Value<string>>;
    PrivateKeyFlags: PrivateKeyFlagsV4;
    PrivateKeyAttributes: PrivateKeyAttributesV4;
    GeneralFlags: GeneralFlagsV4;
    CertificateValidity: CertificateValidity;
    Extensions: ExtensionsV4;
    EnrollmentFlags: EnrollmentFlagsV4;
    HashAlgorithm?: Value<string>;
    constructor(properties: TemplateV4);
}
export declare class ValidityPeriod {
    PeriodType: Value<string>;
    Period: Value<number>;
    constructor(properties: ValidityPeriod);
}
export interface TemplateProperties {
    ConnectorArn: Value<string>;
    Definition: TemplateDefinition;
    Tags?: {
        [key: string]: Value<string>;
    };
    Name: Value<string>;
    ReenrollAllCertificateHolders?: Value<boolean>;
}
export default class Template extends ResourceBase<TemplateProperties> {
    static ApplicationPolicies: typeof ApplicationPolicies;
    static ApplicationPolicy: typeof ApplicationPolicy;
    static CertificateValidity: typeof CertificateValidity;
    static EnrollmentFlagsV2: typeof EnrollmentFlagsV2;
    static EnrollmentFlagsV3: typeof EnrollmentFlagsV3;
    static EnrollmentFlagsV4: typeof EnrollmentFlagsV4;
    static ExtensionsV2: typeof ExtensionsV2;
    static ExtensionsV3: typeof ExtensionsV3;
    static ExtensionsV4: typeof ExtensionsV4;
    static GeneralFlagsV2: typeof GeneralFlagsV2;
    static GeneralFlagsV3: typeof GeneralFlagsV3;
    static GeneralFlagsV4: typeof GeneralFlagsV4;
    static KeyUsage: typeof KeyUsage;
    static KeyUsageFlags: typeof KeyUsageFlags;
    static KeyUsageProperty: typeof KeyUsageProperty;
    static KeyUsagePropertyFlags: typeof KeyUsagePropertyFlags;
    static PrivateKeyAttributesV2: typeof PrivateKeyAttributesV2;
    static PrivateKeyAttributesV3: typeof PrivateKeyAttributesV3;
    static PrivateKeyAttributesV4: typeof PrivateKeyAttributesV4;
    static PrivateKeyFlagsV2: typeof PrivateKeyFlagsV2;
    static PrivateKeyFlagsV3: typeof PrivateKeyFlagsV3;
    static PrivateKeyFlagsV4: typeof PrivateKeyFlagsV4;
    static SubjectNameFlagsV2: typeof SubjectNameFlagsV2;
    static SubjectNameFlagsV3: typeof SubjectNameFlagsV3;
    static SubjectNameFlagsV4: typeof SubjectNameFlagsV4;
    static TemplateDefinition: typeof TemplateDefinition;
    static TemplateV2: typeof TemplateV2;
    static TemplateV3: typeof TemplateV3;
    static TemplateV4: typeof TemplateV4;
    static ValidityPeriod: typeof ValidityPeriod;
    constructor(properties: TemplateProperties);
}
