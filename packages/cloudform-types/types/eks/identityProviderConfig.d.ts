import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class OidcIdentityProviderConfig {
    UsernamePrefix?: Value<string>;
    GroupsPrefix?: Value<string>;
    IssuerUrl: Value<string>;
    RequiredClaims?: List<RequiredClaim>;
    ClientId: Value<string>;
    GroupsClaim?: Value<string>;
    UsernameClaim?: Value<string>;
    constructor(properties: OidcIdentityProviderConfig);
}
export declare class RequiredClaim {
    Value: Value<string>;
    Key: Value<string>;
    constructor(properties: RequiredClaim);
}
export interface IdentityProviderConfigProperties {
    Type: Value<string>;
    ClusterName: Value<string>;
    IdentityProviderConfigName?: Value<string>;
    Oidc?: OidcIdentityProviderConfig;
    Tags?: List<ResourceTag>;
}
export default class IdentityProviderConfig extends ResourceBase<IdentityProviderConfigProperties> {
    static OidcIdentityProviderConfig: typeof OidcIdentityProviderConfig;
    static RequiredClaim: typeof RequiredClaim;
    constructor(properties: IdentityProviderConfigProperties);
}
