import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AdditionalAuthenticationProvider {
    OpenIDConnectConfig?: OpenIDConnectConfig;
    LambdaAuthorizerConfig?: LambdaAuthorizerConfig;
    UserPoolConfig?: CognitoUserPoolConfig;
    AuthenticationType: Value<string>;
    constructor(properties: AdditionalAuthenticationProvider);
}
export declare class CognitoUserPoolConfig {
    AppIdClientRegex?: Value<string>;
    UserPoolId?: Value<string>;
    AwsRegion?: Value<string>;
    constructor(properties: CognitoUserPoolConfig);
}
export declare class LambdaAuthorizerConfig {
    IdentityValidationExpression?: Value<string>;
    AuthorizerUri?: Value<string>;
    AuthorizerResultTtlInSeconds?: Value<number>;
    constructor(properties: LambdaAuthorizerConfig);
}
export declare class LogConfig {
    CloudWatchLogsRoleArn?: Value<string>;
    ExcludeVerboseContent?: Value<boolean>;
    FieldLogLevel?: Value<string>;
    constructor(properties: LogConfig);
}
export declare class OpenIDConnectConfig {
    Issuer?: Value<string>;
    ClientId?: Value<string>;
    AuthTTL?: Value<number>;
    IatTTL?: Value<number>;
    constructor(properties: OpenIDConnectConfig);
}
export declare class UserPoolConfig {
    AppIdClientRegex?: Value<string>;
    UserPoolId?: Value<string>;
    AwsRegion?: Value<string>;
    DefaultAction?: Value<string>;
    constructor(properties: UserPoolConfig);
}
export interface GraphQLApiProperties {
    OpenIDConnectConfig?: OpenIDConnectConfig;
    MergedApiExecutionRoleArn?: Value<string>;
    OwnerContact?: Value<string>;
    Name: Value<string>;
    AdditionalAuthenticationProviders?: List<AdditionalAuthenticationProvider>;
    ApiType?: Value<string>;
    LambdaAuthorizerConfig?: LambdaAuthorizerConfig;
    XrayEnabled?: Value<boolean>;
    Visibility?: Value<string>;
    UserPoolConfig?: UserPoolConfig;
    Tags?: List<ResourceTag>;
    AuthenticationType: Value<string>;
    LogConfig?: LogConfig;
}
export default class GraphQLApi extends ResourceBase<GraphQLApiProperties> {
    static AdditionalAuthenticationProvider: typeof AdditionalAuthenticationProvider;
    static CognitoUserPoolConfig: typeof CognitoUserPoolConfig;
    static LambdaAuthorizerConfig: typeof LambdaAuthorizerConfig;
    static LogConfig: typeof LogConfig;
    static OpenIDConnectConfig: typeof OpenIDConnectConfig;
    static UserPoolConfig: typeof UserPoolConfig;
    constructor(properties: GraphQLApiProperties);
}
