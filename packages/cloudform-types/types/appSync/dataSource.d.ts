import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class RelationalDatabaseConfig {
    RdsHttpEndpointConfig?: RdsHttpEndpointConfig;
    RelationalDatabaseSourceType: Value<string>;
    constructor(properties: RelationalDatabaseConfig);
}
export declare class AwsIamConfig {
    SigningRegion?: Value<string>;
    SigningServiceName?: Value<string>;
    constructor(properties: AwsIamConfig);
}
export declare class DynamoDBConfig {
    TableName: Value<string>;
    AwsRegion: Value<string>;
    UseCallerCredentials?: Value<boolean>;
    constructor(properties: DynamoDBConfig);
}
export declare class AuthorizationConfig {
    AwsIamConfig?: AwsIamConfig;
    AuthorizationType: Value<string>;
    constructor(properties: AuthorizationConfig);
}
export declare class RdsHttpEndpointConfig {
    AwsRegion: Value<string>;
    Schema?: Value<string>;
    DatabaseName?: Value<string>;
    DbClusterIdentifier: Value<string>;
    AwsSecretStoreArn: Value<string>;
    constructor(properties: RdsHttpEndpointConfig);
}
export declare class LambdaConfig {
    LambdaFunctionArn: Value<string>;
    constructor(properties: LambdaConfig);
}
export declare class HttpConfig {
    Endpoint: Value<string>;
    AuthorizationConfig?: AuthorizationConfig;
    constructor(properties: HttpConfig);
}
export declare class ElasticsearchConfig {
    AwsRegion: Value<string>;
    Endpoint: Value<string>;
    constructor(properties: ElasticsearchConfig);
}
export interface DataSourceProperties {
    Type: Value<string>;
    Description?: Value<string>;
    ServiceRoleArn?: Value<string>;
    HttpConfig?: HttpConfig;
    RelationalDatabaseConfig?: RelationalDatabaseConfig;
    LambdaConfig?: LambdaConfig;
    ApiId: Value<string>;
    Name: Value<string>;
    DynamoDBConfig?: DynamoDBConfig;
    ElasticsearchConfig?: ElasticsearchConfig;
}
export default class DataSource extends ResourceBase<DataSourceProperties> {
    static RelationalDatabaseConfig: typeof RelationalDatabaseConfig;
    static AwsIamConfig: typeof AwsIamConfig;
    static DynamoDBConfig: typeof DynamoDBConfig;
    static AuthorizationConfig: typeof AuthorizationConfig;
    static RdsHttpEndpointConfig: typeof RdsHttpEndpointConfig;
    static LambdaConfig: typeof LambdaConfig;
    static HttpConfig: typeof HttpConfig;
    static ElasticsearchConfig: typeof ElasticsearchConfig;
    constructor(properties: DataSourceProperties);
}
