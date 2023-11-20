import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AuthorizerConfig {
    DefaultAuthorizerName?: Value<string>;
    AllowAuthorizerOverride?: Value<boolean>;
    constructor(properties: AuthorizerConfig);
}
export declare class ServerCertificateSummary {
    ServerCertificateStatusDetail?: Value<string>;
    ServerCertificateArn?: Value<string>;
    ServerCertificateStatus?: Value<string>;
    constructor(properties: ServerCertificateSummary);
}
export declare class TlsConfig {
    SecurityPolicy?: Value<string>;
    constructor(properties: TlsConfig);
}
export interface DomainConfigurationProperties {
    DomainConfigurationName?: Value<string>;
    DomainName?: Value<string>;
    ServiceType?: Value<string>;
    DomainConfigurationStatus?: Value<string>;
    ValidationCertificateArn?: Value<string>;
    TlsConfig?: TlsConfig;
    ServerCertificateArns?: List<Value<string>>;
    AuthorizerConfig?: AuthorizerConfig;
    Tags?: List<ResourceTag>;
}
export default class DomainConfiguration extends ResourceBase<DomainConfigurationProperties> {
    static AuthorizerConfig: typeof AuthorizerConfig;
    static ServerCertificateSummary: typeof ServerCertificateSummary;
    static TlsConfig: typeof TlsConfig;
    constructor(properties?: DomainConfigurationProperties);
}
