import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class As2Config {
    Compression?: Value<string>;
    MessageSubject?: Value<string>;
    BasicAuthSecretId?: Value<string>;
    PartnerProfileId?: Value<string>;
    EncryptionAlgorithm?: Value<string>;
    SigningAlgorithm?: Value<string>;
    LocalProfileId?: Value<string>;
    MdnResponse?: Value<string>;
    MdnSigningAlgorithm?: Value<string>;
    constructor(properties: As2Config);
}
export declare class SftpConfig {
    TrustedHostKeys?: List<Value<string>>;
    UserSecretId?: Value<string>;
    constructor(properties: SftpConfig);
}
export interface ConnectorProperties {
    As2Config?: As2Config;
    LoggingRole?: Value<string>;
    AccessRole: Value<string>;
    SftpConfig?: SftpConfig;
    Tags?: List<ResourceTag>;
    Url: Value<string>;
}
export default class Connector extends ResourceBase<ConnectorProperties> {
    static As2Config: typeof As2Config;
    static SftpConfig: typeof SftpConfig;
    constructor(properties: ConnectorProperties);
}
