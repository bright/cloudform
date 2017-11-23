import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface PushSyncProperties {
    ApplicationArns?: List<Value<string>>;
    RoleArn?: Value<string>;
}
export declare class PushSync extends ResourceBase {
    constructor(properties: PushSyncProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface CognitoIdentityProviderProperties {
    ServerSideTokenCheck?: Value<boolean>;
    ProviderName?: Value<string>;
    ClientId?: Value<string>;
}
export declare class CognitoIdentityProvider extends ResourceBase {
    constructor(properties: CognitoIdentityProviderProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface CognitoStreamsProperties {
    StreamingStatus?: Value<string>;
    StreamName?: Value<string>;
    RoleArn?: Value<string>;
}
export declare class CognitoStreams extends ResourceBase {
    constructor(properties: CognitoStreamsProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface IdentityPoolProperties {
    PushSync?: PushSync;
    CognitoIdentityProviders?: List<CognitoIdentityProvider>;
    CognitoEvents?: any;
    DeveloperProviderName?: Value<string>;
    CognitoStreams?: CognitoStreams;
    IdentityPoolName?: Value<string>;
    AllowUnauthenticatedIdentities: Value<boolean>;
    SupportedLoginProviders?: any;
    SamlProviderARNs?: List<Value<string>>;
    OpenIdConnectProviderARNs?: List<Value<string>>;
}
export default class IdentityPool extends ResourceBase {
    constructor(properties: IdentityPoolProperties, dependsOn?: Value<string> | Value<string>[]);
}
