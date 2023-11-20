import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ApiKeyAuthParameters {
    ApiKeyValue: Value<string>;
    ApiKeyName: Value<string>;
    constructor(properties: ApiKeyAuthParameters);
}
export declare class AuthParameters {
    InvocationHttpParameters?: ConnectionHttpParameters;
    BasicAuthParameters?: BasicAuthParameters;
    ApiKeyAuthParameters?: ApiKeyAuthParameters;
    OAuthParameters?: OAuthParameters;
    constructor(properties: AuthParameters);
}
export declare class BasicAuthParameters {
    Username: Value<string>;
    Password: Value<string>;
    constructor(properties: BasicAuthParameters);
}
export declare class ClientParameters {
    ClientSecret: Value<string>;
    ClientID: Value<string>;
    constructor(properties: ClientParameters);
}
export declare class ConnectionHttpParameters {
    HeaderParameters?: List<Parameter>;
    QueryStringParameters?: List<Parameter>;
    BodyParameters?: List<Parameter>;
    constructor(properties: ConnectionHttpParameters);
}
export declare class OAuthParameters {
    ClientParameters: ClientParameters;
    OAuthHttpParameters?: ConnectionHttpParameters;
    AuthorizationEndpoint: Value<string>;
    HttpMethod: Value<string>;
    constructor(properties: OAuthParameters);
}
export declare class Parameter {
    Value: Value<string>;
    IsValueSecret?: Value<boolean>;
    Key: Value<string>;
    constructor(properties: Parameter);
}
export interface ConnectionProperties {
    AuthParameters: AuthParameters;
    Description?: Value<string>;
    AuthorizationType: Value<string>;
    Name?: Value<string>;
}
export default class Connection extends ResourceBase<ConnectionProperties> {
    static ApiKeyAuthParameters: typeof ApiKeyAuthParameters;
    static AuthParameters: typeof AuthParameters;
    static BasicAuthParameters: typeof BasicAuthParameters;
    static ClientParameters: typeof ClientParameters;
    static ConnectionHttpParameters: typeof ConnectionHttpParameters;
    static OAuthParameters: typeof OAuthParameters;
    static Parameter: typeof Parameter;
    constructor(properties: ConnectionProperties);
}
