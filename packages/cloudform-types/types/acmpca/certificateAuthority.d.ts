import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
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
export declare class RevocationConfiguration {
    CrlConfiguration?: CrlConfiguration;
    constructor(properties: RevocationConfiguration);
}
export declare class CrlConfiguration {
    Enabled?: Value<boolean>;
    ExpirationInDays?: Value<number>;
    CustomCname?: Value<string>;
    S3BucketName?: Value<string>;
    constructor(properties: CrlConfiguration);
}
export interface CertificateAuthorityProperties {
    Type: Value<string>;
    KeyAlgorithm: Value<string>;
    SigningAlgorithm: Value<string>;
    Subject: Subject;
    RevocationConfiguration?: RevocationConfiguration;
    Tags?: List<ResourceTag>;
}
export default class CertificateAuthority extends ResourceBase<CertificateAuthorityProperties> {
    static Subject: typeof Subject;
    static RevocationConfiguration: typeof RevocationConfiguration;
    static CrlConfiguration: typeof CrlConfiguration;
    constructor(properties: CertificateAuthorityProperties);
}
