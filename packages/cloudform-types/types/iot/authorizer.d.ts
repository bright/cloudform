import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface AuthorizerProperties {
    AuthorizerFunctionArn: Value<string>;
    AuthorizerName?: Value<string>;
    SigningDisabled?: Value<boolean>;
    Status?: Value<string>;
    TokenKeyName?: Value<string>;
    TokenSigningPublicKeys?: {
        [key: string]: Value<string>;
    };
    Tags?: List<ResourceTag>;
}
export default class Authorizer extends ResourceBase<AuthorizerProperties> {
    constructor(properties: AuthorizerProperties);
}
