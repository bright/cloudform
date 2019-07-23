import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare type Tags = List<ResourceTag>;
export declare class UserPoolConfig {
    AppIdClientRegex?: Value<string>;
    UserPoolId?: Value<string>;
    AwsRegion?: Value<string>;
    DefaultAction?: Value<string>;
    constructor(properties: UserPoolConfig);
}
export declare class OpenIDConnectConfig {
    Issuer?: Value<string>;
    ClientId?: Value<string>;
    AuthTTL?: Value<number>;
    IatTTL?: Value<number>;
    constructor(properties: OpenIDConnectConfig);
}
export declare class LogConfig {
    CloudWatchLogsRoleArn?: Value<string>;
    FieldLogLevel?: Value<string>;
    constructor(properties: LogConfig);
}
export declare class CognitoUserPoolConfig {
    AppIdClientRegex?: Value<string>;
    UserPoolId?: Value<string>;
    AwsRegion?: Value<string>;
    constructor(properties: CognitoUserPoolConfig);
}
export declare type AdditionalAuthenticationProviders = List<AdditionalAuthenticationProvider>;
export declare class AdditionalAuthenticationProvider {
    OpenIDConnectConfig?: OpenIDConnectConfig;
    UserPoolConfig?: CognitoUserPoolConfig;
    AuthenticationType: Value<string>;
    constructor(properties: AdditionalAuthenticationProvider);
}
export interface GraphQLApiProperties {
    OpenIDConnectConfig?: OpenIDConnectConfig;
    UserPoolConfig?: UserPoolConfig;
    Tags?: Tags;
    Name: Value<string>;
    AuthenticationType: Value<string>;
    LogConfig?: LogConfig;
    AdditionalAuthenticationProviders?: AdditionalAuthenticationProviders;
}
export default class GraphQLApi extends ResourceBase<GraphQLApiProperties> {
    static UserPoolConfig: typeof UserPoolConfig;
    static OpenIDConnectConfig: typeof OpenIDConnectConfig;
    static LogConfig: typeof LogConfig;
    static CognitoUserPoolConfig: typeof CognitoUserPoolConfig;
    static AdditionalAuthenticationProvider: typeof AdditionalAuthenticationProvider;
    constructor(properties: GraphQLApiProperties);
}
