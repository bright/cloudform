import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface IdentityProviderProperties {
    IdentityProviderDetails: {
        [key: string]: Value<string>;
    };
    PortalArn?: Value<string>;
    IdentityProviderName: Value<string>;
    IdentityProviderType: Value<string>;
}
export default class IdentityProvider extends ResourceBase<IdentityProviderProperties> {
    constructor(properties: IdentityProviderProperties);
}
