import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class CertificateBasedAuthProperties {
    Status?: Value<string>;
    CertificateAuthorityArn?: Value<string>;
    constructor(properties: CertificateBasedAuthProperties);
}
export declare class ServiceAccountCredentials {
    AccountName: Value<string>;
    AccountPassword: Value<string>;
    constructor(properties: ServiceAccountCredentials);
}
export interface DirectoryConfigProperties {
    OrganizationalUnitDistinguishedNames: List<Value<string>>;
    ServiceAccountCredentials: ServiceAccountCredentials;
    CertificateBasedAuthProperties?: CertificateBasedAuthProperties;
    DirectoryName: Value<string>;
}
export default class DirectoryConfig extends ResourceBase<DirectoryConfigProperties> {
    static CertificateBasedAuthProperties: typeof CertificateBasedAuthProperties;
    static ServiceAccountCredentials: typeof ServiceAccountCredentials;
    constructor(properties: DirectoryConfigProperties);
}
