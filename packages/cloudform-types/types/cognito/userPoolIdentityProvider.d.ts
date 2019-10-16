import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface UserPoolIdentityProviderProperties {
    ProviderName: Value<string>;
    UserPoolId: Value<string>;
    AttributeMapping?: {
        [key: string]: any;
    };
    ProviderDetails?: {
        [key: string]: any;
    };
    ProviderType: Value<string>;
    IdpIdentifiers?: List<Value<string>>;
}
export default class UserPoolIdentityProvider extends ResourceBase<UserPoolIdentityProviderProperties> {
    constructor(properties: UserPoolIdentityProviderProperties);
}
