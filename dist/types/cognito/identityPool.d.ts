import { ResourceBase } from '../resource';
import { Value } from '../internal';
import CognitoIdentityProvider from './cognitoIdentityProvider';
import CognitoStreams from './cognitoStreams';
import PushSync from './pushSync';
export interface IdentityPoolProperties {
    IdentityPoolName?: Value<string>;
    AllowUnauthenticatedIdentities: Value<boolean>;
    DeveloperProviderName?: Value<string>;
    SupportedLoginProviders?: any;
    CognitoIdentityProviders?: CognitoIdentityProvider[];
    SamlProviderARNs?: Value<string>[];
    OpenIdConnectProviderARNs?: Value<string>[];
    CognitoStreams?: CognitoStreams;
    PushSync?: PushSync;
    CognitoEvents?: any;
}
export default class IdentityPool extends ResourceBase {
    constructor(properties: IdentityPoolProperties, dependsOn?: Value<string>);
}
