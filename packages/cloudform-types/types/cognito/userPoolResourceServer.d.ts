import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ResourceServerScopeType {
    ScopeName: Value<string>;
    ScopeDescription: Value<string>;
    constructor(properties: ResourceServerScopeType);
}
export interface UserPoolResourceServerProperties {
    UserPoolId: Value<string>;
    Identifier: Value<string>;
    Scopes?: List<ResourceServerScopeType>;
    Name: Value<string>;
}
export default class UserPoolResourceServer extends ResourceBase<UserPoolResourceServerProperties> {
    static ResourceServerScopeType: typeof ResourceServerScopeType;
    constructor(properties: UserPoolResourceServerProperties);
}
