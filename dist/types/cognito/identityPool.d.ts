import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface PushSyncProperties {
    ApplicationArns?: Value<string>[];
    RoleArn?: Value<string>;
}
export declare class PushSync extends ResourceBase {
    constructor(properties: PushSyncProperties, dependsOn?: Value<string>);
}
export interface CognitoIdentityProviderProperties {
    ServerSideTokenCheck?: Value<boolean>;
    ProviderName?: Value<string>;
    ClientId?: Value<string>;
}
export declare class CognitoIdentityProvider extends ResourceBase {
    constructor(properties: CognitoIdentityProviderProperties, dependsOn?: Value<string>);
}
export interface CognitoStreamsProperties {
    StreamingStatus?: Value<string>;
    StreamName?: Value<string>;
    RoleArn?: Value<string>;
}
export declare class CognitoStreams extends ResourceBase {
    constructor(properties: CognitoStreamsProperties, dependsOn?: Value<string>);
}
export interface IdentityPoolProperties {
    PushSync?: PushSync;
    CognitoIdentityProviders?: CognitoIdentityProvider[];
    CognitoEvents?: any;
    DeveloperProviderName?: Value<string>;
    CognitoStreams?: CognitoStreams;
    IdentityPoolName?: Value<string>;
    AllowUnauthenticatedIdentities: Value<boolean>;
    SupportedLoginProviders?: any;
    SamlProviderARNs?: Value<string>[];
    OpenIdConnectProviderARNs?: Value<string>[];
}
export default class IdentityPool extends ResourceBase {
    constructor(properties: IdentityPoolProperties, dependsOn?: Value<string>);
}
