import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface SourceCredentialProperties {
    ServerType: Value<string>;
    Username?: Value<string>;
    Token: Value<string>;
    AuthType: Value<string>;
}
export default class SourceCredential extends ResourceBase<SourceCredentialProperties> {
    constructor(properties: SourceCredentialProperties);
}
