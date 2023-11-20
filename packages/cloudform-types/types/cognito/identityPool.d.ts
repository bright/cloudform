import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class CognitoIdentityProvider {
    ServerSideTokenCheck?: Value<boolean>;
    ProviderName?: Value<string>;
    ClientId?: Value<string>;
    constructor(properties: CognitoIdentityProvider);
}
export declare class CognitoStreams {
    StreamingStatus?: Value<string>;
    StreamName?: Value<string>;
    RoleArn?: Value<string>;
    constructor(properties: CognitoStreams);
}
export declare class PushSync {
    ApplicationArns?: List<Value<string>>;
    RoleArn?: Value<string>;
    constructor(properties: PushSync);
}
export interface IdentityPoolProperties {
    PushSync?: PushSync;
    CognitoIdentityProviders?: List<CognitoIdentityProvider>;
    CognitoEvents?: {
        [key: string]: any;
    };
    DeveloperProviderName?: Value<string>;
    CognitoStreams?: CognitoStreams;
    IdentityPoolName?: Value<string>;
    AllowUnauthenticatedIdentities: Value<boolean>;
    SupportedLoginProviders?: {
        [key: string]: any;
    };
    SamlProviderARNs?: List<Value<string>>;
    OpenIdConnectProviderARNs?: List<Value<string>>;
    AllowClassicFlow?: Value<boolean>;
}
export default class IdentityPool extends ResourceBase<IdentityPoolProperties> {
    static CognitoIdentityProvider: typeof CognitoIdentityProvider;
    static CognitoStreams: typeof CognitoStreams;
    static PushSync: typeof PushSync;
    constructor(properties: IdentityPoolProperties);
}
