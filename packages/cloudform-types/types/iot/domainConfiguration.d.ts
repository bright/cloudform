import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AuthorizerConfig {
    AllowAuthorizerOverride?: Value<boolean>;
    DefaultAuthorizerName?: Value<string>;
    constructor(properties: AuthorizerConfig);
}
export declare class ServerCertificateSummary {
    ServerCertificateArn?: Value<string>;
    ServerCertificateStatus?: Value<string>;
    ServerCertificateStatusDetail?: Value<string>;
    constructor(properties: ServerCertificateSummary);
}
export interface DomainConfigurationProperties {
    DomainConfigurationName?: Value<string>;
    AuthorizerConfig?: AuthorizerConfig;
    DomainName?: Value<string>;
    ServerCertificateArns?: List<Value<string>>;
    ServiceType?: Value<string>;
    ValidationCertificateArn?: Value<string>;
    DomainConfigurationStatus?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class DomainConfiguration extends ResourceBase<DomainConfigurationProperties> {
    static AuthorizerConfig: typeof AuthorizerConfig;
    static ServerCertificateSummary: typeof ServerCertificateSummary;
    constructor(properties?: DomainConfigurationProperties);
}
