import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class DeviceOptions {
    TenantId?: Value<string>;
    constructor(properties: DeviceOptions);
}
export declare class OidcOptions {
    TokenEndpoint?: Value<string>;
    Scope?: Value<string>;
    Issuer?: Value<string>;
    ClientSecret?: Value<string>;
    UserInfoEndpoint?: Value<string>;
    ClientId?: Value<string>;
    AuthorizationEndpoint?: Value<string>;
    constructor(properties: OidcOptions);
}
export declare class SseSpecification {
    CustomerManagedKeyEnabled?: Value<boolean>;
    KmsKeyArn?: Value<string>;
    constructor(properties: SseSpecification);
}
export interface VerifiedAccessTrustProviderProperties {
    PolicyReferenceName: Value<string>;
    DeviceOptions?: DeviceOptions;
    DeviceTrustProviderType?: Value<string>;
    Description?: Value<string>;
    OidcOptions?: OidcOptions;
    TrustProviderType: Value<string>;
    SseSpecification?: SseSpecification;
    UserTrustProviderType?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class VerifiedAccessTrustProvider extends ResourceBase<VerifiedAccessTrustProviderProperties> {
    static DeviceOptions: typeof DeviceOptions;
    static OidcOptions: typeof OidcOptions;
    static SseSpecification: typeof SseSpecification;
    constructor(properties: VerifiedAccessTrustProviderProperties);
}
