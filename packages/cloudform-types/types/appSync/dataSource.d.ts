import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class AuthorizationConfig {
    AwsIamConfig?: AwsIamConfig;
    AuthorizationType: Value<string>;
    constructor(properties: AuthorizationConfig);
}
export declare class AwsIamConfig {
    SigningRegion?: Value<string>;
    SigningServiceName?: Value<string>;
    constructor(properties: AwsIamConfig);
}
export declare class DeltaSyncConfig {
    BaseTableTTL: Value<string>;
    DeltaSyncTableTTL: Value<string>;
    DeltaSyncTableName: Value<string>;
    constructor(properties: DeltaSyncConfig);
}
export declare class DynamoDBConfig {
    TableName: Value<string>;
    AwsRegion: Value<string>;
    Versioned?: Value<boolean>;
    DeltaSyncConfig?: DeltaSyncConfig;
    UseCallerCredentials?: Value<boolean>;
    constructor(properties: DynamoDBConfig);
}
export declare class ElasticsearchConfig {
    AwsRegion: Value<string>;
    Endpoint: Value<string>;
    constructor(properties: ElasticsearchConfig);
}
export declare class EventBridgeConfig {
    EventBusArn: Value<string>;
    constructor(properties: EventBridgeConfig);
}
export declare class HttpConfig {
    Endpoint: Value<string>;
    AuthorizationConfig?: AuthorizationConfig;
    constructor(properties: HttpConfig);
}
export declare class LambdaConfig {
    LambdaFunctionArn: Value<string>;
    constructor(properties: LambdaConfig);
}
export declare class OpenSearchServiceConfig {
    AwsRegion: Value<string>;
    Endpoint: Value<string>;
    constructor(properties: OpenSearchServiceConfig);
}
export declare class RdsHttpEndpointConfig {
    AwsRegion: Value<string>;
    Schema?: Value<string>;
    DatabaseName?: Value<string>;
    DbClusterIdentifier: Value<string>;
    AwsSecretStoreArn: Value<string>;
    constructor(properties: RdsHttpEndpointConfig);
}
export declare class RelationalDatabaseConfig {
    RdsHttpEndpointConfig?: RdsHttpEndpointConfig;
    RelationalDatabaseSourceType: Value<string>;
    constructor(properties: RelationalDatabaseConfig);
}
export interface DataSourceProperties {
    Type: Value<string>;
    OpenSearchServiceConfig?: OpenSearchServiceConfig;
    Description?: Value<string>;
    ServiceRoleArn?: Value<string>;
    EventBridgeConfig?: EventBridgeConfig;
    HttpConfig?: HttpConfig;
    RelationalDatabaseConfig?: RelationalDatabaseConfig;
    LambdaConfig?: LambdaConfig;
    ApiId: Value<string>;
    Name: Value<string>;
    DynamoDBConfig?: DynamoDBConfig;
    ElasticsearchConfig?: ElasticsearchConfig;
}
export default class DataSource extends ResourceBase<DataSourceProperties> {
    static AuthorizationConfig: typeof AuthorizationConfig;
    static AwsIamConfig: typeof AwsIamConfig;
    static DeltaSyncConfig: typeof DeltaSyncConfig;
    static DynamoDBConfig: typeof DynamoDBConfig;
    static ElasticsearchConfig: typeof ElasticsearchConfig;
    static EventBridgeConfig: typeof EventBridgeConfig;
    static HttpConfig: typeof HttpConfig;
    static LambdaConfig: typeof LambdaConfig;
    static OpenSearchServiceConfig: typeof OpenSearchServiceConfig;
    static RdsHttpEndpointConfig: typeof RdsHttpEndpointConfig;
    static RelationalDatabaseConfig: typeof RelationalDatabaseConfig;
    constructor(properties: DataSourceProperties);
}
