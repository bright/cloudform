import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface CognitoIdentityProviderProperties {
    ClientId?: Value<string>;
    ProviderName?: Value<string>;
    ServerSideTokenCheck?: Value<boolean>;
}
export default class CognitoIdentityProvider extends ResourceBase {
    constructor(properties: CognitoIdentityProviderProperties, dependsOn?: Value<string>);
}
