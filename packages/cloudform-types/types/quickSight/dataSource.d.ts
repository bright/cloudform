import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AmazonElasticsearchParameters {
    Domain: Value<string>;
    constructor(properties: AmazonElasticsearchParameters);
}
export declare class AmazonOpenSearchParameters {
    Domain: Value<string>;
    constructor(properties: AmazonOpenSearchParameters);
}
export declare class AthenaParameters {
    WorkGroup?: Value<string>;
    RoleArn?: Value<string>;
    constructor(properties: AthenaParameters);
}
export declare class AuroraParameters {
    Port: Value<number>;
    Database: Value<string>;
    Host: Value<string>;
    constructor(properties: AuroraParameters);
}
export declare class AuroraPostgreSqlParameters {
    Port: Value<number>;
    Database: Value<string>;
    Host: Value<string>;
    constructor(properties: AuroraPostgreSqlParameters);
}
export declare class CredentialPair {
    AlternateDataSourceParameters?: List<DataSourceParameters>;
    Username: Value<string>;
    Password: Value<string>;
    constructor(properties: CredentialPair);
}
export declare class DataSourceCredentials {
    SecretArn?: Value<string>;
    CopySourceArn?: Value<string>;
    CredentialPair?: CredentialPair;
    constructor(properties: DataSourceCredentials);
}
export declare class DataSourceErrorInfo {
    Type?: Value<string>;
    Message?: Value<string>;
    constructor(properties: DataSourceErrorInfo);
}
export declare class DataSourceParameters {
    AuroraPostgreSqlParameters?: AuroraPostgreSqlParameters;
    TeradataParameters?: TeradataParameters;
    RdsParameters?: RdsParameters;
    AthenaParameters?: AthenaParameters;
    SparkParameters?: SparkParameters;
    MariaDbParameters?: MariaDbParameters;
    OracleParameters?: OracleParameters;
    PrestoParameters?: PrestoParameters;
    StarburstParameters?: StarburstParameters;
    RedshiftParameters?: RedshiftParameters;
    MySqlParameters?: MySqlParameters;
    SqlServerParameters?: SqlServerParameters;
    SnowflakeParameters?: SnowflakeParameters;
    AmazonElasticsearchParameters?: AmazonElasticsearchParameters;
    AmazonOpenSearchParameters?: AmazonOpenSearchParameters;
    PostgreSqlParameters?: PostgreSqlParameters;
    AuroraParameters?: AuroraParameters;
    S3Parameters?: S3Parameters;
    TrinoParameters?: TrinoParameters;
    DatabricksParameters?: DatabricksParameters;
    constructor(properties: DataSourceParameters);
}
export declare class DatabricksParameters {
    Port: Value<number>;
    Host: Value<string>;
    SqlEndpointPath: Value<string>;
    constructor(properties: DatabricksParameters);
}
export declare class ManifestFileLocation {
    Bucket: Value<string>;
    Key: Value<string>;
    constructor(properties: ManifestFileLocation);
}
export declare class MariaDbParameters {
    Port: Value<number>;
    Database: Value<string>;
    Host: Value<string>;
    constructor(properties: MariaDbParameters);
}
export declare class MySqlParameters {
    Port: Value<number>;
    Database: Value<string>;
    Host: Value<string>;
    constructor(properties: MySqlParameters);
}
export declare class OracleParameters {
    Port: Value<number>;
    Database: Value<string>;
    Host: Value<string>;
    constructor(properties: OracleParameters);
}
export declare class PostgreSqlParameters {
    Port: Value<number>;
    Database: Value<string>;
    Host: Value<string>;
    constructor(properties: PostgreSqlParameters);
}
export declare class PrestoParameters {
    Port: Value<number>;
    Host: Value<string>;
    Catalog: Value<string>;
    constructor(properties: PrestoParameters);
}
export declare class RdsParameters {
    InstanceId: Value<string>;
    Database: Value<string>;
    constructor(properties: RdsParameters);
}
export declare class RedshiftParameters {
    ClusterId?: Value<string>;
    Port?: Value<number>;
    Database: Value<string>;
    Host?: Value<string>;
    constructor(properties: RedshiftParameters);
}
export declare class ResourcePermission {
    Actions: List<Value<string>>;
    Principal: Value<string>;
    constructor(properties: ResourcePermission);
}
export declare class S3Parameters {
    ManifestFileLocation: ManifestFileLocation;
    RoleArn?: Value<string>;
    constructor(properties: S3Parameters);
}
export declare class SnowflakeParameters {
    Warehouse: Value<string>;
    Database: Value<string>;
    Host: Value<string>;
    constructor(properties: SnowflakeParameters);
}
export declare class SparkParameters {
    Port: Value<number>;
    Host: Value<string>;
    constructor(properties: SparkParameters);
}
export declare class SqlServerParameters {
    Port: Value<number>;
    Database: Value<string>;
    Host: Value<string>;
    constructor(properties: SqlServerParameters);
}
export declare class SslProperties {
    DisableSsl?: Value<boolean>;
    constructor(properties: SslProperties);
}
export declare class StarburstParameters {
    Port: Value<number>;
    ProductType?: Value<string>;
    Host: Value<string>;
    Catalog: Value<string>;
    constructor(properties: StarburstParameters);
}
export declare class TeradataParameters {
    Port: Value<number>;
    Database: Value<string>;
    Host: Value<string>;
    constructor(properties: TeradataParameters);
}
export declare class TrinoParameters {
    Port: Value<number>;
    Host: Value<string>;
    Catalog: Value<string>;
    constructor(properties: TrinoParameters);
}
export declare class VpcConnectionProperties {
    VpcConnectionArn: Value<string>;
    constructor(properties: VpcConnectionProperties);
}
export interface DataSourceProperties {
    DataSourceParameters?: DataSourceParameters;
    Type?: Value<string>;
    VpcConnectionProperties?: VpcConnectionProperties;
    AlternateDataSourceParameters?: List<DataSourceParameters>;
    ErrorInfo?: DataSourceErrorInfo;
    AwsAccountId?: Value<string>;
    Permissions?: List<ResourcePermission>;
    SslProperties?: SslProperties;
    Credentials?: DataSourceCredentials;
    DataSourceId?: Value<string>;
    Tags?: List<ResourceTag>;
    Name?: Value<string>;
}
export default class DataSource extends ResourceBase<DataSourceProperties> {
    static AmazonElasticsearchParameters: typeof AmazonElasticsearchParameters;
    static AmazonOpenSearchParameters: typeof AmazonOpenSearchParameters;
    static AthenaParameters: typeof AthenaParameters;
    static AuroraParameters: typeof AuroraParameters;
    static AuroraPostgreSqlParameters: typeof AuroraPostgreSqlParameters;
    static CredentialPair: typeof CredentialPair;
    static DataSourceCredentials: typeof DataSourceCredentials;
    static DataSourceErrorInfo: typeof DataSourceErrorInfo;
    static DataSourceParameters: typeof DataSourceParameters;
    static DatabricksParameters: typeof DatabricksParameters;
    static ManifestFileLocation: typeof ManifestFileLocation;
    static MariaDbParameters: typeof MariaDbParameters;
    static MySqlParameters: typeof MySqlParameters;
    static OracleParameters: typeof OracleParameters;
    static PostgreSqlParameters: typeof PostgreSqlParameters;
    static PrestoParameters: typeof PrestoParameters;
    static RdsParameters: typeof RdsParameters;
    static RedshiftParameters: typeof RedshiftParameters;
    static ResourcePermission: typeof ResourcePermission;
    static S3Parameters: typeof S3Parameters;
    static SnowflakeParameters: typeof SnowflakeParameters;
    static SparkParameters: typeof SparkParameters;
    static SqlServerParameters: typeof SqlServerParameters;
    static SslProperties: typeof SslProperties;
    static StarburstParameters: typeof StarburstParameters;
    static TeradataParameters: typeof TeradataParameters;
    static TrinoParameters: typeof TrinoParameters;
    static VpcConnectionProperties: typeof VpcConnectionProperties;
    constructor(properties?: DataSourceProperties);
}
