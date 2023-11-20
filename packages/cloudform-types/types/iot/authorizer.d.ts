import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface AuthorizerProperties {
    Status?: Value<string>;
    TokenKeyName?: Value<string>;
    EnableCachingForHttp?: Value<boolean>;
    AuthorizerName?: Value<string>;
    TokenSigningPublicKeys?: {
        [key: string]: Value<string>;
    };
    SigningDisabled?: Value<boolean>;
    Tags?: List<ResourceTag>;
    AuthorizerFunctionArn: Value<string>;
}
export default class Authorizer extends ResourceBase<AuthorizerProperties> {
    constructor(properties: AuthorizerProperties);
}
